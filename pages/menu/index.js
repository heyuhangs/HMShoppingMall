var wanzikun_0x59b3 = ['hideLoading', 'level', 'ZKMUa', 'GDASu', 'XcFBs', 'DVGUn', 'count_id_no_pay', 'setTabBarBadge', 'IJoRX', 'ijevD', 'removeTabBarBadge', 'getGoodsList', 'GUpWh', 'fXNMW', 'xEUlB', 'Wrkby', 'SUDBJ', 'AaqoZ', 'shopCarInfo', 'wyVob', 'shopNum', 'mZhPG', 'fRMOg', 'NHopO', 'UNnRo', 'ucWvp', 'dWdXE', 'RMEyE', 'YrswD', 'Hcvuc', 'pid', 'IIRxK', 'cIbYV', '/pages/goods-details/index?id=', 'IYvCm', 'JQzNx', 'Nvzff', 'pZykd', '/order/statistics', 'getStorage', 'iPhone X', 'iphoneTop', 'CchyY', 'ejFDP', 'dyewt', 'guzeY', 'rDyZv', 'Qyesp', 'HRbRR', 'gjoXE', 'arPCS', 'setData', 'currentTarget', 'data', 'activeCategoryId', '/pages/menu-list/index?id=', 'navigateTo', 'jPHaN', 'dataset', 'detail', 'current', 'SCjRA', 'nTtcl', '/shop/goods/list', 'globalData', 'urls', 'qAIiN', 'value', 'qTYpC', 'NPGfN', 'length', 'push', 'XzDHW', 'iphonesearch', '所有分类', 'VMHDg', '/banner/list', '/shop/goods/category/all', 'showLoading', 'jVcQd', 'model', 'search', 'vzYMz', 'dAiKQ', 'request', 'PsEHj', 'mallName', 'goods', 'lcbSd', 'code', 'gABhg', 'ZrztG', 'ykXVe', 'LMIzl'];
(function(_0xf2ac15, _0x55d85e) {
    var _0x40120f = function(_0x8891b1) {
        while (--_0x8891b1) {
            _0xf2ac15['push'](_0xf2ac15['shift']());
        }
    };
    _0x40120f(++_0x55d85e);
}(wanzikun_0x59b3, 0x91));
var wanzikun_0x3c04 = function(_0x2d8f05, _0x4b81bb) {
    _0x2d8f05 = _0x2d8f05 - 0x0;
    var _0x4d74cb = wanzikun_0x59b3[_0x2d8f05];
    return _0x4d74cb;
};
var wanzikun_0x3fa451 = getApp();
const app = getApp();
Page({
    'data': {
        'indicatorDots': !![],
        'autoplay': !![],
        'interval': 0x1f40,
        'duration': 0x320,
        'swiperCurrent': 0x0,
        'selectCurrent': 0x0,
        activeCategoryId: '',
        'loadingMoreHidden': !![],
        'search': !![],
        'nonehidden': !![],
        'searchidden': !![],
         // categories:[{"id":0,"name":"所有分类"},{"dateAdd":"2018-04-04 12:46:54","icon":"","id":10450,"isUse":true,"key":"1","level":1,"name":"居家生活","paixu":1,"pid":0,"type":"","userId":797},{"dateAdd":"2018-04-04 12:52:47","icon":"","id":10457,"isUse":true,"key":"2","level":1,"name":"配件装饰","paixu":2,"pid":0,"type":"","userId":797},{"dateAdd":"2018-04-04 13:02:01","icon":"","id":10463,"isUse":true,"key":"3","level":1,"name":"新品服装","paixu":3,"pid":0,"type":"","userId":797}],
         // categorieslist:[{"dateAdd":"2018-04-04 12:47:47","icon":"https://cdn.it120.cc/apifactory/2018/05/24/772862baa0197b71c5eee745542c956f.png","id":10451,"isUse":true,"key":"2","level":2,"NAME":"床品","paixu":2,"pid":10450,"type":"","userId":797},{"dateAdd":"2018-04-04 12:48:20","icon":"https://cdn.it120.cc/apifactory/2018/05/24/fd91b4091346a46acdabe22712a969c4.png","id":10452,"isUse":true,"key":"3","level":2,"NAME":"布艺","paixu":3,"pid":10450,"type":"","userId":797},{"dateAdd":"2018-04-04 12:48:53","icon":"https://cdn.it120.cc/apifactory/2018/05/24/4d951246d110116e16ca028437664a27.png","id":10453,"isUse":true,"key":"4","level":2,"NAME":"收纳","paixu":4,"pid":10450,"type":"","userId":797},{"dateAdd":"2018-04-04 12:49:27","icon":"https://cdn.it120.cc/apifactory/2018/04/02/f8a757674a02ed90bd7be8f20302d043.png","id":10454,"isUse":true,"key":"5","level":2,"NAME":"宠物","paixu":5,"pid":10450,"type":"","userId":797},{"dateAdd":"2018-04-04 12:50:48","icon":"https://cdn.it120.cc/apifactory/2018/04/02/9657ee1e7cff3c65b696b05dc9ff5ad2.png","id":10455,"isUse":true,"key":"6","level":2,"NAME":"装饰","paixu":6,"pid":10450,"type":"","userId":797},{"dateAdd":"2018-04-04 12:51:25","icon":"https://cdn.it120.cc/apifactory/2018/04/02/ccbb08b5dec9146e69bad924516bbe43.png","id":10456,"isUse":true,"key":"7","level":2,"NAME":"家具","paixu":7,"pid":10450,"type":"","userId":797},{"dateAdd":"2018-04-04 12:53:39","icon":"https://cdn.it120.cc/apifactory/2018/04/02/9b48f6a3c770cdc91cebe594d1c9dc9c.png","id":10458,"isUse":true,"key":"1","level":2,"NAME":"男包","paixu":1,"pid":10457,"type":"","userId":797},{"dateAdd":"2018-04-04 12:53:57","icon":"https://cdn.it120.cc/apifactory/2018/04/02/f47c4a127a2252fb7ddda391fa439bfa.png","id":10459,"isUse":true,"key":"2","level":2,"NAME":"女包","paixu":2,"pid":10457,"type":"","userId":797},{"dateAdd":"2018-04-04 12:55:00","icon":"https://cdn.it120.cc/apifactory/2018/04/02/6ba34412fdbb97a11346c36545b1e946.png","id":10460,"isUse":true,"key":"3","level":2,"NAME":"围巾","paixu":3,"pid":10457,"type":"","userId":797},{"dateAdd":"2018-04-04 12:55:21","icon":"https://cdn.it120.cc/apifactory/2018/04/02/ba9b544de8f486ebb3ba4044d77ff323.png","id":10461,"isUse":true,"key":"4","level":2,"NAME":"拖鞋","paixu":4,"pid":10457,"type":"","userId":797},{"dateAdd":"2018-04-04 12:55:41","icon":"https://cdn.it120.cc/apifactory/2018/04/02/64237e0b117f7880a8b711ce72e32bf2.png","id":10462,"isUse":true,"key":"5","level":2,"NAME":"眼镜","paixu":5,"pid":10457,"type":"","userId":797},{"dateAdd":"2018-04-04 13:03:07","icon":"https://cdn.it120.cc/apifactory/2018/04/02/f236825564bc5a27becdf26fa856782e.png","id":10464,"isUse":true,"key":"1","level":2,"NAME":"衬衫","paixu":1,"pid":10463,"type":"","userId":797},{"dateAdd":"2018-04-04 13:03:51","icon":"https://cdn.it120.cc/apifactory/2018/04/02/d0353c59382cbd8a6ff7c0e7d365b813.png","id":10465,"isUse":true,"key":"2","level":2,"NAME":"T恤","paixu":2,"pid":10463,"type":"","userId":797},{"dateAdd":"2018-04-04 13:04:19","icon":"https://cdn.it120.cc/apifactory/2018/04/02/70f0ab3b4d26c3da3e42a65e4ce0fcac.png","id":10466,"isUse":true,"key":"3","level":2,"NAME":"卫衣","paixu":3,"pid":10463,"type":"","userId":797},{"dateAdd":"2018-04-04 13:05:18","icon":"https://cdn.it120.cc/apifactory/2018/04/02/33f86e8983a60ca971e1a5f3d7c78bb4.png","id":10467,"isUse":true,"key":"4","level":2,"NAME":"针织","paixu":4,"pid":10463,"type":"","userId":797},{"dateAdd":"2018-04-04 13:06:08","icon":"https://cdn.it120.cc/apifactory/2018/04/02/982ab7b5cdd9c11b22d31c39429e190d.png","id":10468,"isUse":true,"key":"5","level":2,"NAME":"内衣","paixu":5,"pid":10463,"type":"","userId":797},{"dateAdd":"2018-04-04 13:06:44","icon":"https://cdn.it120.cc/apifactory/2018/04/02/a59e6679df4618800d74515d29b8267c.png","id":10469,"isUse":true,"key":"6","level":2,"NAME":"内裤","paixu":6,"pid":10463,"type":"","userId":797}]
    },
    'swiperchange': function(_0x56cf88) {
        this[wanzikun_0x3c04('0x0')]({
            'swiperCurrent': _0x56cf88[wanzikun_0x3c04('0x8')][wanzikun_0x3c04('0x9')]
        });
    },
    'search': function(_0x31764c) {
        var _0x177d26 = {
            'qTYpC': function(_0x2a5b21, _0x1ae3f6) {
                return _0x2a5b21 == _0x1ae3f6;
            },
            'NPGfN': function(_0x5b81fc, _0x16c9b6) {
                return _0x5b81fc < _0x16c9b6;
            },
            'CTUow': wanzikun_0x3c04('0xa'),
            'XzDHW': wanzikun_0x3c04('0xb'),
            'BSKXb': function(_0x11ecce, _0x3f980d) {
                return _0x11ecce + _0x3f980d;
            },
            'qAIiN': wanzikun_0x3c04('0xc')
        };
        var _0x2eca6c = this;
        wx['request']({
            'url': _0x177d26['BSKXb'](wanzikun_0x3fa451[wanzikun_0x3c04('0xd')][wanzikun_0x3c04('0xe')], _0x177d26[wanzikun_0x3c04('0xf')]),
            'data': {
                'nameLike': _0x31764c[wanzikun_0x3c04('0x8')][wanzikun_0x3c04('0x10')]
            },
            'success': function(_0x30973b) {
                if (_0x177d26[wanzikun_0x3c04('0x11')](_0x30973b[wanzikun_0x3c04('0x2')]['code'], 0x0)) {
                    var _0x1b197a = [];
                    for (var _0x5610f1 = 0x0; _0x177d26[wanzikun_0x3c04('0x12')](_0x5610f1, _0x30973b[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x13')]); _0x5610f1++) {
                        _0x1b197a[wanzikun_0x3c04('0x14')](_0x30973b['data']['data'][_0x5610f1]);
                    }
                    _0x2eca6c[wanzikun_0x3c04('0x0')]({
                        'searchs': _0x1b197a,
                        'searchidden': ![],
                        'nonehidden': !![]
                    });
                } else {
                    if (_0x177d26['CTUow'] !== _0x177d26[wanzikun_0x3c04('0x15')]) {
                        _0x2eca6c['setData']({
                            'searchidden': !![],
                            'nonehidden': ![]
                        });
                    } else {
                        _0x2eca6c[wanzikun_0x3c04('0x0')]({
                            'searchidden': !![],
                            'nonehidden': ![]
                        });
                    }
                }
            }
        });
    },
    'searchfocus': function() {
        this[wanzikun_0x3c04('0x0')]({
            'search': ![],
            'searchinput': !![]
        });
    },
    'searchclose': function() {
        this[wanzikun_0x3c04('0x0')]({
            'search': !![],
            'searchinput': ![]
        });
    },
    // 'onLoad': function() {
    //     var _0x1da4fb = {
    //         'jVcQd': function(_0x167160, _0x3b9033) {
    //             return _0x167160 != _0x3b9033;
    //         },
    //         'FLyYn': 'iPhone X',
    //         'vzYMz': 'iphoneTop',
    //         'dAiKQ': wanzikun_0x3c04('0x16'),
    //         'lcbSd': function(_0x560d0d, _0x39eb51) {
    //             return _0x560d0d == _0x39eb51;
    //         },
    //         'DVGUn': function(_0x4725b7, _0x70cd6c) {
    //             return _0x4725b7 > _0x70cd6c;
    //         },
    //         'IJoRX': function(_0x1cf532, _0xa953c8) {
    //             return _0x1cf532 + _0xa953c8;
    //         },
    //         'ijevD': function(_0x381d08, _0x34edff) {
    //             return _0x381d08 + _0x34edff;
    //         },
    //         'ykXVe': wanzikun_0x3c04('0x17'),
    //         'LMIzl': function(_0x3aed21, _0x464611) {
    //             return _0x3aed21 == _0x464611;
    //         },
    //         'ZKMUa': function(_0x25678c, _0x2f728f) {
    //             return _0x25678c === _0x2f728f;
    //         },
    //         'GDASu': 'drzBk',
    //         'XcFBs': wanzikun_0x3c04('0x18'),
    //         'PsEHj': wanzikun_0x3c04('0x19'),
    //         'gABhg': function(_0x49a2cd, _0x4d70dc) {
    //             return _0x49a2cd + _0x4d70dc;
    //         },
    //         'ZrztG': wanzikun_0x3c04('0x1a')
    //     };
    //     wx[wanzikun_0x3c04('0x1b')]();
    //     var _0x28b765 = this;
    //     wx['getSystemInfo']({
    //         'success': function(_0x47a1de) {
    //             if (_0x1da4fb[wanzikun_0x3c04('0x1c')](_0x47a1de[wanzikun_0x3c04('0x1d')][wanzikun_0x3c04('0x1e')](_0x1da4fb['FLyYn']), -0x1)) {
    //                 _0x28b765[wanzikun_0x3c04('0x0')]({
    //                     'iphone': _0x1da4fb[wanzikun_0x3c04('0x1f')],
    //                     'iponesc': _0x1da4fb[wanzikun_0x3c04('0x20')]
    //                 });
    //             }
    //         }
    //     });
    //     wx[wanzikun_0x3c04('0x21')]({
    //         'url': wanzikun_0x3fa451['globalData'][wanzikun_0x3c04('0xe')] + _0x1da4fb[wanzikun_0x3c04('0x22')],
    //         'data': {
    //             'key': wanzikun_0x3c04('0x23'),
    //             'type': wanzikun_0x3c04('0x24')
    //         },
    //         'success': function(_0x63b39f) {
    //             if (_0x1da4fb[wanzikun_0x3c04('0x25')](_0x63b39f['data'][wanzikun_0x3c04('0x26')], 0x0)) {
    //                 _0x28b765[wanzikun_0x3c04('0x0')]({
    //                     'banners': _0x63b39f['data']['data']
    //                 });
    //             }
    //         }
    //     }), wx[wanzikun_0x3c04('0x21')]({
    //         'url': _0x1da4fb[wanzikun_0x3c04('0x27')](wanzikun_0x3fa451[wanzikun_0x3c04('0xd')][wanzikun_0x3c04('0xe')], _0x1da4fb[wanzikun_0x3c04('0x28')]),
    //         'success': function(_0x4f1f85) {
    //             var _0x1b0305 = [{
    //                 'id': 0x0,
    //                 'name': _0x1da4fb[wanzikun_0x3c04('0x29')]
    //             }];
    //             if (_0x1da4fb[wanzikun_0x3c04('0x2a')](_0x4f1f85['data'][wanzikun_0x3c04('0x26')], 0x0)) {
    //                 wx[wanzikun_0x3c04('0x2b')]();
    //                 for (var _0x35585a = 0x0; _0x35585a < _0x4f1f85['data'][wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x13')]; _0x35585a++) {
    //                     if (_0x1da4fb[wanzikun_0x3c04('0x2a')](_0x4f1f85[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')][_0x35585a][wanzikun_0x3c04('0x2c')], 0x1)) {
    //                         if (_0x1da4fb[wanzikun_0x3c04('0x2d')](_0x1da4fb[wanzikun_0x3c04('0x2e')], _0x1da4fb[wanzikun_0x3c04('0x2f')])) {
    //                             if (_0x4f1f85['data'][wanzikun_0x3c04('0x26')] == 0x0) {
    //                                 if (_0x1da4fb[wanzikun_0x3c04('0x30')](_0x4f1f85[wanzikun_0x3c04('0x2')]['data'][wanzikun_0x3c04('0x31')], 0x0)) {
    //                                     wx[wanzikun_0x3c04('0x32')]({
    //                                         'index': 0x3,
    //                                         'text': _0x1da4fb[wanzikun_0x3c04('0x33')](_0x1da4fb[wanzikun_0x3c04('0x34')]('', _0x4f1f85[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')]['count_id_no_pay']), '')
    //                                     });
    //                                 } else {
    //                                     wx[wanzikun_0x3c04('0x35')]({
    //                                         'index': 0x3
    //                                     });
    //                                 }
    //                             }
    //                         } else {
    //                             _0x1b0305[wanzikun_0x3c04('0x14')](_0x4f1f85[wanzikun_0x3c04('0x2')]['data'][_0x35585a]);
    //                         }
    //                     }
    //                 }
    //             }
    //             _0x28b765[wanzikun_0x3c04('0x0')]({
    //                 'categories': _0x1b0305,
    //                 'activeCategoryId': 0x0
    //             });
    //             _0x28b765[wanzikun_0x3c04('0x36')](0x0);
    //         }
    //     });
    // },
    onLoad: function () {
        const self = this;
        wx.showLoading({});
        wx.request({
            url: app.globalData.url+'/goodImpl/classOneGoodTypeList',
            method: "GET",
            success: function(res) {
                if(res.statusCode == 200){
                    self.setData({
                        categories: res.data.typeList,
                        activeCategoryId: res.data.typeList[0].USER_ID
                    });
                    self.getGoodTypeList(self.data.activeCategoryId);
                }
                wx.hideLoading({});
            }
        })
    },
    tabClick: function(e) {
        this.setData({
            activeCategoryId: e.currentTarget.id
        });
        this.getGoodTypeList(this.data.activeCategoryId);
    },
    levelClick: function(_0x4894a3) {
        const self = this;
        const _0x567abd = {
            'jPHaN': wanzikun_0x3c04('0x4')
        };
        wx[wanzikun_0x3c04('0x5')]({
            'url': _0x567abd[wanzikun_0x3c04('0x6')] + _0x4894a3[wanzikun_0x3c04('0x1')][wanzikun_0x3c04('0x7')]['id'] + `&oId=${self.data.activeCategoryId}`
        });
    },
    getGoodTypeList: function (id) {
        const self = this;
        wx.request({
            url: app.globalData.url+`/goodImpl/classOneGoodListById?id=${id}`,
            method: "GET",
            success: function(res) {
                if(res.statusCode == 200){
                    self.setData({
                        categorieslist: res.data.typeList
                    })
                }
            }
        })
    },
    getGoodsList: function () {

    },
    // 'getGoodsList': function(_0x45479b) {
    //     var _0x4c1477 = {
    //         'Wrkby': function(_0x2828a5, _0x2e81ad) {
    //             return _0x2828a5 + _0x2e81ad;
    //         },
    //         'xEUlB': function(_0x4c1a51, _0x121266) {
    //             return _0x4c1a51 == _0x121266;
    //         },
    //         'IIRxK': function(_0x2811f2, _0x26c003) {
    //             return _0x2811f2 !== _0x26c003;
    //         },
    //         'AaqoZ': wanzikun_0x3c04('0x37'),
    //         'NHopO': function(_0x134e24, _0x1760f6) {
    //             return _0x134e24 < _0x1760f6;
    //         },
    //         'UNnRo': function(_0x2c4d2a, _0x56751a) {
    //             return _0x2c4d2a != _0x56751a;
    //         },
    //         'RMEyE': function(_0x558c6f, _0xd15bd1) {
    //             return _0x558c6f === _0xd15bd1;
    //         },
    //         'Hcvuc': 'uPeYH',
    //         'cIbYV': wanzikun_0x3c04('0x38'),
    //         'SUDBJ': wanzikun_0x3c04('0x1a')
    //     };
    //     if (_0x4c1477[wanzikun_0x3c04('0x39')](_0x45479b, 0x0)) {
    //         _0x45479b = '';
    //     }
    //     var _0x113169 = this;
    //     wx[wanzikun_0x3c04('0x21')]({
    //         'url': _0x4c1477[wanzikun_0x3c04('0x3a')](wanzikun_0x3fa451[wanzikun_0x3c04('0xd')][wanzikun_0x3c04('0xe')], _0x4c1477[wanzikun_0x3c04('0x3b')]),
    //         'success': function(_0x3af31d) {
    //             var _0x59b4a9 = {
    //                 'wyVob': function(_0x5d6f74, _0x563f5c) {
    //                     return _0x5d6f74 > _0x563f5c;
    //                 },
    //                 'mZhPG': function(_0x35f27d, _0x1d634b) {
    //                     return _0x4c1477[wanzikun_0x3c04('0x3a')](_0x35f27d, _0x1d634b);
    //                 },
    //                 'fRMOg': function(_0x395f08, _0x35e23a) {
    //                     return _0x4c1477[wanzikun_0x3c04('0x3a')](_0x395f08, _0x35e23a);
    //                 }
    //             };
    //             var _0x1d127e = [];
    //             if (_0x4c1477[wanzikun_0x3c04('0x39')](_0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x26')], 0x0)) {
    //                 if (_0x4c1477['IIRxK'](_0x4c1477[wanzikun_0x3c04('0x3c')], wanzikun_0x3c04('0x37'))) {
    //                     _0x113169[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x3d')] = _0x3af31d[wanzikun_0x3c04('0x2')];
    //                     if (_0x59b4a9[wanzikun_0x3c04('0x3e')](_0x3af31d['data'][wanzikun_0x3c04('0x3f')], 0x0)) {
    //                         wx['setTabBarBadge']({
    //                             'index': 0x2,
    //                             'text': _0x59b4a9[wanzikun_0x3c04('0x40')](_0x59b4a9[wanzikun_0x3c04('0x41')]('', _0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x3f')]), '')
    //                         });
    //                     } else {
    //                         wx['removeTabBarBadge']({
    //                             'index': 0x2
    //                         });
    //                     }
    //                 } else {
    //                     for (var _0x29c1e5 = 0x0; _0x4c1477[wanzikun_0x3c04('0x42')](_0x29c1e5, _0x3af31d[wanzikun_0x3c04('0x2')]['data']['length']); _0x29c1e5++) {
    //                         if (_0x4c1477[wanzikun_0x3c04('0x43')](_0x45479b, '')) {
    //                             if (wanzikun_0x3c04('0x44') === wanzikun_0x3c04('0x45')) {
    //                                 if (_0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x26')] == 0x0) {
    //                                     _0x113169[wanzikun_0x3c04('0x0')]({
    //                                         'banners': _0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')]
    //                                     });
    //                                 }
    //                             } else {
    //                                 if (_0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')][_0x29c1e5]['pid'] == _0x45479b) {
    //                                     _0x1d127e[wanzikun_0x3c04('0x14')](_0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')][_0x29c1e5]);
    //                                 }
    //                             }
    //                         } else {
    //                             if (_0x4c1477[wanzikun_0x3c04('0x46')](wanzikun_0x3c04('0x47'), _0x4c1477[wanzikun_0x3c04('0x48')])) {
    //                                 categories['push'](_0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')][_0x29c1e5]);
    //                             } else {
    //                                 if (_0x3af31d[wanzikun_0x3c04('0x2')]['data'][_0x29c1e5][wanzikun_0x3c04('0x49')] != 0x0) {
    //                                     if (_0x4c1477[wanzikun_0x3c04('0x4a')](_0x4c1477[wanzikun_0x3c04('0x4b')], _0x4c1477[wanzikun_0x3c04('0x4b')])) {
    //                                         _0x113169[wanzikun_0x3c04('0x0')]({
    //                                             'banners': _0x3af31d['data'][wanzikun_0x3c04('0x2')]
    //                                         });
    //                                     } else {
    //                                         _0x1d127e['push'](_0x3af31d[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')][_0x29c1e5]);
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //             // _0x113169[wanzikun_0x3c04('0x0')]({
    //             //     'categorieslist': _0x1d127e
    //             // });
    //         }
    //     });
    // },
    'toDetailsTap': function(_0x982d55) {
        var _0x510c8e = {
            'IYvCm': function(_0x4fea23, _0x292648) {
                return _0x4fea23 + _0x292648;
            },
            'JQzNx': wanzikun_0x3c04('0x4c')
        };
        wx[wanzikun_0x3c04('0x5')]({
            'url': _0x510c8e[wanzikun_0x3c04('0x4d')](_0x510c8e[wanzikun_0x3c04('0x4e')], _0x982d55[wanzikun_0x3c04('0x1')]['dataset']['id'])
        });
        this[wanzikun_0x3c04('0x0')]({
            'search': !![],
            'searchinput': ![]
        });
    },
    'onShow': function() {
        var _0x5616dc = {
            'TZvxX': function(_0x4892ff, _0x5ba8d8) {
                return _0x4892ff != _0x5ba8d8;
            },
            'CchyY': wanzikun_0x3c04('0x4f'),
            'ejFDP': function(_0x122a02, _0x2ce019) {
                return _0x122a02 + _0x2ce019;
            },
            'dyewt': function(_0x1af34d, _0x54a7f1) {
                return _0x1af34d + _0x54a7f1;
            },
            'guzeY': function(_0x4a0825, _0x1c899c) {
                return _0x4a0825 !== _0x1c899c;
            },
            'rDyZv': wanzikun_0x3c04('0x50'),
            'arPCS': function(_0x42e053, _0x109269) {
                return _0x42e053 == _0x109269;
            },
            'gjoXE': function(_0x21c337, _0x5c246b) {
                return _0x21c337 + _0x5c246b;
            },
            'zCLPt': wanzikun_0x3c04('0x51')
        };
        var _0x11aaee = this;
        wx[wanzikun_0x3c04('0x52')]({
            'key': wanzikun_0x3c04('0x3d'),
            'success': function(_0x494176) {
                var _0x58cd6a = {
                    'Qyesp': function(_0x51794d, _0x1b5d93) {
                        return _0x5616dc['TZvxX'](_0x51794d, _0x1b5d93);
                    },
                    'HRbRR': wanzikun_0x3c04('0x53'),
                    'eASEu': wanzikun_0x3c04('0x54')
                };
                if (_0x494176[wanzikun_0x3c04('0x2')]) {
                    if (_0x5616dc[wanzikun_0x3c04('0x55')] === _0x5616dc[wanzikun_0x3c04('0x55')]) {
                        _0x11aaee[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x3d')] = _0x494176[wanzikun_0x3c04('0x2')];
                        if (_0x494176[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x3f')] > 0x0) {
                            wx[wanzikun_0x3c04('0x32')]({
                                'index': 0x2,
                                'text': _0x5616dc[wanzikun_0x3c04('0x56')](_0x5616dc[wanzikun_0x3c04('0x57')]('', _0x494176[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x3f')]), '')
                            });
                        } else {
                            if (_0x5616dc[wanzikun_0x3c04('0x58')](_0x5616dc[wanzikun_0x3c04('0x59')], _0x5616dc[wanzikun_0x3c04('0x59')])) {
                                wx[wanzikun_0x3c04('0x35')]({
                                    'index': 0x2
                                });
                            } else {
                                wx[wanzikun_0x3c04('0x35')]({
                                    'index': 0x2
                                });
                            }
                        }
                    } else {
                        if (_0x58cd6a[wanzikun_0x3c04('0x5a')](_0x494176[wanzikun_0x3c04('0x1d')][wanzikun_0x3c04('0x1e')](_0x58cd6a[wanzikun_0x3c04('0x5b')]), -0x1)) {
                            _0x11aaee[wanzikun_0x3c04('0x0')]({
                                'iphone': _0x58cd6a['eASEu'],
                                'iponesc': wanzikun_0x3c04('0x16')
                            });
                        }
                    }
                } else {
                    wx[wanzikun_0x3c04('0x35')]({
                        'index': 0x2
                    });
                }
            }
        });
        wx[wanzikun_0x3c04('0x21')]({
            'url': _0x5616dc[wanzikun_0x3c04('0x5c')](wanzikun_0x3fa451[wanzikun_0x3c04('0xd')][wanzikun_0x3c04('0xe')], _0x5616dc['zCLPt']),
            'data': {
                'token': wanzikun_0x3fa451[wanzikun_0x3c04('0xd')]['token']
            },
            'success': function(_0x2d80d5) {
                if (_0x5616dc[wanzikun_0x3c04('0x5d')](_0x2d80d5[wanzikun_0x3c04('0x2')]['code'], 0x0)) {
                    if (_0x2d80d5[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')]['count_id_no_pay'] > 0x0) {
                        wx[wanzikun_0x3c04('0x32')]({
                            'index': 0x3,
                            'text': _0x5616dc[wanzikun_0x3c04('0x57')]('', _0x2d80d5[wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x2')][wanzikun_0x3c04('0x31')]) + ''
                        });
                    } else {
                        wx[wanzikun_0x3c04('0x35')]({
                            'index': 0x3
                        });
                    }
                }
            }
        });
    }
});
