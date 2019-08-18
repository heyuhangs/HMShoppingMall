var wanzikun_0x3594 = ['code', 'ovqQX', '/user/shipping-address/update', 'true', 'currentTarget', 'dataset', 'request', 'BohWj', 'globalData', 'urls', 'tqbfq', 'token', 'qIKoU', 'JnBvu', 'xLVMQ', 'initShippingAddress', '/pages/address-add/index', 'navigateTo', 'HyWBL', '/pages/address-add/index?id=', 'LIsDf', 'MvYfB', 'iphone', 'setData', '/user/shipping-address/list', 'BljWt', 'data'];
(function (_0x5b3175, _0x437db8) {
    var _0x272ae9 = function (_0x4b70e3) {
        while (--_0x4b70e3) {
            _0x5b3175['push'](_0x5b3175['shift']());
        }
    };
    _0x272ae9(++_0x437db8);
}(wanzikun_0x3594, 0x196));
var wanzikun_0x4919 = function (_0x4546c4, _0x30f326) {
    _0x4546c4 = _0x4546c4 - 0x0;
    var _0x5a4601 = wanzikun_0x3594[_0x4546c4];
    return _0x5a4601;
};
var wanzikun_0x137a38 = getApp();
const app = getApp();
Page({
    'data': {
        addressList: [],
        selects: 0,
        optionsGoodsId: false
    },
    selectTap: function (e) {
        if (this.data.selects) {
            if (this.data.optionsGoodsId) {
                wx.redirectTo({
                    url: `/pages/to-pay-order/index?myAddress=${e.currentTarget.dataset.id.USER_ID}&selects=1&optionsGoodsId=${this.data.optionsGoodsId}&num=${this.data.num}`
                })
            } else {
                wx.redirectTo({
                    url: `/pages/to-pay-order/index?myAddress=${e.currentTarget.dataset.id.USER_ID}&selects=1`
                })
            }
        } else {
            return false
        }
        // wx.setStorage({
        //     key: "myAddress",
        //     data: e.currentTarget.dataset.id,
        //     success: function () {
        //         wx.navigateBack();   //返回上一个页面
        //     }
        // })
    },
    'addAddess': function () {
        var _0x4c47a1 = {
            'HyWBL': wanzikun_0x4919('0xf')
        };
        wx.redirectTo({
            url: _0x4c47a1[wanzikun_0x4919('0x11')]
        })
    },
    'editAddess': function (_0x3b7953) {
        var _0x1ab862 = {
            'ydjBI': function (_0x6c69c8, _0x575a45) {
                return _0x6c69c8 + _0x575a45;
            },
            'LIsDf': wanzikun_0x4919('0x12')
        };
        wx.redirectTo({
            url: _0x1ab862['ydjBI'](_0x1ab862[wanzikun_0x4919('0x13')], _0x3b7953[wanzikun_0x4919('0x3')]['dataset']['id'])
        })
        // wx[wanzikun_0x4919('0x10')]({
        //     'url':
        // });
    },
    'onLoad': function (e) {
        const self = this;
        if (e.selects) {
            self.setData({
                selects: e.selects
            })
        }
        if (e.optionsGoodsId) {
            self.setData({
                optionsGoodsId: e.optionsGoodsId,
                num: e.num
            })
        }
        wx.showLoading({});
        wx.request({
            url: app.globalData.url + `/userImpl/getAddressList?USER_ID=${app.globalData.userInfo.USER_ID}`,
            method: "GET",
            success: function (res) {
                if (res.statusCode == 200) {
                    self.setData({
                        addressList: res.data.addList
                    })
                    wx.hideLoading();
                }
            }
        })
    },
    'onShow': function () {
        this[wanzikun_0x4919('0xe')]();
    },
    'initShippingAddress': function () {
        var _0x478696 = {
            'BljWt': function (_0x1c71b6, _0x89c9c6) {
                return _0x1c71b6 == _0x89c9c6;
            },
            'uICze': wanzikun_0x4919('0x17')
        };
        var _0x39ac01 = this;
        wx[wanzikun_0x4919('0x5')]({
            'url': wanzikun_0x137a38[wanzikun_0x4919('0x7')][wanzikun_0x4919('0x8')] + _0x478696['uICze'],
            'data': {
                'token': wanzikun_0x137a38[wanzikun_0x4919('0x7')][wanzikun_0x4919('0xa')]
            },
            'success': _0x2e99bf => {
                if (_0x478696[wanzikun_0x4919('0x18')](_0x2e99bf[wanzikun_0x4919('0x19')][wanzikun_0x4919('0x1a')], 0x0)) {
                    _0x39ac01[wanzikun_0x4919('0x16')]({
                        'addressList': _0x2e99bf[wanzikun_0x4919('0x19')][wanzikun_0x4919('0x19')],
                        'loadingMoreHidden': !![]
                    });
                } else if (_0x2e99bf[wanzikun_0x4919('0x19')][wanzikun_0x4919('0x1a')] == 0x2bc) {
                    _0x39ac01[wanzikun_0x4919('0x16')]({
                        'addressList': null,
                        'loadingMoreHidden': ![]
                    });
                }
            }
        });
    }
});
