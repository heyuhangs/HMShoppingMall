var wanzikun_0x528d = ['hMZGD', '/pages/goods-details/index?id=', 'navigateTo', 'VhphW', 'HiLfn', 'currentTarget', 'dataset', '3|2|4|1|0|5', 'iphone', 'bZpzG', 'split', 'showLoading', 'oQmbY', 'fRWnX', 'request', 'rzlRf', 'globalData', 'urls', '/shop/goods/list', 'VzELy', 'data', 'length', 'push', 'yftAW', 'code', 'setData'];
(function(_0x47304f, _0x1bb218) {
    var _0x253ddb = function(_0x48145f) {
        while (--_0x48145f) {
            _0x47304f['push'](_0x47304f['shift']());
        }
    };
    _0x253ddb(++_0x1bb218);
}(wanzikun_0x528d, 0x1bb));
var wanzikun_0x87a2 = function(_0x15fd43, _0x5aeb17) {
    _0x15fd43 = _0x15fd43 - 0x0;
    var _0x4c5077 = wanzikun_0x528d[_0x15fd43];
    return _0x4c5077;
};
var app = getApp();
Page({
    data: {
        goods:[{"barCode":"","categoryId":10451,"characteristic":"100%全棉，椰林自然设计","commission":10.00,"commissionType":1,"dateAdd":"2018-04-04 00:00:00","dateStart":"2018-04-04 00:00:00","dateUpdate":"2019-05-21 02:52:10","gotScore":0,"gotScoreType":0,"id":36888,"kanjia":false,"kanjiaPrice":0.00,"logisticsId":2065,"minPrice":299.00,"minScore":0,"name":"唤自然 仲夏椰香四件套","numberFav":120,"numberGoodReputation":8,"numberOrders":138,"numberSells":7,"originalPrice":399.00,"paixu":1,"pic":"https://cdn.it120.cc/apifactory/2018/04/02/0eaf91e4696b51e326313efaec5e9b11.jpg","pingtuan":false,"pingtuanPrice":99.00,"recommendStatus":1,"recommendStatusStr":"推荐","shopId":755,"status":0,"statusStr":"上架","stores":31,"userId":797,"videoId":"","views":16020,"weight":0.00},{"barCode":"","categoryId":10451,"characteristic":"狗年定制款，高支高密棉","commission":10.00,"commissionType":1,"dateAdd":"2018-04-04 13:23:46","dateStart":"2018-04-04 13:19:38","dateUpdate":"2019-05-18 10:41:55","gotScore":0,"gotScoreType":0,"id":36889,"kanjia":false,"kanjiaPrice":0.00,"logisticsId":2065,"minPrice":359.00,"minScore":0,"name":"趣味萌宠定制款四件套","numberFav":29,"numberGoodReputation":0,"numberOrders":159,"numberSells":0,"originalPrice":499.00,"paixu":2,"pic":"https://cdn.it120.cc/apifactory/2018/04/02/a6f0202a6dbcf9d99a98176148a26c6c.jpg","pingtuan":false,"pingtuanPrice":0.01,"recommendStatus":0,"recommendStatusStr":"普通","shopId":755,"status":0,"statusStr":"上架","stores":76,"userId":797,"videoId":"","views":6706,"weight":0.00},{"barCode":"","categoryId":10451,"characteristic":"双层呼吸纱，纯棉超柔亲肤","commission":9.90,"commissionType":2,"dateAdd":"2018-04-04 13:29:10","dateStart":"2018-04-04 13:28:10","dateUpdate":"2019-05-18 10:41:55","gotScore":0,"gotScoreType":0,"id":36890,"kanjia":false,"kanjiaPrice":0.00,"logisticsId":1273,"minPrice":0.01,"minScore":0,"name":"透气呼吸纱四件套【测试商品，不发货】","numberFav":15,"numberGoodReputation":2,"numberOrders":159,"numberSells":33,"originalPrice":680.00,"paixu":3,"pic":"https://cdn.it120.cc/apifactory/2018/04/02/281fd28838d0ca70c173c468ac8d5803.jpg","pingtuan":false,"pingtuanPrice":0.00,"propertyIds":",4548,","recommendStatus":0,"recommendStatusStr":"普通","shopId":755,"status":0,"statusStr":"上架","stores":95,"userId":797,"videoId":"","views":5321,"weight":0.00},{"barCode":"","categoryId":10451,"characteristic":"天然竹醌成分，抑菌爽滑健康睡眠","commission":10.00,"commissionType":1,"dateAdd":"2018-04-04 13:34:00","dateStart":"2018-04-04 13:31:24","dateUpdate":"2019-05-18 10:41:55","gotScore":0,"gotScoreType":0,"id":36891,"kanjia":false,"kanjiaPrice":0.00,"logisticsId":1273,"minPrice":429.00,"minScore":0,"name":"竹语初棉撞色四件套【测试拼团，不发货】","numberFav":49,"numberGoodReputation":1,"numberOrders":185,"numberSells":6,"originalPrice":459.00,"paixu":4,"pic":"https://cdn.it120.cc/apifactory/2018/04/02/b665d22fb894e44bebf83129d90244ed.jpg","pingtuan":true,"pingtuanPrice":0.10,"propertyIds":",4548,","recommendStatus":0,"recommendStatusStr":"普通","shopId":755,"status":0,"statusStr":"上架","stores":77,"userId":797,"videoId":"","views":9994,"weight":0.00}],
        loadingMoreHidden: false
    },
    toDetailsTap: function(_0x51c829) {
        var _0x3d94f9 = {
            'VhphW': function(_0x184aa3, _0x41e0ab) {
                return _0x184aa3 + _0x41e0ab;
            },
            'HiLfn': wanzikun_0x87a2('0x0')
        };
        wx[wanzikun_0x87a2('0x1')]({
            'url': _0x3d94f9[wanzikun_0x87a2('0x2')](_0x3d94f9[wanzikun_0x87a2('0x3')], _0x51c829[wanzikun_0x87a2('0x4')][wanzikun_0x87a2('0x5')]['id'])
        });
    },
    onLoad:function (options) {
        const self = this;
        wx.showLoading({});
        this.setData({
            url: app.globalData.imgUrl
        })
        wx.request({
            url: app.globalData.url+`/goodImpl/goodListByType?USER_ID=${app.globalData.userInfo.USER_ID}&TYPE_ONE_ID=${options.oId}&TYPE_TWO_ID=${options.id}&keywords=`,
            method: "GET",
            success: function(res) {
                if(res.statusCode == 200){
                    if(res.data.goodList.length > 0){
                        self.setData({
                            goods: res.data.goodList,
                            loadingMoreHidden: true
                        });
                    }else{
                        self.setData({
                            goods: res.data.goodList,
                        });
                    }

                    wx.hideLoading();
                }
            }
        })
        // wx[wanzikun_0x87a2('0xa')]();
    },
    // 'onLoad': function(_0x274e5b) {
    //     var _0x39318d = {
    //         'bZpzG': '1|0|4|3|2',
    //         'nZdCG': wanzikun_0x87a2('0x6'),
    //         'oQmbY': function(_0x153b69, _0x131f4f) {
    //             return _0x153b69 != _0x131f4f;
    //         },
    //         'fRWnX': function(_0x554387, _0x2e087f) {
    //             return _0x554387 == _0x2e087f;
    //         },
    //         'rzlRf': function(_0x55eb32, _0x233bbd) {
    //             return _0x55eb32 + _0x233bbd;
    //         },
    //         'xWsYW': function(_0x1c24aa, _0x31f36a) {
    //             return _0x1c24aa == _0x31f36a;
    //         },
    //         'hMZGD': wanzikun_0x87a2('0x7')
    //     };
    //     var _0x530b13 = _0x39318d[wanzikun_0x87a2('0x8')][wanzikun_0x87a2('0x9')]('|'),
    //         _0x1ea0b9 = 0x0;
    //     while (!![]) {
    //
    //         switch (_0x530b13[_0x1ea0b9++]) {
    //             case '0':
    //                 wx[wanzikun_0x87a2('0xa')]();
    //                 continue;
    //             case '1':
    //                 var _0x4acaac = {
    //                     'VzELy': _0x39318d['nZdCG'],
    //                     'yftAW': function(_0x2b3821, _0x10979e) {
    //                         return _0x39318d[wanzikun_0x87a2('0xb')](_0x2b3821, _0x10979e);
    //                     },
    //                     'Nrzap': function(_0x2bb8cd, _0x306c3b) {
    //                         return _0x39318d[wanzikun_0x87a2('0xc')](_0x2bb8cd, _0x306c3b);
    //                     }
    //                 };
    //                 continue;
    //             case '2':
    //                 wx[wanzikun_0x87a2('0xd')]({
    //                     'url': _0x39318d[wanzikun_0x87a2('0xe')](wanzikun_0x4fc8fb[wanzikun_0x87a2('0xf')][wanzikun_0x87a2('0x10')], wanzikun_0x87a2('0x11')),
    //                     'data': {
    //                         'categoryId': _0x274e5b['id'],
    //                         'pageSize': 0x64
    //                     },
    //                     'success': function(_0x319c86) {
    //                         var _0xc38aa1 = _0x4acaac[wanzikun_0x87a2('0x12')][wanzikun_0x87a2('0x9')]('|'),
    //                             _0x2f1635 = 0x0;
    //                         while (!![]) {
    //                             switch (_0xc38aa1[_0x2f1635++]) {
    //                                 case '0':
    //                                     for (var _0x4db3f6 = 0x0; _0x4db3f6 < _0x319c86[wanzikun_0x87a2('0x13')][wanzikun_0x87a2('0x13')][wanzikun_0x87a2('0x14')]; _0x4db3f6++) {
    //                                         _0x53637c[wanzikun_0x87a2('0x15')](_0x319c86['data'][wanzikun_0x87a2('0x13')][_0x4db3f6]);
    //                                     }
    //                                     continue;
    //                                 case '1':
    //                                     if (_0x4acaac[wanzikun_0x87a2('0x16')](_0x319c86[wanzikun_0x87a2('0x13')][wanzikun_0x87a2('0x17')], 0x0) || _0x4acaac['Nrzap'](_0x319c86[wanzikun_0x87a2('0x13')][wanzikun_0x87a2('0x13')][wanzikun_0x87a2('0x14')], 0x0)) {
    //                                         _0x535799['setData']({
    //                                             'loadingMoreHidden': ![]
    //                                         });
    //                                         return;
    //                                     }
    //                                     continue;
    //                                 case '2':
    //                                     _0x535799[wanzikun_0x87a2('0x18')]({
    //                                         'goods': [],
    //                                         'loadingMoreHidden': !![]
    //                                     });
    //                                     continue;
    //                                 case '3':
    //                                     wx['hideLoading']();
    //                                     continue;
    //                                 case '4':
    //                                     var _0x53637c = [];
    //                                     continue;
    //                                 case '5':
    //                                     _0x535799[wanzikun_0x87a2('0x18')]({
    //                                         'goods': _0x53637c
    //                                     });
    //                                     continue;
    //                             }
    //                             break;
    //                         }
    //                     }
    //                 });
    //                 continue;
    //             case '3':
    //                 if (_0x39318d['xWsYW'](wanzikun_0x4fc8fb[wanzikun_0x87a2('0xf')][wanzikun_0x87a2('0x7')], !![])) {
    //                     _0x535799[wanzikun_0x87a2('0x18')]({
    //                         'iphone': _0x39318d[wanzikun_0x87a2('0x19')]
    //                     });
    //                 }
    //                 continue;
    //             case '4':
    //                 var _0x535799 = this;
    //                 continue;
    //         }
    //         break;
    //     }
    // }
});
