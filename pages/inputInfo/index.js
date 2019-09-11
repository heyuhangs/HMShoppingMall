const app = getApp();
Page({
    data: {
        title: '',
        status: 0,
        yzm: '获取验证码',
        yzmMsg: '',
        ajxtrue: false,
        PHONE: '',
        BANKCODE: '',
        count: 60,
        isyzm: false,
        yzmVal: ''
    },
    onLoad: function(e) {
        const self = this
        self.setData({
            title: e.title,
            status: e.status,
        })
        if (e.status == 1) {
            self.setData({
                PHONE: e.val
            })
        } else {
            self.setData({
                BANKCODE: e.val
            })
        }
    },
    handleClick: function() {
        const self = this
        let obj = {}
        obj.USER_ID = app.globalData.userInfo.USER_ID
        if (!this.data.ajxtrue) {
            wx.showToast({
                title: '输入有错误!',
                icon: 'none',
                duration: 2000
            });
        }
        if (self.data.status == 1) {
            obj.PHONE = self.data.PHONE
        } else {
            obj.BANKCODE = self.data.BANKCODE
        }
        if (this.data.yzmVal != this.data.yzmMsg) {
            wx.showToast({
                title: '验证码错误!',
                icon: 'none',
                duration: 2000
            });
            return false;
        }
        wx.request({
            url: app.globalData.url + `/userImpl/editUser`,
            method: "post",
            data: obj,
            success: function(res) {
                if (res.data.result != 'error') {
                    wx.showToast({
                        title: '修改成功',
                        icon: 'success',
                        duration: 2000,
                        mask: true
                    })
                    setTimeout(function() {
                        wx.redirectTo({
                            url: `/pages/personalInformation/index?userId=${app.globalData.userInfo.USER_ID}`
                        })
                    }, 1800)
                } else {
                    wx.showToast({
                        title: '修改失败，请联系管理员',
                        icon: 'none',
                        duration: 2000,
                        mask: true
                    })
                }
            }
        })
    },
    changPhone: function(e) {
        this.setData({
            PHONE: e.detail.detail.value
        })
    },
    yzmChange: function(e) {
        this.setData({
            yzmVal: e.detail.detail.value
        })
    },
    changBankCode: function(e) {
        this.setData({
            BANKCODE: e.detail.detail.value
        })
    },
    phoneValData: function() {
        const self = this;
        return new Promise(function(resolve, reject) {
            wx.request({
                url: app.globalData.url + `userImpl/checkPhone?PHONE=${self.data.PHONE}`,
                method: "get",
                success: function(res) {
                    if (res.data.result == 'no') {
                        resolve({
                            code: 200
                        });
                    } else {
                        self.setData({
                            PHONEErr: true
                        });
                        wx.showToast({
                            title: '该手机号已经被注册!',
                            icon: 'none',
                            duration: 2000
                        });
                        resolve({
                            code: 400
                        });
                    }
                }
            })
        })
    },
    phoneChange: function(e) {
        const phone = e.detail.detail.value;
        let that = this
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            this.setData({
                ajxtrue: false
            })
            if (phone.length > 11 || phone.length < 11) {
                wx.showToast({
                    title: '手机号有误',
                    icon: 'none',
                    duration: 2000
                })
                that.setData({
                    PHONEErr: true
                })
            }
        } else {
            this.setData({
                ajxtrue: true,
                PHONEErr: false
            })
            console.log('验证成功', that.data.ajxtrue)
        }
    },
    getCAPTCHA: function() {
        const self = this;
        if (this.data.PHONE == '' || !this.data.PHONE) {
            wx.showToast({
                title: '请输入手机号!',
                icon: 'none',
                duration: 2000
            })
            return false
        }
        this.phoneValData().then(res => {
            if (res.code != 200) {
                wx.showToast({
                    title: '该手机号已经被注册!',
                    icon: 'none',
                    duration: 2000
                })
                return false;
            }
            if (self.data.isyzm) {
                return false;
            }
            wx.request({
                url: app.globalData.url + `userImpl/getCAPTCHA?PHONE=${self.data.PHONE}`,
                method: "get",
                success: function(res) {
                    if (res.statusCode == 200) {
                        self.setData({
                            yzmMsg: res.data.msg
                        })
                        wx.showToast({
                            title: '验证码发送成功!',
                            icon: 'success',
                            duration: 2000
                        })
                    } else {
                        wx.showToast({
                            title: '验证码发送失败，请重试!',
                            icon: 'none',
                            duration: 2000
                        })
                        return false;
                    }
                }
            })
            const timer = setInterval(function() {
                if (self.data.count == 0) {
                    clearInterval(this);
                    self.setData({
                        yzm: '获取验证码',
                        isyzm: false
                    })
                    // this.clearInterval();
                } else {
                    // --self.data.count
                    self.setData({
                        yzm: --self.data.count + '后可获取',
                        isyzm: true
                    })
                }
            }, 1000)
        })
    },
});
