var wanzikun_0x3daf = ['amount', 'EwSVj', 'qwYUM', 'iSNVM', 'showModal', 'ZimRp', 'WIxCi', 'VIeaH', 'nwdvY', 'myVMT', 'skKPB', 'eVzsv', 'confirm', 'msg', 'yiuvK', 'iphone', 'setData', 'request', 'globalData', 'urls', '/user/amount', 'token', 'xareV', 'data', 'code', 'oUHpd', 'WYuEH', 'balance', 'freeze', 'score', 'bindCancel', 'aquvU', 'rxUHd', 'gVeCb', 'KgXdW', 'navigateBack', 'aHaqb', 'woaHQ', '您的提现申请已提交，等待财务打款', '请填写正确的提现金额', '/user/withDraw/apply'];
(function(_0x2d8f05, _0x4b81bb) {
    var _0x4d74cb = function(_0x32719f) {
        while (--_0x32719f) {
            _0x2d8f05['push'](_0x2d8f05['shift']());
        }
    };
    _0x4d74cb(++_0x4b81bb);
}(wanzikun_0x3daf, 0x12d));
var wanzikun_0xfabc = function(_0x519992, _0x1e5c1b) {
    _0x519992 = _0x519992 - 0x0;
    var _0x189f5e = wanzikun_0x3daf[_0x519992];
    return _0x189f5e;
};
const app = getApp();
Page({
    'data': {
        'balance': 0x0,
        user: null,
        PHONE: '',
        ajxtrue: false,
        PAR_NAME: '请输入手机号',
        par_status: true,
        je: '',
        user_phone: ''
    },
    'onLoad': function() {
        const self = this;
        wx.request({
            url: app.globalData.url + `/userImpl/userInfo?USER_ID=${app.globalData.userInfo.USER_ID}`,
            method: "GET",
            success: function(res) {
                if (res.statusCode == 200) {
                    self.setData({
                        user: res.data.user
                    })
                }
            }
        })
        // var _0x3a0e19 = {
        //         'xareV': function(_0x4e5ea5, _0x1245c3) {
        //                 return _0x4e5ea5 == _0x1245c3;
        //         },
        //         'oUHpd': function(_0x2d6131, _0x3cf723) {
        //                 return _0x2d6131 === _0x3cf723;
        //         },
        //         'WYuEH': wanzikun_0xfabc('0x0')
        // };
        // var _0x2dca94 = this;
        // if (wanzikun_0x111576['globalData'][wanzikun_0xfabc('0x1')] == !![]) {
        //         _0x2dca94[wanzikun_0xfabc('0x2')]({
        //                 'iphone': wanzikun_0xfabc('0x1')
        //         });
        // }
        // wx[wanzikun_0xfabc('0x3')]({
        //         'url': wanzikun_0x111576[wanzikun_0xfabc('0x4')][wanzikun_0xfabc('0x5')] + wanzikun_0xfabc('0x6'),
        //         'data': {
        //                 'token': wanzikun_0x111576[wanzikun_0xfabc('0x4')][wanzikun_0xfabc('0x7')]
        //         },
        //         'success': function(_0x3255f9) {
        //                 if (_0x3a0e19[wanzikun_0xfabc('0x8')](_0x3255f9[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xa')], 0x0)) {
        //                         if (_0x3a0e19[wanzikun_0xfabc('0xb')](_0x3a0e19[wanzikun_0xfabc('0xc')], wanzikun_0xfabc('0x0'))) {
        //                                 _0x2dca94[wanzikun_0xfabc('0x2')]({
        //                                         'balance': _0x3255f9[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xd')],
        //                                         'freeze': _0x3255f9['data'][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xe')],
        //                                         'score': _0x3255f9[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xf')]
        //                                 });
        //                         } else {
        //                                 if (_0x3255f9['confirm']) {
        //                                         _0x2dca94[wanzikun_0xfabc('0x10')]();
        //                                 }
        //                         }
        //                 }
        //         }
        // });
    },
    phoneChange: function(e) {
        this.setData({
            PHONE: e.detail.detail.value
        })
    },
    phoneValData: function(e) {
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
                PHONEErr: false,
                user_phone: phone
            })
            that.searchUser(phone)
            console.log('验证成功', that.data.ajxtrue)
        }
    },
    searchUser: function(phone) {
        const self = this
        wx.request({
            url: app.globalData.url + `/userImpl/getUserByPhone?PHONE=${phone}`,
            method: "get",
            success: function(res) {
                if (res.data.result == 'error') {
                    self.setData({
                        PAR_NAME: '收款人不正确',
                        PAR_PHONE: '收款人不正确',
                        par_status: false
                    })
                    wx.showToast({
                        title: '收款人不正确!',
                        icon: 'none',
                        duration: 2000
                    });
                    return false;
                }
                if (res.statusCode == 200) {
                    self.setData({
                        PAR_NAME: res.data.user.NAME,
                        PAR_PHONE: res.data.user.PHONE,
                        PAR_ID: res.data.user.USER_ID,
                        par_status: true
                    })
                }
                wx.hideLoading({});
            }
        });
    },
    bindSave: function(e) {
        const self = this;
        wx.showLoading({});
        if (!this.data.ajxtrue) {
            wx.showToast({
                title: '手机号错误',
                icon: 'none',
                duration: 2000
            })
            return false;
        }
        if (self.data.PAR_ID == app.globalData.userInfo.USER_ID) {
            wx.showToast({
                title: '转账人不能是自己',
                icon: 'none',
                duration: 2000
            })
            return false;
        }
        if (!this.data.par_status) {
            wx.showToast({
                title: '收款人不正确',
                icon: 'none',
                duration: 2000
            })
            return false;
        }
        if (e.detail.value.amount == '') {
            wx.showToast({
                title: '填写转账金额',
                icon: 'none',
                duration: 2000
            })
            return false
        }
        if (e.detail.value.amount <= 0) {
            wx.showToast({
                title: '转账金额不能为0',
                icon: 'none',
                duration: 2000
            })
            return false
        }
        self.searchUser(this.data.user_phone);
        const data = {
            remitterId: app.globalData.userInfo.USER_ID,
            payeeId: self.data.PAR_ID,
            oneMoney: e.detail.value.amount,
            MoneyTransferType: 2
        };
        wx.request({
            url: app.globalData.url + `/moneyImpl/transfer`,
            method: "POST",
            data: data,
            success: function(res) {
                if (res.data.msg == 'success') {
                    wx.showToast({
                        title: '转账成功',
                        icon: 'success',
                        duration: 2000,
                        mask: true
                    });
                    setTimeout(function() {
                        wx.navigateTo({
                            url: '/pages/capitalMovements/index'
                        })
                    }, 1800)
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 1000,
                        mask: true
                    });
                }
            }
        })
    },
    // transfer
    'onReady': function() {
    },
    // 'onShow': function () {
    //     var _0x35679c = {
    //         'rxUHd': function (_0x79cf96, _0x360190) {
    //             return _0x79cf96 == _0x360190;
    //         },
    //         'ekgTo': function (_0x1128c9, _0x467221) {
    //             return _0x1128c9 !== _0x467221;
    //         },
    //         'gVeCb': 'pZblL',
    //         'KgXdW': wanzikun_0xfabc('0x11'),
    //         'jkXkC': function (_0x14d363, _0x114aba) {
    //             return _0x14d363 + _0x114aba;
    //         }
    //     };
    //     var _0x5cebdf = this;
    //     wx[wanzikun_0xfabc('0x3')]({
    //         'url': _0x35679c['jkXkC'](wanzikun_0x111576[wanzikun_0xfabc('0x4')][wanzikun_0xfabc('0x5')], '/user/amount'),
    //         'data': {
    //             'token': wanzikun_0x111576['globalData'][wanzikun_0xfabc('0x7')]
    //         },
    //         'success': function (_0x4753d8) {
    //             if (_0x35679c[wanzikun_0xfabc('0x12')](_0x4753d8[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xa')], 0x0)) {
    //                 if (_0x35679c['ekgTo'](_0x35679c[wanzikun_0xfabc('0x13')], _0x35679c[wanzikun_0xfabc('0x14')])) {
    //                     _0x5cebdf[wanzikun_0xfabc('0x2')]({
    //                         'balance': _0x4753d8[wanzikun_0xfabc('0x9')]['data'][wanzikun_0xfabc('0xd')],
    //                         'freeze': _0x4753d8[wanzikun_0xfabc('0x9')]['data'][wanzikun_0xfabc('0xe')],
    //                         'score': _0x4753d8[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xf')]
    //                     });
    //                 } else {
    //                     _0x5cebdf[wanzikun_0xfabc('0x10')]();
    //                 }
    //             }
    //         }
    //     });
    // },
    'onHide': function() {
    },
    'onUnload': function() {
    },
    'onPullDownRefresh': function() {
    },
    'onReachBottom': function() {
    },
    'onShareAppMessage': function() {
    },
    'bindCancel': function() {
        wx[wanzikun_0xfabc('0x15')]({});
    },
    // 'bindSave': function(_0x480b89) {
    //
    // }
});
