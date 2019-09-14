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
var wanzikun_0x111576 = getApp();
const app = getApp();
Page({
    'data': {
        'balance': 0x0,
        je: '',
        visible: false,
        actions: [
            {
                name: '确认',
                color: '#b5272d',
            }
        ],
        jeErr: false,
        ajxtrue: false
    },
    onLoad: function() {
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
    },
    tChange: function(e) {
        const je = parseInt(e.detail.detail.value);
        let that = this
        if (!/^\d+$/.test(je)) {
            this.setData({
                ajxtrue: false
            })
            wx.showToast({
                title: '请输入整数',
                icon: 'none',
                duration: 2000
            })
            that.setData({
                jeErr: true
            })
        } else {
            if (je > 0) {
                this.setData({
                    ajxtrue: true,
                    jeErr: false
                })
                console.log('验证成功', that.data.ajxtrue)
            } else {
                wx.showToast({

                })
            }
        }
    },
    // : function (e) {
    //
    // //
    // },
    handleClick({ detail }) {
        wx.reLaunch({
            url: '/pages/my/index'
        })
    },
    bindSaveSub: function() {
        const self = this;
        if (!this.data.ajxtrue) {
            wx.showToast({
                title: '金额输入错误',
                icon: 'none',
                duration: 2000
            })
        }
        wx.showLoading({});
        const data = {
            userId: app.globalData.userInfo.USER_ID,
            oneMoney: self.data.je
        };
        wx.request({
            url: app.globalData.url + `/moneyImpl/withdraw`,
            method: "POST",
            data: data,
            success: function(res) {
                wx.hideLoading();
                if (res.data.code == 200) {
                    self.setData({
                        visible: true
                    })
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
    }
});
