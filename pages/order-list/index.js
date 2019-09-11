var wanzikun_0x533d = ['JODfc', 'Iyqya', '3|1|4|2|6|0|5', 'ieKCZ', 'BjBwB', 'bpuad', 'kvNvz', 'JXjaS', 'ABJyx', 'FgEtP', 'mzjqx', 'confirm', 'VTOYI', '/order/close', 'hideLoading', 'gldjc', 'qECUt', 'xAPJk', 'DZowG', 'navigateTo', 'tTRCy', 'mIZhF', 'split', 'OJtOV', '/pages/my/index', 'iDzAE', 'red-dot', 'BBMXe', 'application/x-www-form-urlencoded', 'LPlqH', '无法获取用户资金信息', '/user/amount', 'KhXXx', 'PsatG', 'cktkQ', 'vlPuO', 'balance', 'PzFkQ', 'bOWFx', 'FeHih', 'DRkkZ', 'wxpay', 'tJQqI', '/order/pay', 'POST', 'okymY', 'fimQi', 'Toqqf', 'VYzGf', 'reLaunch', 'WGpoH', 'TPmxO', 'XoMPM', 'gAPgr', 'showModal', 'iphone', 'WYCdS', 'share', 'PBshm', 'MouWn', 'qLGDq', 'CYvdW', 'ZjGAc', 'rbtzV', 'tkHAT', 'HmAgQ', 'apmAW', '6|0|1|2|5|4|3', 'vziyT', 'YSYpr', 'kyqIY', 'GZDoF', 'Kndxn', '/order/statistics', 'dkebc', 'ZTWsC', 'VYxNj', 'hTjPe', 'oQWrz', 'pgqvQ', 'tabClass', 'count_id_no_pay', 'cIkuz', 'GQqTu', 'xrusn', 'ZIBfk', 'count_id_no_transfer', 'quZZi', 'ogZMi', 'ZyUes', 'statusTap', 'vShyn', 'count_id_no_reputation', 'FBZqr', 'evHsl', 'count_id_success', 'lZfRH', '/order/list', 'status', 'getOrderStatistics', 'llKrH', 'KRqUr', 'lGgAx', 'UrIaT', 'BjHyU', 'OkIjM', 'TNCFl', 'AsQHp', 'logisticsMap', 'goodsMap', 'ktvKV', '待付款', '待发货', '待收货', 'xqJsK', 'uuxMu', '出现Cannot read property "dataset" of undefined;这样的错误是正常的，不用管！', 'sSXea', 'IKTXz', 'yAYGr', 'WQvxl', 'showLoading', 'request', 'wUXZY', 'siteInfo', 'url', 'subDomain', 'QhtVX', 'globalData', 'token', 'ZRuts', 'data', 'code', 'log', 'dJelr', 'currentTarget', 'dataset', 'index', 'currentType', 'setData', 'onShow', '/pages/order-details/index?id=', '&share=1'];
(function(_0x27f6f7, _0x344cda) {
    var _0x1a3a62 = function(_0xd8769f) {
        while (--_0xd8769f) {
            _0x27f6f7['push'](_0x27f6f7['shift']());
        }
    };
    _0x1a3a62(++_0x344cda);
}(wanzikun_0x533d, 0x18d));
var wanzikun_0x28c0 = function(_0x23080f, _0x23a207) {
    _0x23080f = _0x23080f - 0x0;
    var _0x342ccd = wanzikun_0x533d[_0x23080f];
    return _0x342ccd;
};
var wanzikun_0x3eef3e = require('../../utils/pay.js');
var wanzikun_0x1930be = getApp();
const app = getApp();
Page({
    'data': {
        isCancel: false,
        status: false,
        'statusType': ['待付款', '已发货', '已完成', '已取消'],
        'currentType': 0,
        'tabClass': ['', '', '', '', ''],
        orderList: [],
        url: ''
    },
    'statusTap': function(e) {
        this.setData({
            currentType: e.currentTarget.dataset.index,
            currentInd: parseInt(e.currentTarget.dataset.index) + 1
        })
        this.getData();
    },
    onLoad: function(e) {
        this.setData({
            url: app.globalData.imgUrl
        })
        if (e.currentType) {
            let status = 0;
            switch (e.currentType) {
                case "1":
                    status = 1;
                    break;
                case "2":
                    status = 3;
                    break;
                case "3":
                    status = 2;
                    break;
            }
            this.setData({
                status: status,
                currentType: e.currentType,
                currentInd: status
            })
        } else {
            this.setData({
                currentType: e.currentType,
                currentInd: 0
            })
        }
        this.getData();
    },
    getData() {
        const self = this;
        wx.showLoading({});
        let url = '';
        if (this.data.currentInd == 0) {
            url = app.globalData.url + `/orderImpl/orderList?USER_ID=${app.globalData.userInfo.USER_ID}&PAY_STATUS=1&ORDER_STATUS=`
        } else {
            url = app.globalData.url + `/orderImpl/orderList?USER_ID=${app.globalData.userInfo.USER_ID}&ORDER_STATUS=${this.data.currentInd}&PAY_STATUS=0`
        }
        wx.request({
            url: url,
            method: "GET",
            success: function(res) {
                if (res.data.result != 'error') {
                    self.setData({
                        orderList: res.data.orderList
                    })
                    wx.hideLoading();
                } else {
                    wx.showToast({
                        title: '系统繁忙',
                        icon: 'none',
                        duration: 2000
                    })
                }
            }
        })
    },
    orderPay: function(e) {
        wx.showLoading({});
        wx.request({
            url: app.globalData.url + `/orderImpl/orderPay?USER_ID=${app.globalData.userInfo.USER_ID}&ORDER_CODE=${e.currentTarget.dataset.id.ORDER_CODE}&PAY_TYPE=${e.currentTarget.dataset.id.PAY_STATUS}`,
            method: "POST",
            success: function(res) {
                if (res.data.result != 'error') {
                    wx.showToast({
                        title: '购买成功',
                        icon: 'success',
                        duration: 2000
                    });
                    setTimeout(function() {
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
                wx.hideLoading();
            }
        })
    },
    cancelOrderTap: function(e) {
        this.setData({
            isCancel: true,
            cancelId: e.currentTarget.dataset.id.USER_ID,
            cancelOId: e.currentTarget.dataset.id.ORDER_CODE
        })
    },
    handleCancel: function() {
        const self = this;
        wx.showLoading({});
        wx.request({
            url: app.globalData.url + `/orderImpl/editOrder?USER_ID=${this.data.cancelId}&ORDER_CODE=${this.data.cancelOId}&ORDER_STATUS=2`,
            method: "GET",
            success: function(res) {
                if (res.data.result != 'error') {
                    wx.showToast({
                        title: '订单取消成功!',
                        icon: 'none',
                        duration: 2000
                    });
                    self.setData({
                        isCancel: false
                    })
                    wx.hideLoading();
                    self.getData();
                } else {
                    wx.showToast({
                        title: '系统繁忙',
                        icon: 'none',
                        duration: 2000
                    })
                }
            }, complete(res) {
            }
        })
    },
    handleNoCancel: function() {
        this.setData({
            isCancel: false
        })
    },
    // 'orderDetail': function (_0x5cc8f6) {
    //     var _0x81a849 = {
    //         'mPOMm': function (_0x19812c, _0x4e5bea) {
    //             return _0x19812c + _0x4e5bea;
    //         },
    //         'JODfc': wanzikun_0x28c0('0x1e'),
    //         'Iyqya': wanzikun_0x28c0('0x1f')
    //     };
    //     var _0x2451b7 = _0x5cc8f6['currentTarget'][wanzikun_0x28c0('0x19')]['id'];
    //     wx['navigateTo']({
    //         'url': _0x81a849['mPOMm'](_0x81a849[wanzikun_0x28c0('0x20')], _0x2451b7) + _0x81a849[wanzikun_0x28c0('0x21')]
    //     });
    // },
    orderDetail: function(e) {
        wx.navigateTo({
            url: `/pages/order-details/index?id=${e.currentTarget.dataset.id}&currentType=${this.data.currentType}`
        })
    },
    // 'cancelOrderTap': function (_0x2253ac) {
    //     var _0x1f70d3 = {
    //         'mIZhF': wanzikun_0x28c0('0x22'),
    //         'kvNvz': function (_0x3c1e7b, _0x58ac34) {
    //             return _0x3c1e7b == _0x58ac34;
    //         },
    //         'OJtOV': wanzikun_0x28c0('0x5'),
    //         'JXjaS': function (_0x3b6dfa, _0xdb8350) {
    //             return _0x3b6dfa !== _0xdb8350;
    //         },
    //         'ABJyx': 'FBWeq',
    //         'FgEtP': '/pages/order-details/index?id=',
    //         'yxgXH': function (_0x5d5c82, _0x532e20) {
    //             return _0x5d5c82 === _0x532e20;
    //         },
    //         'mzjqx': wanzikun_0x28c0('0x23'),
    //         'vdbVt': wanzikun_0x28c0('0x24'),
    //         'VTOYI': function (_0x1a4d30, _0x4014b0) {
    //             return _0x1a4d30 + _0x4014b0;
    //         },
    //         'bpuad': '确定要取消该订单吗？'
    //     };
    //     var _0x4d333c = this;
    //     var _0x33a5cf = _0x2253ac[wanzikun_0x28c0('0x18')][wanzikun_0x28c0('0x19')]['id'];
    //     wx['showModal']({
    //         'title': _0x1f70d3[wanzikun_0x28c0('0x25')],
    //         'content': '',
    //         'success': function (_0x4e1fc7) {
    //             var _0x265184 = {
    //                 'gldjc': function (_0x2bf8aa, _0x404927) {
    //                     return _0x1f70d3[wanzikun_0x28c0('0x26')](_0x2bf8aa, _0x404927);
    //                 },
    //                 'qECUt': function (_0x3b4262, _0x5d5463) {
    //                     return _0x1f70d3[wanzikun_0x28c0('0x27')](_0x3b4262, _0x5d5463);
    //                 },
    //                 'xAPJk': 'hYWWU',
    //                 'DZowG': _0x1f70d3[wanzikun_0x28c0('0x28')],
    //                 'WxrNL': function (_0x29f9ae, _0x23887e) {
    //                     return _0x29f9ae + _0x23887e;
    //                 },
    //                 'tTRCy': _0x1f70d3[wanzikun_0x28c0('0x29')],
    //                 'eQhCU': '&share=1'
    //             };
    //             if (_0x1f70d3['yxgXH'](_0x1f70d3[wanzikun_0x28c0('0x2a')], _0x1f70d3[wanzikun_0x28c0('0x2a')])) {
    //                 if (_0x4e1fc7[wanzikun_0x28c0('0x2b')]) {
    //                     if ('BjBwB' === _0x1f70d3['vdbVt']) {
    //                         wx[wanzikun_0x28c0('0xa')]();
    //                         wx[wanzikun_0x28c0('0xb')]({
    //                             'url': _0x1f70d3[wanzikun_0x28c0('0x2c')](wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xe')] + wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xf')], wanzikun_0x28c0('0x2d')),
    //                             'data': {
    //                                 'token': wanzikun_0x1930be[wanzikun_0x28c0('0x11')][wanzikun_0x28c0('0x12')],
    //                                 'orderId': _0x33a5cf
    //                             },
    //                             'success': _0x4e1fc7 => {
    //                                 wx[wanzikun_0x28c0('0x2e')]();
    //                                 if (_0x265184[wanzikun_0x28c0('0x2f')](_0x4e1fc7[wanzikun_0x28c0('0x14')]['code'], 0x0)) {
    //                                     if (_0x265184[wanzikun_0x28c0('0x30')](_0x265184[wanzikun_0x28c0('0x31')], _0x265184[wanzikun_0x28c0('0x32')])) {
    //                                         _0x4d333c[wanzikun_0x28c0('0x1d')]();
    //                                     } else {
    //                                         _0x4d333c[wanzikun_0x28c0('0x1c')]({
    //                                             'currentType': currentType
    //                                         });
    //                                     }
    //                                 }
    //                             }
    //                         });
    //                     } else {
    //                         var _0x466224 = _0x2253ac[wanzikun_0x28c0('0x18')]['dataset']['id'];
    //                         wx[wanzikun_0x28c0('0x33')]({
    //                             'url': _0x265184['WxrNL'](_0x265184['WxrNL'](_0x265184[wanzikun_0x28c0('0x34')], _0x466224), _0x265184['eQhCU'])
    //                         });
    //                     }
    //                 }
    //             } else {
    //                 var _0x80e523 = _0x1f70d3[wanzikun_0x28c0('0x35')][wanzikun_0x28c0('0x36')]('|'),
    //                     _0x4d020d = 0x0;
    //                 while (!![]) {
    //                     switch (_0x80e523[_0x4d020d++]) {
    //                         case '0':
    //                             this[wanzikun_0x28c0('0x1c')]({
    //                                 'currentType': _0x1ff8ff
    //                             });
    //                             continue;
    //                         case '1':
    //                             var _0x44c403 = 0x0;
    //                             continue;
    //                         case '2':
    //                             if (_0x1f70d3[wanzikun_0x28c0('0x26')](_0x44c403, 0x0)) {
    //                                 var _0x1ff8ff = 0x0;
    //                             } else {
    //                                 console['log'](_0x1f70d3[wanzikun_0x28c0('0x37')]);
    //                                 var _0x1ff8ff = _0x2253ac[wanzikun_0x28c0('0x18')][wanzikun_0x28c0('0x19')][wanzikun_0x28c0('0x1a')];
    //                             }
    //                             continue;
    //                         case '3':
    //                             var _0x3c3556 = _0x2253ac;
    //                             continue;
    //                         case '4':
    //                             for (var _0x504081 in _0x3c3556) {
    //                                 _0x44c403++;
    //                             }
    //                             continue;
    //                         case '5':
    //                             this[wanzikun_0x28c0('0x1d')]();
    //                             continue;
    //                         case '6':
    //                             this['data'][wanzikun_0x28c0('0x1b')] = _0x1ff8ff;
    //                             continue;
    //                     }
    //                     break;
    //                 }
    //             }
    //         }
    //     });
    // },
    'toPayTap': function(_0x476fcc) {
        var _0x4c781f = {
            'cktkQ': wanzikun_0x28c0('0x38'),
            'fimQi': function(_0x118f61, _0x1e87f3) {
                return _0x118f61 !== _0x1e87f3;
            },
            'Toqqf': 'XgXpJ',
            'VYzGf': wanzikun_0x28c0('0x39'),
            'gAPgr': wanzikun_0x28c0('0x3a'),
            'vlPuO': function(_0x570166, _0x41fc4b) {
                return _0x570166 == _0x41fc4b;
            },
            'COeWs': function(_0x5c571a, _0x30e063) {
                return _0x5c571a - _0x30e063;
            },
            'PzFkQ': function(_0x4053b5, _0x4011e0) {
                return _0x4053b5 <= _0x4011e0;
            },
            'bOWFx': function(_0x4331ca, _0x320f9a) {
                return _0x4331ca === _0x320f9a;
            },
            'DRkkZ': wanzikun_0x28c0('0x3b'),
            'tJQqI': function(_0x5a1089, _0x19a20f) {
                return _0x5a1089 + _0x19a20f;
            },
            'KhXXx': function(_0x262cd1, _0x2cb01a) {
                return _0x262cd1 + _0x2cb01a;
            },
            'okymY': wanzikun_0x28c0('0x3c'),
            'TPmxO': function(_0x1304db, _0x197f29) {
                return _0x1304db !== _0x197f29;
            },
            'XoMPM': wanzikun_0x28c0('0x3d'),
            'RvTvN': wanzikun_0x28c0('0x3e'),
            'PsatG': wanzikun_0x28c0('0x3f')
        };
        var _0x9273d0 = this;
        var _0x5b26e3 = _0x476fcc[wanzikun_0x28c0('0x18')][wanzikun_0x28c0('0x19')]['id'];
        var _0x5f3964 = _0x476fcc[wanzikun_0x28c0('0x18')][wanzikun_0x28c0('0x19')]['money'];
        wx[wanzikun_0x28c0('0xb')]({
            'url': _0x4c781f[wanzikun_0x28c0('0x40')](_0x4c781f['KhXXx'](wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xe')], wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xf')]), _0x4c781f[wanzikun_0x28c0('0x41')]),
            'data': {
                'token': wanzikun_0x1930be[wanzikun_0x28c0('0x11')][wanzikun_0x28c0('0x12')]
            },
            'success': function(_0x3e5ddb) {
                var _0x4af2ad = {
                    'WGpoH': _0x4c781f[wanzikun_0x28c0('0x42')]
                };
                if (_0x4c781f[wanzikun_0x28c0('0x43')](_0x3e5ddb[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x15')], 0x0)) {
                    _0x5f3964 = _0x4c781f['COeWs'](_0x5f3964, _0x3e5ddb[wanzikun_0x28c0('0x14')]['data'][wanzikun_0x28c0('0x44')]);
                    if (_0x4c781f[wanzikun_0x28c0('0x45')](_0x5f3964, 0x0)) {
                        if (_0x4c781f[wanzikun_0x28c0('0x46')](wanzikun_0x28c0('0x47'), _0x4c781f[wanzikun_0x28c0('0x48')])) {
                            wanzikun_0x3eef3e[wanzikun_0x28c0('0x49')](wanzikun_0x1930be, _0x5f3964, _0x5b26e3, _0x4c781f[wanzikun_0x28c0('0x42')]);
                        } else {
                            wx[wanzikun_0x28c0('0xb')]({
                                'url': _0x4c781f[wanzikun_0x28c0('0x4a')](_0x4c781f[wanzikun_0x28c0('0x40')](wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xe')], wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xf')]), wanzikun_0x28c0('0x4b')),
                                'method': wanzikun_0x28c0('0x4c'),
                                'header': {
                                    'content-type': _0x4c781f[wanzikun_0x28c0('0x4d')]
                                },
                                'data': {
                                    'token': wanzikun_0x1930be[wanzikun_0x28c0('0x11')]['token'],
                                    'orderId': _0x5b26e3
                                },
                                'success': function(_0x477f03) {
                                    if (_0x4c781f[wanzikun_0x28c0('0x4e')](_0x4c781f[wanzikun_0x28c0('0x4f')], _0x4c781f[wanzikun_0x28c0('0x50')])) {
                                        wx[wanzikun_0x28c0('0x51')]({
                                            'url': _0x4c781f[wanzikun_0x28c0('0x42')]
                                        });
                                    } else {
                                        wx['reLaunch']({
                                            'url': _0x4af2ad[wanzikun_0x28c0('0x52')]
                                        });
                                    }
                                }
                            });
                        }
                    } else {
                        if (_0x4c781f[wanzikun_0x28c0('0x53')](_0x4c781f[wanzikun_0x28c0('0x54')], _0x4c781f[wanzikun_0x28c0('0x54')])) {
                            tabClass[0x2] = _0x4c781f[wanzikun_0x28c0('0x55')];
                        } else {
                            wanzikun_0x3eef3e['wxpay'](wanzikun_0x1930be, _0x5f3964, _0x5b26e3, _0x4c781f['cktkQ']);
                        }
                    }
                } else {
                    wx[wanzikun_0x28c0('0x56')]({
                        'title': '错误',
                        'content': _0x4c781f['RvTvN'],
                        'showCancel': ![]
                    });
                }
            }
        });
    },
    'onReady': function() {
    },
    'getOrderStatistics': function() {
        var _0x634475 = {
            'cIkuz': wanzikun_0x28c0('0x3a'),
            'VYxNj': wanzikun_0x28c0('0x63'),
            'hTjPe': function(_0x41eda0, _0x1f3c7c) {
                return _0x41eda0 == _0x1f3c7c;
            },
            'oQWrz': function(_0x55de75, _0x18607f) {
                return _0x55de75 !== _0x18607f;
            },
            'xrusn': wanzikun_0x28c0('0x64'),
            'ZIBfk': function(_0x161a5e, _0x1d5cfc) {
                return _0x161a5e > _0x1d5cfc;
            },
            'quZZi': function(_0x3bcd67, _0x58b810) {
                return _0x3bcd67 === _0x58b810;
            },
            'ogZMi': wanzikun_0x28c0('0x65'),
            'ARiCv': wanzikun_0x28c0('0x66'),
            'JqMWH': wanzikun_0x28c0('0x67'),
            'vShyn': 'KRmaq',
            'FBZqr': function(_0x1ce7d7, _0xcf567d) {
                return _0x1ce7d7 === _0xcf567d;
            },
            'QZnxL': wanzikun_0x28c0('0x68'),
            'dkebc': function(_0x1a4366, _0x415b40) {
                return _0x1a4366 + _0x415b40;
            },
            'ZTWsC': wanzikun_0x28c0('0x69')
        };
        var _0x2c3aa8 = this;
        wx['request']({
            'url': _0x634475[wanzikun_0x28c0('0x6a')](wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xe')] + wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xf')], _0x634475[wanzikun_0x28c0('0x6b')]),
            'data': {
                'token': wanzikun_0x1930be['globalData'][wanzikun_0x28c0('0x12')]
            },
            'success': _0xce8a59 => {
                var _0xbb4891 = {
                    'ZyUes': _0x634475[wanzikun_0x28c0('0x6c')]
                };
                wx[wanzikun_0x28c0('0x2e')]();
                if (_0x634475[wanzikun_0x28c0('0x6d')](_0xce8a59[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x15')], 0x0)) {
                    if (_0x634475[wanzikun_0x28c0('0x6e')](wanzikun_0x28c0('0x6f'), 'ONnka')) {
                        var _0x7b6d6f = _0x2c3aa8[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x70')];
                        if (_0xce8a59['data'][wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x71')] > 0x0) {
                            _0x7b6d6f[0x0] = _0x634475[wanzikun_0x28c0('0x72')];
                        } else {
                            if (wanzikun_0x28c0('0x73') !== _0x634475[wanzikun_0x28c0('0x74')]) {
                                _0x7b6d6f[0x0] = '';
                            } else {
                                _0x7b6d6f[0x1] = _0x634475['cIkuz'];
                            }
                        }
                        if (_0x634475[wanzikun_0x28c0('0x75')](_0xce8a59[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x76')], 0x0)) {
                            if (_0x634475[wanzikun_0x28c0('0x77')](_0x634475[wanzikun_0x28c0('0x78')], _0x634475['ARiCv'])) {
                                this[wanzikun_0x28c0('0x1c')]({
                                    'orderList': null,
                                    'logisticsMap': {},
                                    'goodsMap': {}
                                });
                            } else {
                                _0x7b6d6f[0x1] = _0x634475[wanzikun_0x28c0('0x72')];
                            }
                        } else {
                            if (_0x634475[wanzikun_0x28c0('0x77')](_0x634475['JqMWH'], _0x634475['JqMWH'])) {
                                _0x7b6d6f[0x1] = '';
                            } else {
                                var _0x1bc31e = _0xbb4891[wanzikun_0x28c0('0x79')][wanzikun_0x28c0('0x36')]('|'),
                                    _0x19ab4e = 0x0;
                                while (!![]) {
                                    switch (_0x1bc31e[_0x19ab4e++]) {
                                        case '0':
                                            if (e[wanzikun_0x28c0('0x59')]) {
                                                _0x1480ea['setData']({
                                                    'share': e[wanzikun_0x28c0('0x59')]
                                                });
                                            }
                                            continue;
                                        case '1':
                                            if (wanzikun_0x1930be['globalData'][wanzikun_0x28c0('0x57')] == !![]) {
                                                _0x1480ea['setData']({
                                                    'iphone': 'iphone'
                                                });
                                            }
                                            continue;
                                        case '2':
                                            var _0x32f106 = e['currentType'];
                                            continue;
                                        case '3':
                                            _0x1480ea[wanzikun_0x28c0('0x7a')](e);
                                            continue;
                                        case '4':
                                            if (_0x32f106) {
                                                _0x1480ea[wanzikun_0x28c0('0x1c')]({
                                                    'currentType': _0x32f106
                                                });
                                            }
                                            continue;
                                        case '5':
                                            this[wanzikun_0x28c0('0x14')]['currentType'] = _0x32f106;
                                            continue;
                                        case '6':
                                            var _0x1480ea = this;
                                            continue;
                                    }
                                    break;
                                }
                            }
                        }
                        if (_0x634475[wanzikun_0x28c0('0x75')](_0xce8a59[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x14')]['count_id_no_confirm'], 0x0)) {
                            _0x7b6d6f[0x2] = _0x634475[wanzikun_0x28c0('0x72')];
                        } else {
                            if (_0x634475[wanzikun_0x28c0('0x6e')](_0x634475[wanzikun_0x28c0('0x7b')], _0x634475['vShyn'])) {
                                _0x7b6d6f[0x3] = '';
                            } else {
                                _0x7b6d6f[0x2] = '';
                            }
                        }
                        if (_0xce8a59[wanzikun_0x28c0('0x14')]['data'][wanzikun_0x28c0('0x7c')] > 0x0) {
                            if (_0x634475[wanzikun_0x28c0('0x7d')](_0x634475['QZnxL'], wanzikun_0x28c0('0x7e'))) {
                                _0x2c3aa8[wanzikun_0x28c0('0x1c')]({
                                    'iphone': 'iphone'
                                });
                            } else {
                                _0x7b6d6f[0x3] = wanzikun_0x28c0('0x3a');
                            }
                        } else {
                            _0x7b6d6f[0x3] = '';
                        }
                        if (_0x634475['ZIBfk'](_0xce8a59[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x7f')], 0x0)) {
                        } else {
                        }
                        _0x2c3aa8['setData']({
                            'tabClass': _0x7b6d6f
                        });
                    } else {
                        console[wanzikun_0x28c0('0x16')](wanzikun_0x28c0('0x5'));
                        var _0x67f8bc = e[wanzikun_0x28c0('0x18')]['dataset'][wanzikun_0x28c0('0x1a')];
                    }
                }
            }
        });
    },
    // 'onShow': function (_0x827120) {
    //     var _0x5df6bf = {
    //         'lGgAx': '无法获取用户资金信息',
    //         'UrIaT': function (_0x156ef6, _0x372bf7) {
    //             return _0x156ef6 !== _0x372bf7;
    //         },
    //         'OkIjM': wanzikun_0x28c0('0x80'),
    //         'TNCFl': function (_0x18dd99, _0x1c8fbe) {
    //             return _0x18dd99 === _0x1c8fbe;
    //         },
    //         'AsQHp': 'eVJCF',
    //         'llKrH': function (_0x471c41, _0x18b7ef) {
    //             return _0x471c41 + _0x18b7ef;
    //         },
    //         'KRqUr': wanzikun_0x28c0('0x81')
    //     };
    //     wx[wanzikun_0x28c0('0xa')]();
    //     var _0x515a69 = this;
    //     var _0x464276 = {
    //         'token': wanzikun_0x1930be[wanzikun_0x28c0('0x11')]['token']
    //     };
    //     _0x464276[wanzikun_0x28c0('0x82')] = _0x515a69[wanzikun_0x28c0('0x14')]['currentType'];
    //     this[wanzikun_0x28c0('0x83')]();
    //     wx[wanzikun_0x28c0('0xb')]({
    //         'url': _0x5df6bf[wanzikun_0x28c0('0x84')](wanzikun_0x1930be[wanzikun_0x28c0('0xd')][wanzikun_0x28c0('0xe')], wanzikun_0x1930be['siteInfo'][wanzikun_0x28c0('0xf')]) + _0x5df6bf[wanzikun_0x28c0('0x85')],
    //         'data': _0x464276,
    //         'success': _0x3720ad => {
    //             var _0x86f364 = {
    //                 'ktvKV': _0x5df6bf[wanzikun_0x28c0('0x86')]
    //             };
    //             if (_0x5df6bf[wanzikun_0x28c0('0x87')](wanzikun_0x28c0('0x88'), _0x5df6bf[wanzikun_0x28c0('0x89')])) {
    //                 wx[wanzikun_0x28c0('0x2e')]();
    //                 if (_0x3720ad[wanzikun_0x28c0('0x14')]['code'] == 0x0) {
    //                     if (_0x5df6bf[wanzikun_0x28c0('0x8a')]('eVJCF', _0x5df6bf[wanzikun_0x28c0('0x8b')])) {
    //                         _0x515a69[wanzikun_0x28c0('0x1c')]({
    //                             'orderList': _0x3720ad[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x14')]['orderList'],
    //                             'logisticsMap': _0x3720ad[wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x8c')],
    //                             'goodsMap': _0x3720ad['data'][wanzikun_0x28c0('0x14')][wanzikun_0x28c0('0x8d')]
    //                         });
    //                     } else {
    //                         wx[wanzikun_0x28c0('0x56')]({
    //                             'title': '错误',
    //                             'content': _0x86f364[wanzikun_0x28c0('0x8e')],
    //                             'showCancel': ![]
    //                         });
    //                     }
    //                 } else {
    //                     this[wanzikun_0x28c0('0x1c')]({
    //                         'orderList': null,
    //                         'logisticsMap': {},
    //                         'goodsMap': {}
    //                     });
    //                 }
    //             } else {
    //                 tabClass[0x0] = wanzikun_0x28c0('0x3a');
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
    }
});
