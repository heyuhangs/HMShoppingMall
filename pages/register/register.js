// pages/register/register.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        PHONE: '', // 电话
        PHONEErr: false,
        PASSWORD: '', //  密码
        NAME: '',  // 姓名
        BANKCODE: '',  //银行卡号
        BANKNAME: '', //  开户人
        PAR_ID: 2,//   推荐人ID。
        yzm: '获取验证码',
        isyzm: false,
        count: 120,
        yzmVal: '',
        yzmMsg: '',
        isdbName: true,
        isdbPhone: true,
        PAR_PHONE: '',
        isAutoPhone: false
    },
    parPhoneChange: function (event) {
        this.setData({
            PAR_PHONE: event.detail.detail.value
        })
    },
    nameChange: function (event) {
        this.setData({
            NAME: event.detail.detail.value
        })
    },
    passwordChange: function (event) {
        this.setData({
            PASSWORD: event.detail.detail.value
        })
    },
    bankCodeChange: function (event) {
        this.setData({
            BANKCODE: event.detail.detail.value
        })
    },
    bankNameChange: function (event) {
        this.setData({
            BANKNAME: event.detail.detail.value
        })
    },
    phoneChange: function (event) {
        this.setData({
            PHONE: event.detail.detail.value
        })
    },
    yzmValChange: function (event) {
        this.setData({
            yzmVal: event.detail.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const self = this;
        // this.getUserByPhone('13111111111');
        // this.getUserByPhone('15524444266');
        wx.showLoading({});
        if (app.globalData.payId != '' || app.globalData.payId) {
            this.data.PAR_ID = app.globalData.payId;
            self.findByUserInfo(app.globalData.payId);
        } else {
            self.setData({
                PAR_NAME: '无推荐人',
                PAR_PHONE: '无推荐人'
            })
            self.findByUserInfo(this.data.PAR_ID);
            wx.hideLoading({});
        }
    },
    onShow: function () {
        wx.showToast({
            title: '请补全个人信息!',
            icon: 'none',
            duration: 2000
        });
    },
    changeParPhone: function () {
        this.getUserByPhone(this.data.PAR_PHONE);
    },
    findByUserInfo: function (id) {
        const self = this;
        wx.request({
            url: app.globalData.url + `userImpl/userInfo?USER_ID=${id}`,
            method: "get",
            success: function (res) {
                // wx.showToast({
                //     title: '进入',
                //     icon: 'none',
                //     duration: 2000
                // });
                if (res.data.result == 'error') {
                    self.setData({
                        PAR_NAME: '无推荐人',
                        PAR_PHONE: '无推荐人'
                    })
                    wx.showToast({
                        title: '无此推荐人!',
                        icon: 'none',
                        duration: 2000
                    });
                    return false;
                }
                if (res.statusCode == 200) {
                    self.setData({
                        PAR_NAME: res.data.user.NAME,
                        PAR_PHONE: res.data.user.PHONE
                    })
                }
                wx.hideLoading({});
            }
        });
    },
    getUserByPhone: function (id) {
        const self = this;
        wx.request({
            url: app.globalData.url + `/userImpl/getUserByPhone?PHONE=${id}`,
            method: "get",
            success: function (res) {
                wx.showToast({
                    title: '进入',
                    icon: 'none',
                    duration: 2000
                });
                if (res.data.result == 'error') {
                    self.setData({
                        PAR_NAME: '无推荐人',
                        PAR_PHONE: '无推荐人'
                    })
                    wx.showToast({
                        title: '无此推荐人!',
                        icon: 'none',
                        duration: 2000
                    });
                    return false;
                }
                if (res.statusCode == 200) {
                    self.setData({
                        PAR_NAME: res.data.user.NAME,
                        PAR_PHONE: res.data.user.PHONE
                    })
                }
                wx.hideLoading({});
            }
        });
    },
    changePhone: function () {
        this.setData({
            PHONEErr: false
        })
    },
    handIcon: function () {
        this.setData({
            isdbPhone: false,
            isAutoPhone: true,
            PAR_PHONE: '',
            PAR_NAME: ''
        })
    },
    phoneValData: function () {
        const self = this;
        return new Promise(function (resolve, reject) {
            wx.request({
                url: app.globalData.url + `userImpl/checkPhone?PHONE=${self.data.PHONE}`,
                method: "get",
                success: function (res) {
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
    getCAPTCHA: function () {
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
                // wx.showToast({
                //     title: '该手机号已经被注册!',
                //     icon: 'none',
                //     duration: 2000
                // })
                return false;
            }
            wx.request({
                url: app.globalData.url + `userImpl/getCAPTCHA?PHONE=${self.data.PHONE}`,
                method: "get",
                success: function (res) {
                    if (res.statusCode == 200) {
                        self.setData({
                            yzmMsg: res.data.msg
                            // yzmVal: res.data.msg
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
            const timer = setInterval(function () {
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
    handleClick: function () {
        if (this.data.yzmVal != this.data.yzmMsg) {
            wx.showToast({
                title: '验证码错误!',
                icon: 'none',
                duration: 2000
            });
            return false;
        }
        const obj = {
            USER_ID: app.globalData.userInfo.USER_ID,
            PHONE: this.data.PHONE,
            PASSWORD: this.data.PASSWORD,
            NAME: this.data.NAME,
            BANKCODE: this.data.BANKCODE,
            BANKNAME: this.data.BANKNAME,
            PAR_ID: this.data.PAR_ID,
            WX_NICKNAME: app.globalData.userInfo.WX_NICKNAME,
            WX_IMG: app.globalData.userInfo.WX_IMG
        }
        wx.request({
            // url: app.globalData.url + `userImpl/editUser?USER_ID=${obj.USER_ID}&PHONE=${obj.PHONE}&PASSWORD=${obj.PASSWORD}&NAME=${obj.NAME}&BANKCODE=${obj.BANKCODE}&BANKNAME=${obj.BANKNAME}&PAR_ID=${obj.PAR_ID}&WX_NICKNAME=${obj.WX_NICKNAME}&WX_IMG=${obj.WX_IMG}`,
            url: app.globalData.url + `userImpl/editUser`,
            method: "POST",
            data: obj,
            success: function (res) {
                if (res.statusCode == 200) {
                    app.globalData.userInfo = res.data.userInfo;
                    wx.setStorage({
                        key: 'userInfo',
                        data: res.data.userInfo,
                        success: function (res) {
                        }
                    });
                    wx.showToast({
                        title: '保存成功!',
                        icon: 'success',
                        duration: 2000
                    })
                    setTimeout(function () {

                    }, 1500);
                    wx.reLaunch({
                        url: '/pages/index/index'
                    })
                }
            }
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
