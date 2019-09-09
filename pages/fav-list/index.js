var wanzikun_0x4304 = ['dLuGs', 'cXCPU', '/pages/goods-details/index?id=', 'navigateTo', 'rrxfC', 'currentTarget', 'dataset', 'switchTab', '/pages/index/index', 'iphone', 'FuXdO', '/shop/goods/fav/list', 'keZJE', 'TyghF', 'fztkC', 'XkeXq', 'setData', 'KXZCz', 'code', 'data', 'request', 'guPiP', 'globalData', 'urls', 'token', 'nZtyM', 'CPqzJ', 'SWKlG'];
(function(_0x481a3e, _0x2521bd) {
    var _0x346cb5 = function(_0x7e9ecf) {
        while (--_0x7e9ecf) {
            _0x481a3e['push'](_0x481a3e['shift']());
        }
    };
    _0x346cb5(++_0x2521bd);
}(wanzikun_0x4304, 0x136));
var wanzikun_0x13c4 = function(_0x226488, _0x3f00c2) {
    _0x226488 = _0x226488 - 0x0;
    var _0x7ddbb8 = wanzikun_0x4304[_0x226488];
    return _0x7ddbb8;
};
var wanzikun_0x2957f6 = getApp();
const app = getApp();
Page({
    'data': {
        loadingMoreHidden: true,
        childList: [],
        date: ''
        // childList: []
    },
    onLoad: function() {
        const self = this;
        const date = self.doHandleDate();
        self.setData({
            date: date
        })
        this.getData();
    },
    doHandleDate: function() {
        var myDate = new Date();
        var tYear = myDate.getFullYear();
        var tMonth = myDate.getMonth();

        var m = tMonth + 1;
        if (m.toString().length == 1) {
            m = "0" + m;
        }
        return tYear + '-' + m;
    },
    getData: function() {
        const self = this;
        wx.showLoading({});
        wx.request({
            url: app.globalData.url + `userImpl/childDLUser?USER_ID=${app.globalData.userInfo.USER_ID}&SALE_MONTH=${self.data.date}`,
            method: "GET",
            success: function(res) {
                if (res.data.result != 'error') {
                    self.setData({
                        childList: res.data.childList
                    })
                    wx.hideLoading({});
                } else {
                    wx.showToast({
                        title: '系统繁忙',
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
            complete(res) {
            }
        })
    },
    getDateTime: function(e) {
        this.setData({
            date: e.detail.value
        })
        this.getData();
    },
    toDetailsTap: function(e) {

    },
    'home': function() {
        wx[wanzikun_0x13c4('0x5')]({
            'url': wanzikun_0x13c4('0x6')
        });
    },
    // 'onShow': function () {
    //     var _0x4abb4d = {
    //         'KXZCz': function (_0x18ef1e, _0x120069) {
    //             return _0x18ef1e == _0x120069;
    //         },
    //         'FQaZB': wanzikun_0x13c4('0x7'),
    //         'nZtyM': function (_0x248f3d, _0x5adcfa) {
    //             return _0x248f3d !== _0x5adcfa;
    //         },
    //         'CPqzJ': wanzikun_0x13c4('0x8'),
    //         'dLuGs': function (_0x2bac0a, _0x343e4f) {
    //             return _0x2bac0a == _0x343e4f;
    //         },
    //         'cXCPU': function (_0x4d2c66, _0x4ec64c) {
    //             return _0x4d2c66 == _0x4ec64c;
    //         },
    //         'keZJE': function (_0x1e7b8a, _0x5a6c45) {
    //             return _0x1e7b8a == _0x5a6c45;
    //         },
    //         'TyghF': function (_0x37db2d, _0x2fb7d9) {
    //             return _0x37db2d === _0x2fb7d9;
    //         },
    //         'XkeXq': 'fztkC',
    //         'guPiP': function (_0x2f4799, _0x2471d0) {
    //             return _0x2f4799 + _0x2471d0;
    //         },
    //         'gzvae': wanzikun_0x13c4('0x9')
    //     };
    //     var _0x38ff4f = this;
    //     if (_0x4abb4d[wanzikun_0x13c4('0xa')](wanzikun_0x2957f6['globalData'][wanzikun_0x13c4('0x7')], !![])) {
    //         if (_0x4abb4d[wanzikun_0x13c4('0xb')](wanzikun_0x13c4('0xc'), _0x4abb4d[wanzikun_0x13c4('0xd')])) {
    //             _0x38ff4f[wanzikun_0x13c4('0xe')]({
    //                 'iphone': wanzikun_0x13c4('0x7')
    //             });
    //         } else {
    //             if (_0x4abb4d[wanzikun_0x13c4('0xf')](res['data'][wanzikun_0x13c4('0x10')], 0x0)) {
    //                 _0x38ff4f['setData']({
    //                     'favList': res[wanzikun_0x13c4('0x11')][wanzikun_0x13c4('0x11')],
    //                     'loadingMoreHidden': !![]
    //                 });
    //             } else if (res[wanzikun_0x13c4('0x11')][wanzikun_0x13c4('0x10')] == 0x194) {
    //                 _0x38ff4f[wanzikun_0x13c4('0xe')]({
    //                     'favList': null,
    //                     'loadingMoreHidden': ![]
    //                 });
    //             }
    //         }
    //     }
    //     wx[wanzikun_0x13c4('0x12')]({
    //         'url': _0x4abb4d[wanzikun_0x13c4('0x13')](wanzikun_0x2957f6[wanzikun_0x13c4('0x14')][wanzikun_0x13c4('0x15')], _0x4abb4d['gzvae']),
    //         'data': {
    //             'token': wanzikun_0x2957f6[wanzikun_0x13c4('0x14')][wanzikun_0x13c4('0x16')]
    //         },
    //         'success': function (_0xbc21e4) {
    //             var _0xf72966 = {
    //                 'SWKlG': _0x4abb4d['FQaZB']
    //             };
    //             if (_0x4abb4d[wanzikun_0x13c4('0x17')](_0x4abb4d[wanzikun_0x13c4('0x18')], 'FuXdO')) {
    //                 _0x38ff4f[wanzikun_0x13c4('0xe')]({
    //                     'iphone': _0xf72966[wanzikun_0x13c4('0x19')]
    //                 });
    //             } else {
    //                 if (_0x4abb4d[wanzikun_0x13c4('0x1a')](_0xbc21e4[wanzikun_0x13c4('0x11')][wanzikun_0x13c4('0x10')], 0x0)) {
    //                     _0x38ff4f[wanzikun_0x13c4('0xe')]({
    //                         'favList': _0xbc21e4[wanzikun_0x13c4('0x11')][wanzikun_0x13c4('0x11')],
    //                         'loadingMoreHidden': !![]
    //                     });
    //                 } else if (_0x4abb4d[wanzikun_0x13c4('0x1b')](_0xbc21e4[wanzikun_0x13c4('0x11')][wanzikun_0x13c4('0x10')], 0x194)) {
    //                     _0x38ff4f[wanzikun_0x13c4('0xe')]({
    //                         'favList': null,
    //                         'loadingMoreHidden': ![]
    //                     });
    //                 }
    //             }
    //         }
    //     });
    // }
});
