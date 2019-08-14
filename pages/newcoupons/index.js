var wanzikun_0x30bd = ['您的积分不足', 'GSgqV', 'lfLJN', 'shop', 'XumfT', 'RMORZ', 'Rzhgj', 'ZmotI', 'LggBc', 'btTSR', '礼券已经过期', '礼券领取成功', 'HSwpv', 'KSijI', 'yPksZ', 'xCDlf', 'seKmV', 'eYuJI', 'nRvgj', '您已经领过了', 'value', 'NkJrP', 'OikjV', 'aFROc', 'VAPdm', 'JyIGC', 'msg', 'data', 'detail', 'currentTarget', 'dataset', '兑换失败', '兑换数量已达最大上限', '礼券已经领完了', 'LRKBN', 'success', 'RKZgc', 'hTcGi', '礼券已经兑换完了', '输入的口令有误，请重新输入', '/discounts/fetch', 'cSXvG', 'globalData', 'urls', 'Xeanw', 'busid', 'coupons', 'token', 'OGDuF', 'oaZbV', 'IyKMv', 'Qhuzc', 'cSRGi', 'hCRHz', 'code', 'showToast', '礼券兑换成功', 'xWKZy', 'bpSVM', 'showModal', 'omDew', 'WLbVR', 'GURog', 'dTDKX', 'TFBAD', 'mallName', 'rhLNR', 'iphone', 'setData', 'getCoupons', 'request', '/banner/list', 'zbhgM', 'jVGKt', 'oUlKN', 'system', 'key', 'qLgpu', 'QBdPP', 'businessId'];
(function (_0x533140, _0x38f7c1) {
    var _0x1e647e = function (_0x4231f9) {
        while (--_0x4231f9) {
            _0x533140['push'](_0x533140['shift']());
        }
    };
    _0x1e647e(++_0x38f7c1);
}(wanzikun_0x30bd, 0x1ab));
var wanzikun_0x4a33 = function (_0x330af9, _0x27f57d) {
    _0x330af9 = _0x330af9 - 0x0;
    var _0x15d11c = wanzikun_0x30bd[_0x330af9];
    return _0x15d11c;
};
const app = getApp();
Page({
    data: {
        coupons: [],
        visible3: false,
        user: null,
        actions3: [
            {
                name: '在线支付',
                color: '#19be6b',
            },
            {
                name: '奖金币支付',
                color: '#2d8cf0'
            },
            {
                name: '取消'
            }
        ],
        "busid": 2375,
        "__webviewId__": 58,
        // "banners": [
        //     {
        //         "businessId": 2375,
        //         "dateAdd": "2018-03-09 08:15:15",
        //         "dateUpdate": "2018-11-27 22:22:48",
        //         "id": 5480,
        //         "linkUrl": "",
        //         "paixu": 15,
        //         "picUrl": "https://cdn.it120.cc/apifactory/2018/03/07/7b46e8454f97c96ae38cd5296c983143.png",
        //         "remark": "",
        //         "status": 0,
        //         "statusStr": "显示",
        //         "title": "兑换礼券",
        //         "type": "duihuan",
        //         "userId": 797
        //     }
        // ],
        "hasNoCoupons": false,
        isGJ: true
    },
    topPay: function (e) {
        wx.navigateTo({
            url: '/pages/to-pay-order/index?payVip=' + e.target.dataset.id
        })
    },
    'listenerCouponsInput': function (_0x26cef0) {
        this[wanzikun_0x4a33('0x0')]['coupons'] = _0x26cef0[wanzikun_0x4a33('0x1')]['value'];
        this[wanzikun_0x4a33('0x0')]['id'] = _0x26cef0[wanzikun_0x4a33('0x2')][wanzikun_0x4a33('0x3')]['id'];
    },
    'listenerDuiHuan': function () {
        var _0x24b3d1 = {
            'Qhuzc': wanzikun_0x4a33('0x4'),
            'cSRGi': wanzikun_0x4a33('0x5'),
            'OGDuF': wanzikun_0x4a33('0x6'),
            'IyKMv': wanzikun_0x4a33('0x7'),
            'hCRHz': function (_0x4b68f1, _0x49e7e1) {
                return _0x4b68f1 == _0x49e7e1;
            },
            'owjNM': wanzikun_0x4a33('0x8'),
            'xWKZy': function (_0x1e5816, _0x46ee17) {
                return _0x1e5816 === _0x46ee17;
            },
            'bpSVM': wanzikun_0x4a33('0x9'),
            'WDBGT': wanzikun_0x4a33('0xa'),
            'WLbVR': wanzikun_0x4a33('0xb'),
            'GURog': function (_0x50b548, _0x11bb61) {
                return _0x50b548 == _0x11bb61;
            },
            'dTDKX': function (_0x114712, _0x58c62e) {
                return _0x114712 == _0x58c62e;
            },
            'TFBAD': wanzikun_0x4a33('0xc'),
            'cSXvG': function (_0x52b77a, _0x562a7f) {
                return _0x52b77a + _0x562a7f;
            },
            'Xeanw': wanzikun_0x4a33('0xd')
        };
        wx['request']({
            'url': _0x24b3d1[wanzikun_0x4a33('0xe')](wanzikun_0x10c5a7[wanzikun_0x4a33('0xf')][wanzikun_0x4a33('0x10')], _0x24b3d1[wanzikun_0x4a33('0x11')]),
            'data': {
                'id': this[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x12')],
                'pwd': this[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x13')],
                'token': wanzikun_0x10c5a7[wanzikun_0x4a33('0xf')][wanzikun_0x4a33('0x14')]
            },
            'success': function (_0x44967d) {
                var _0x1a39aa = {
                    'omDew': _0x24b3d1[wanzikun_0x4a33('0x15')]
                };
                if (wanzikun_0x4a33('0x16') === _0x24b3d1[wanzikun_0x4a33('0x17')]) {
                    wx['showModal']({
                        'title': _0x24b3d1[wanzikun_0x4a33('0x18')],
                        'content': _0x24b3d1[wanzikun_0x4a33('0x19')],
                        'showCancel': ![]
                    });
                    return;
                } else {
                    if (_0x24b3d1[wanzikun_0x4a33('0x1a')](_0x44967d[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x1b')], 0x0)) {
                        wx[wanzikun_0x4a33('0x1c')]({
                            'title': wanzikun_0x4a33('0x1d'),
                            'icon': _0x24b3d1['owjNM'],
                            'duration': 0x7d0
                        });
                    }
                    if (_0x44967d[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x1b')] == 0x4e21 || _0x24b3d1[wanzikun_0x4a33('0x1a')](_0x44967d[wanzikun_0x4a33('0x0')]['code'], 0x4e22)) {
                        if (_0x24b3d1[wanzikun_0x4a33('0x1e')](_0x24b3d1[wanzikun_0x4a33('0x1f')], _0x24b3d1['WDBGT'])) {
                            wx[wanzikun_0x4a33('0x20')]({
                                'title': '错误',
                                'content': _0x1a39aa[wanzikun_0x4a33('0x21')],
                                'showCancel': ![]
                            });
                            return;
                        } else {
                            wx[wanzikun_0x4a33('0x20')]({
                                'title': _0x24b3d1[wanzikun_0x4a33('0x18')],
                                'content': _0x24b3d1[wanzikun_0x4a33('0x22')],
                                'showCancel': ![]
                            });
                            return;
                        }
                    }
                    if (_0x24b3d1[wanzikun_0x4a33('0x23')](_0x44967d[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x1b')], 0x4e23)) {
                        wx[wanzikun_0x4a33('0x20')]({
                            'title': _0x24b3d1[wanzikun_0x4a33('0x18')],
                            'content': wanzikun_0x4a33('0x5'),
                            'showCancel': ![]
                        });
                        return;
                    }
                    if (_0x24b3d1[wanzikun_0x4a33('0x24')](_0x44967d[wanzikun_0x4a33('0x0')]['code'], 0x4e20)) {
                        wx['showModal']({
                            'title': _0x24b3d1[wanzikun_0x4a33('0x18')],
                            'content': _0x24b3d1[wanzikun_0x4a33('0x25')],
                            'showCancel': ![]
                        });
                        return;
                    }
                }
            }
        });
    },
    'onLoad': function () {
        this.setData({
            user: app.globalData.userInfo,
            coupons: []
        })
        const aVip = {
            "dateAdd": "2018-03-12 20:54:24",
            "dateEndDays": 10,
            "dateEndType": 1,
            "dateStartType": 1,
            "dateUpdate": "2018-08-13 18:49:03",
            "id": 1409,
            "moneyHreshold": '199元成为光明天使',
            "moneyMax": 199,
            "moneyMin": 5,
            "name": "光明天使",
            "needScore": 0,
            "needSignedContinuous": 0,
            "numberGit": 1100,
            "numberGitNumber": 673,
            "numberLeft": 0,
            "numberPersonMax": 3,
            "numberTotle": 327,
            "numberUsed": 23,
            "refId": 30164,
            "status": 10000,
            "statusStr": "正常",
            "type": "shop"
        }
        const bVip = {
            "dateAdd": "2018-03-12 20:53:22",
            "dateEndDays": 10,
            "dateEndType": 1,
            "dateStartType": 1,
            "dateUpdate": "2019-07-23 15:49:44",
            "id": 1408,
            "moneyHreshold": '999元成为爱心天使',
            "moneyMax": 999,
            "moneyMin": 10,
            "name": "爱心天使",
            "needScore": 20,
            "needSignedContinuous": 0,
            "numberGit": 950,
            "numberGitNumber": 949,
            "numberLeft": 118,
            "numberPersonMax": 2,
            "numberTotle": 1000,
            "numberUsed": 51,
            "status": 9999,
            "statusStr": "正常",
            "type": "shop"
        }
        const all = [];
        if (this.data.user.VIP_TYPE == 1) {
            all.push(aVip);
            all.push(bVip);
            this.setData({
                coupons: all
            })
        } else if (this.data.user.VIP_TYPE == 2) {
            all.push(bVip);
            this.setData({
                coupons: all
            })
        } else {
            this.setData({
                isGJ: false
            })
        }
        // var _0x21aa3c = {
        //     'QBdPP': wanzikun_0x4a33('0x1d'),
        //     'jVGKt': function (_0x4d0ea4, _0x142cc1) {
        //         return _0x4d0ea4 === _0x142cc1;
        //     },
        //     'oUlKN': function (_0xa33a9b, _0x19badc) {
        //         return _0xa33a9b == _0x19badc;
        //     },
        //     'CCXmD': function (_0x206635, _0x283bd0) {
        //         return _0x206635 !== _0x283bd0;
        //     },
        //     'qLgpu': 'GMMuV',
        //     'rhLNR': function (_0x5c29d1, _0x33f6f1) {
        //         return _0x5c29d1 == _0x33f6f1;
        //     },
        //     'VoORH': 'iphone',
        //     'SwPlZ': function (_0x468cc0, _0xbb5772) {
        //         return _0x468cc0 + _0xbb5772;
        //     },
        //     'EetmS': wanzikun_0x4a33('0x26'),
        //     'zbhgM': 'duihuan'
        // };
        // var _0xf363d9 = this;
        // if (_0x21aa3c[wanzikun_0x4a33('0x27')](wanzikun_0x10c5a7[wanzikun_0x4a33('0xf')][wanzikun_0x4a33('0x28')], !![])) {
        //     _0xf363d9[wanzikun_0x4a33('0x29')]({
        //         'iphone': _0x21aa3c['VoORH']
        //     });
        // }
        // _0xf363d9[wanzikun_0x4a33('0x2a')]();
        // wx[wanzikun_0x4a33('0x2b')]({
        //     'url': _0x21aa3c['SwPlZ'](wanzikun_0x10c5a7['globalData'][wanzikun_0x4a33('0x10')], wanzikun_0x4a33('0x2c')),
        //     'data': {
        //         'key': _0x21aa3c['EetmS'],
        //         'type': _0x21aa3c[wanzikun_0x4a33('0x2d')]
        //     },
        //     'success': function (_0x529eb6) {
        //         if (_0x21aa3c[wanzikun_0x4a33('0x2e')]('YGcNu', 'YGcNu')) {
        //             if (_0x21aa3c[wanzikun_0x4a33('0x2f')](_0x529eb6['data']['code'], 0x0) && wanzikun_0x10c5a7[wanzikun_0x4a33('0xf')][wanzikun_0x4a33('0x30')] != wanzikun_0x4a33('0x31')) {
        //                 if (_0x21aa3c['CCXmD'](_0x21aa3c['qLgpu'], _0x21aa3c[wanzikun_0x4a33('0x32')])) {
        //                     wx[wanzikun_0x4a33('0x1c')]({
        //                         'title': _0x21aa3c[wanzikun_0x4a33('0x33')],
        //                         'icon': wanzikun_0x4a33('0x8'),
        //                         'duration': 0x7d0
        //                     });
        //                 } else {
        //                     _0xf363d9[wanzikun_0x4a33('0x29')]({
        //                         'banners': _0x529eb6[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x0')],
        //                         'busid': _0x529eb6['data'][wanzikun_0x4a33('0x0')][0x0][wanzikun_0x4a33('0x34')]
        //                     });
        //                 }
        //             }
        //         } else {
        //             wx[wanzikun_0x4a33('0x20')]({
        //                 'title': '错误',
        //                 'content': wanzikun_0x4a33('0x35'),
        //                 'showCancel': ![]
        //             });
        //             return;
        //         }
        //     }
        // });
    },
    'getCoupons': function () {
        var _0x4572e0 = {
            'Rzhgj': '兑换失败',
            'ZmotI': '礼券已经兑换完了',
            'DsMdI': function (_0x1788c2, _0x575ef4) {
                return _0x1788c2 == _0x575ef4;
            },
            'XumfT': function (_0x2dc6aa, _0x243561) {
                return _0x2dc6aa !== _0x243561;
            },
            'RMORZ': wanzikun_0x4a33('0x36'),
            'KhPli': function (_0x360db4, _0x3af66d) {
                return _0x360db4 + _0x3af66d;
            },
            'lfLJN': '/discounts/coupons'
        };
        var _0x3aba1d = this;
        wx['request']({
            'url': _0x4572e0['KhPli'](wanzikun_0x10c5a7[wanzikun_0x4a33('0xf')][wanzikun_0x4a33('0x10')], _0x4572e0[wanzikun_0x4a33('0x37')]),
            'data': {
                'type': wanzikun_0x4a33('0x38')
            },
            'success': function (_0x453c05) {
                if (_0x4572e0['DsMdI'](_0x453c05[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x1b')], 0x0)) {
                    if (_0x4572e0[wanzikun_0x4a33('0x39')](_0x4572e0[wanzikun_0x4a33('0x3a')], _0x4572e0[wanzikun_0x4a33('0x3a')])) {
                        wx[wanzikun_0x4a33('0x20')]({
                            'title': _0x4572e0[wanzikun_0x4a33('0x3b')],
                            'content': _0x4572e0[wanzikun_0x4a33('0x3c')],
                            'showCancel': ![]
                        });
                        return;
                    } else {
                        _0x3aba1d[wanzikun_0x4a33('0x29')]({
                            'hasNoCoupons': ![],
                            'coupons': _0x453c05[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x0')]
                        });
                    }
                }
            }
        });
    },
    // handleClick3: function (e) {
    //     this.setData({
    //         status: ++e.detail.index,
    //         visible3: false
    //     })
    //     this.getCoupon();
    // },
    // getCoupon: function () {
    //     //状态
    //     console.log(this.data.vipObj);
    //     const self = this;
    //     wx.request({
    //         url: app.globalData.url + `/userImpl/purchaseVIP?USER_ID=2&VIP_TYPE=${self.data.vipObj}`,
    //         method: "GET",
    //         success: function (res) {
    //             if (res.statusCode == 200) {
    //                 app.relUserInfo();
    //                 wx.showToast({
    //                     title: '购买成功!',
    //                     icon: 'success',
    //                     duration: 2000
    //                 });
    //                 setTimeout(() => {
    //                     wx.reLaunch({
    //                         url: '/pages/my/index'
    //                     })
    //                 }, 1000)
    //             }
    //         }
    //     })
    // }
    // 'gitCoupon': function (_0x43e571) {
    //     var _0x1faf22 = {
    //         'yPksZ': function (_0x526924, _0x41d700) {
    //             return _0x526924 == _0x41d700;
    //         },
    //         'xCDlf': function (_0x2233a8, _0x1762f7) {
    //             return _0x2233a8 == _0x1762f7;
    //         },
    //         'seKmV': function (_0x146e20, _0x9bffd) {
    //             return _0x146e20 !== _0x9bffd;
    //         },
    //         'eYuJI': wanzikun_0x4a33('0x3d'),
    //         'nRvgj': wanzikun_0x4a33('0x3e'),
    //         'NkJrP': function (_0x165db3, _0x5c4cad) {
    //             return _0x165db3 == _0x5c4cad;
    //         },
    //         'OikjV': '您的积分不足',
    //         'aFROc': function (_0x118d65, _0x55472c) {
    //             return _0x118d65 == _0x55472c;
    //         },
    //         'VAPdm': wanzikun_0x4a33('0x3f'),
    //         'JyIGC': wanzikun_0x4a33('0x40'),
    //         'HSwpv': function (_0xffe35a, _0x12f1d6) {
    //             return _0xffe35a + _0x12f1d6;
    //         },
    //         'KSijI': wanzikun_0x4a33('0xd')
    //     };
    //     var _0x5dea3a = this;
    //     wx[wanzikun_0x4a33('0x2b')]({
    //         'url': _0x1faf22[wanzikun_0x4a33('0x41')](wanzikun_0x10c5a7['globalData']['urls'], _0x1faf22[wanzikun_0x4a33('0x42')]),
    //         'data': {
    //             'id': _0x43e571[wanzikun_0x4a33('0x2')][wanzikun_0x4a33('0x3')]['id'],
    //             'token': wanzikun_0x10c5a7['globalData'][wanzikun_0x4a33('0x14')]
    //         },
    //         'success': function (_0x378a06) {
    //             if (_0x1faf22[wanzikun_0x4a33('0x43')](_0x378a06[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x1b')], 0x4e21) || _0x1faf22[wanzikun_0x4a33('0x44')](_0x378a06['data'][wanzikun_0x4a33('0x1b')], 0x4e22)) {
    //                 wx[wanzikun_0x4a33('0x20')]({
    //                     'title': '错误',
    //                     'content': wanzikun_0x4a33('0x6'),
    //                     'showCancel': ![]
    //                 });
    //                 return;
    //             }
    //             if (_0x1faf22[wanzikun_0x4a33('0x44')](_0x378a06[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x1b')], 0x4e23)) {
    //                 if (_0x1faf22[wanzikun_0x4a33('0x45')](_0x1faf22[wanzikun_0x4a33('0x46')], _0x1faf22[wanzikun_0x4a33('0x47')])) {
    //                     wx['showModal']({
    //                         'title': '错误',
    //                         'content': wanzikun_0x4a33('0x48'),
    //                         'showCancel': ![]
    //                     });
    //                     return;
    //                 } else {
    //                     this['data'][wanzikun_0x4a33('0x13')] = _0x43e571[wanzikun_0x4a33('0x1')][wanzikun_0x4a33('0x49')];
    //                     this[wanzikun_0x4a33('0x0')]['id'] = _0x43e571[wanzikun_0x4a33('0x2')][wanzikun_0x4a33('0x3')]['id'];
    //                 }
    //             }
    //             if (_0x1faf22[wanzikun_0x4a33('0x4a')](_0x378a06[wanzikun_0x4a33('0x0')]['code'], 0x7531)) {
    //                 wx[wanzikun_0x4a33('0x20')]({
    //                     'title': '错误',
    //                     'content': _0x1faf22[wanzikun_0x4a33('0x4b')],
    //                     'showCancel': ![]
    //                 });
    //                 return;
    //             }
    //             if (_0x1faf22[wanzikun_0x4a33('0x4c')](_0x378a06['data'][wanzikun_0x4a33('0x1b')], 0x4e24)) {
    //                 wx[wanzikun_0x4a33('0x20')]({
    //                     'title': '错误',
    //                     'content': _0x1faf22[wanzikun_0x4a33('0x4d')],
    //                     'showCancel': ![]
    //                 });
    //                 return;
    //             }
    //             if (_0x1faf22[wanzikun_0x4a33('0x4c')](_0x378a06[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x1b')], 0x0)) {
    //                 wx[wanzikun_0x4a33('0x1c')]({
    //                     'title': _0x1faf22[wanzikun_0x4a33('0x4e')],
    //                     'icon': wanzikun_0x4a33('0x8'),
    //                     'duration': 0x7d0
    //                 });
    //             } else {
    //                 wx['showModal']({
    //                     'title': '错误',
    //                     'content': _0x378a06[wanzikun_0x4a33('0x0')][wanzikun_0x4a33('0x4f')],
    //                     'showCancel': ![]
    //                 });
    //             }
    //         }
    //     });
    // }
});
