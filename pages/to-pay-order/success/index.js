var wanzikun_0x323b = ['RWSSM', 'money', 'order', 'request', 'urls', 'kbTfP', 'eaLom', 'token', 'DvSAq', 'NqHrO', 'neprE', 'data', 'code', 'setData', '/order/pay', 'GLgqG', 'PnEZK', 'TrVSx', 'dataset', 'currentTarget', 'RWwIP', 'PfNxU', '无法获取用户资金信息', 'PScUH', 'hnhcd', 'jbeVK', 'gtnRj', 'balance', 'OJvWk', 'jHnfE', 'gzlkg', 'YiLAd', 'redirectTo', 'ywNGQ', 'eDBlB', 'hayRt', 'qiFar', 'Ovtnl', 'wxpay', '优惠不等人，商品一旦错过就不存在了哦～', 'showModal', 'WVEqh', '忍痛放弃', 'fKyjp', 'eeHch', 'VEQYF', 'cancel', '/pages/order-list/index?currentType=0&share=1', '../../../utils/pay.js', '/pages/order-list/index?currentType=1&share=1', 'POST', 'application/x-www-form-urlencoded', 'iphone', 'GPbYW', '/user/shipping-address/default', 'HdPHv', 'globalData', 'MPHid', 'nJBas'];
(function (_0x2a47a5, _0x2c063a) {
    var _0x14620b = function (_0x5eecde) {
        while (--_0x5eecde) {
            _0x2a47a5['push'](_0x2a47a5['shift']());
        }
    };
    _0x14620b(++_0x2c063a);
}(wanzikun_0x323b, 0x1cd));
var wanzikun_0x1691 = function (_0x12e1e3, _0x33d458) {
    _0x12e1e3 = _0x12e1e3 - 0x0;
    var _0x1031bb = wanzikun_0x323b[_0x12e1e3];
    return _0x1031bb;
};
var wanzikun_0x113fb7 = require(wanzikun_0x1691('0x0'));
var wanzikun_0x165ca6 = getApp();
const app = getApp();
Page({
    'data': {},
    onLoad: function (options) {
        const self = this;
        wx.showLoading({});
        if (options.isPayVip) {
            self.setData({
                orderCode: options.orderCode,
                countPay: options.count,
                status: options.status
            })
            wx.hideLoading();
        } else {
            wx.request({
                url: app.globalData.url + `/userImpl/getAddressList?USER_ID=${app.globalData.userInfo.USER_ID}&ADDRESS_ID=${options.addressId}`,
                method: "GET",
                success: function (res) {
                    if (res.statusCode == 200) {
                        self.setData({
                            addressObj: res.data.addList[0],
                            orderCode: options.orderCode,
                            countPay: options.count,
                            status: options.status
                        })
                        wx.hideLoading();
                    }
                }
            })
        }
    },
    toPay(countPay) {
        let oddNum = app.randomWord(true, 32, 32);
        let newObject = {
            body: '商品购买',
            openId: app.globalData.wxUser.openId,
            out_trade_no: oddNum,
            total_fee: countPay * 100
        }

    },
    toPayTap: function () {
        const self = this;
        wx.showLoading({});
        // if (this.data.status == 1) {
        //     self.toPay(self.data.countPay)
        // } else {
        //
        // }
        wx.request({
            url: app.globalData.url + `/orderImpl/orderPay?USER_ID=${app.globalData.userInfo.USER_ID}&ORDER_CODE=${this.data.orderCode}&PAY_TYPE=${this.data.status}`,
            method: "GET",
            success: function (res) {
                if (res.data.clear == 'yes' || res.statusCode == 200) {
                    wx.showToast({
                        title: '购买成功',
                        icon: 'success',
                        duration: 2000
                    });
                    setTimeout(function () {
                        wx.reLaunch({
                            url: '/pages/order-list/index?currentType=2&status=1'
                        })
                    }, 1500)
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 1000,
                        mask: true
                    })
                }
                wx.hideLoading({});
            }
        })
    },
    'closeOreder': function () {
        var _0x1aa24b = {
            'WVEqh': wanzikun_0x1691('0x32'),
            'fKyjp': '#999999',
            'eeHch': '我在想想',
            'VEQYF': '#b5272d'
        };
        wx[wanzikun_0x1691('0x33')]({
            'title': '',
            'content': _0x1aa24b[wanzikun_0x1691('0x34')],
            'cancelText': wanzikun_0x1691('0x35'),
            'cancelColor': _0x1aa24b[wanzikun_0x1691('0x36')],
            'confirmText': _0x1aa24b[wanzikun_0x1691('0x37')],
            'confirmColor': _0x1aa24b[wanzikun_0x1691('0x38')],
            'success': function (_0x1d3817) {
                if (_0x1d3817[wanzikun_0x1691('0x39')]) {
                    wx[wanzikun_0x1691('0x2b')]({
                        'url': wanzikun_0x1691('0x3a')
                    });
                }
            }
        });
    }
});
