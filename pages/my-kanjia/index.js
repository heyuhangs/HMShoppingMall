var wanzikun_0x4533 = ['/shop/goods/kanjia/info', 'KWdqL', '&id=', 'MuctR', 'SABzS', '/shop/goods/detail', 'pics', 'rUaZH', 'Lrbwj', 'KOkLZ', 'ypdOU', 'uFRqx', 'nLPeV', 'OavAm', 'QQCxO', '/pages/kanjia/index?kjId=', 'kjId', '&joiner=', 'RWMKV', 'showModal', 'basicInfo', 'GruUM', 'naojD', 'FLkee', 'UfnSP', 'BtSDW', 'vLUhC', 'OjQfb', 'Bajza', '/shop/goods/kanjia/join', 'currentTarget', 'dataset', 'sseYi', 'navigateTo', 'ybvDL', 'BGDZZ', 'pNdba', 'msg', '1|2|0|3|4', 'split', 'curHdIndex', 'curBdIndex', '/shop/goods/kanjia/myHelp', 'iovNv', 'mPAhj', 'RHMib', 'cBWxE', 'riUEr', 'IdSvy', 'iphone', 'EggGZ', 'globalData', 'DbdOt', 'Mogdq', 'JOzvZ', 'setData', 'vmIcy', 'code', 'push', 'data', 'kanjiaInfo', 'request', 'ZLLSw', 'urls', 'wAaLv', 'lhyKf', 'uJQPR', 'JaQXg', 'lxVik', 'NxRmF', 'VRBxU', 'token', 'uid', 'iQPfd', 'gethelpkj', 'goodsId', 'gBUfw', 'TeTmA', 'result', 'length', 'EauyR', 'qyQtU', 'RKVkj', 'ITztp', 'getgoods', 'mykanjia', 'kjhelp', '/shop/goods/kanjia/my', 'reYIm', 'umetS', 'eneKZ', 'qsVfZ', 'PXCtY', 'gethelpid'];
(function(_0x3971bd, _0x1e7e7e) {
    var _0x385d7c = function(_0x4bb821) {
        while (--_0x4bb821) {
            _0x3971bd['push'](_0x3971bd['shift']());
        }
    };
    _0x385d7c(++_0x1e7e7e);
}(wanzikun_0x4533, 0x1a2));
var wanzikun_0x58c9 = function(_0x1f8e9f, _0x35b601) {
    _0x1f8e9f = _0x1f8e9f - 0x0;
    var _0x1c7b59 = wanzikun_0x4533[_0x1f8e9f];
    return _0x1c7b59;
};
const wanzikun_0x54cd32 = getApp();
const app = getApp();
Page({
    'data': {
        'tabArr': {
            'curHdIndex': 0x0,
            'curBdIndex': 0x0
        },
        kjgoods: [
            {}
        ],
        'kjhelp': [],
        'pics': {},
        'helps': {},
        'statusType': ['会员收入', '代理收入'],
        currentType: 0,
        page: 1,
        date: '2019-09',
        fruit: [{
            id: 1,
            name: '分享提成',
        }, {
            id: 2,
            name: '重消提成'
        }, {
            id: 3,
            name: '管理分红'
        }, {
            id: 4,
            name: '辖区业绩提成',
        }, {
            id: 5,
            name: '代理商提成',
        }, {
            id: 6,
            name: '爱心分红',
        }, {
            id: 7,
            name: '招商提成',
        }],
        current: '',
        position: 'left',
        JJB_TYPE: '',
        status: 0
    },
    onLoad: function() {
        const status = this.data.currentType;
        this.getData(status)
        //默认时间
        // const date = self.doHandleDate();
        // self.setData({
        //     date: date
        // });

    },
    getData: function(status) {
        const self = this
        wx.showLoading({});
        wx.request({
            url: app.globalData.url + `moneyImpl/moneyChangeList?DS_ROLE=${status}&USER_ID=${app.globalData.userInfo.USER_ID}&page=${self.data.page}&JJB_TYPE=${self.data.JJB_TYPE}&REASON_TYPE=2&MONEY_TYPE=1&START_TIME=${self.data.date}`,
            method: "get",
            success: function(res) {
                if (res.data.result != 'error') {
                    const list = res.data.list
                    self.setData({
                        list: list,
                        status: status
                    })
                    if (list.length){
                        self.setData({
                            TOTAL_PRIZE: list[0].TOTAL_PRIZE
                        })
                    }
                    wx.hideLoading({});
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
    // doHandleDate: function() {
    //     var myDate = new Date();
    //     var tYear = myDate.getFullYear();
    //     var tMonth = myDate.getMonth();
    //
    //     var m = tMonth + 1;
    //     if (m.toString().length == 1) {
    //         m = "0" + m;
    //     }
    //     return tYear + '-' + m;
    // },
    toggleRight: function() {
        this.setData({
            showLeft: !this.data.showLeft
        });
    },
    toggleLeft: function() {
        this.setData({
            showLeft: !this.data.showLeft
        });
    },
    handleStatusClick: function() {
        this.setData({
            showLeft: !this.data.showLeft,
            page: 1
        });
        this.getData(this.data.status);
    },
    // handlesStatusChange: function({ detail = {} }){
    //     this.setData({
    //         valiDataName: detail.current
    //     })
    // },
    handleFruitChange({ detail = {} }) {
        const a = this.data.fruit.filter(function(e) {
            return e.name == detail.value
        })
        this.setData({
            current: detail.value,
            JJB_TYPE: a[0].id,
        });
    },
    getDateTime: function(e) {
        this.setData({
            date: e.detail.value
        })
        this.getData(this.data.status);
    },
    'statusTap': function(e) {
        // console.log(e.currentTarget.dataset.index)
        // if()
        this.setData({
            currentType: e.currentTarget.dataset.index,
            status: e.currentTarget.dataset.index
        })
        this.onLoad();
    },
    'mykanjia': function(_0x50ba47) {
        var _0x4a1951 = {
            'reYIm': function(_0x4e704d, _0x285f08) {
                return _0x4e704d < _0x285f08;
            },
            'umetS': function(_0x3dc643, _0x2ff6d7) {
                return _0x3dc643 + _0x2ff6d7;
            },
            'eneKZ': wanzikun_0x58c9('0x2d')
        };
        var _0x1f5643 = this;
        var _0x56fefa = [];
        for (var _0x22f5b9 = 0x0; _0x4a1951[wanzikun_0x58c9('0x2e')](_0x22f5b9, _0x50ba47[wanzikun_0x58c9('0x25')]); _0x22f5b9++) {
            var _0x3fa4cc = _0x50ba47[_0x22f5b9];
            wx['request']({
                'url': _0x4a1951[wanzikun_0x58c9('0x2f')](wanzikun_0x54cd32[wanzikun_0x58c9('0x9')][wanzikun_0x58c9('0x15')], _0x4a1951[wanzikun_0x58c9('0x30')]),
                'data': {
                    'kjid': _0x3fa4cc,
                    'token': wanzikun_0x54cd32['globalData'][wanzikun_0x58c9('0x1d')]
                },
                'success': function(_0x286356) {
                    if (_0x286356[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')] == 0x0) {
                        _0x56fefa['push'](_0x286356[wanzikun_0x58c9('0x11')]['data']);
                        _0x1f5643[wanzikun_0x58c9('0xd')]({
                            'kjgoods': _0x56fefa
                        });
                    }
                }
            });
        }
    },
    'kjhelp': function(_0x9790f6) {
        var _0x27c31b = {
            'PXCtY': function(_0x5b6f19, _0x26313f) {
                return _0x5b6f19 == _0x26313f;
            },
            'qsVfZ': function(_0x4293fb, _0x1b07d1) {
                return _0x4293fb < _0x1b07d1;
            },
            'BFvkQ': function(_0x5c88a3, _0xbf847e) {
                return _0x5c88a3 + _0xbf847e;
            },
            'ULYwp': wanzikun_0x58c9('0x0')
        };
        var _0x3e1ec5 = this;
        for (var _0x1f2b6d = 0x0; _0x27c31b[wanzikun_0x58c9('0x31')](_0x1f2b6d, _0x9790f6[wanzikun_0x58c9('0x25')]); _0x1f2b6d++) {
            var _0x103888 = _0x9790f6[_0x1f2b6d];
            wx['request']({
                'url': _0x27c31b['BFvkQ'](wanzikun_0x54cd32[wanzikun_0x58c9('0x9')]['urls'], _0x27c31b['ULYwp']),
                'data': {
                    'kjid': _0x103888,
                    'token': wanzikun_0x54cd32[wanzikun_0x58c9('0x9')][wanzikun_0x58c9('0x1d')],
                    'joinerUser': wanzikun_0x54cd32['globalData'][wanzikun_0x58c9('0x1e')]
                },
                'success': function(_0x3ce794) {
                    if (_0x27c31b[wanzikun_0x58c9('0x32')](_0x3ce794['data'][wanzikun_0x58c9('0xf')], 0x0)) {
                        _0x3e1ec5['gethelpkj'](_0x103888);
                        _0x3e1ec5[wanzikun_0x58c9('0x33')](_0x3ce794[wanzikun_0x58c9('0x11')]['data'][wanzikun_0x58c9('0x21')]);
                    }
                }
            });
        }
    },
    'gethelpkj': function(_0x51c606) {
        var _0x2ba387 = {
            'KiHxm': function(_0x134655, _0x18fc78) {
                return _0x134655 + _0x18fc78;
            },
            'KWdqL': wanzikun_0x58c9('0x34')
        };
        var _0x33291c = this;
        var _0x133b5d = [];
        wx['request']({
            'url': _0x2ba387['KiHxm'](wanzikun_0x54cd32[wanzikun_0x58c9('0x9')][wanzikun_0x58c9('0x15')], _0x2ba387[wanzikun_0x58c9('0x35')]),
            'data': {
                'kjid': _0x51c606,
                'joiner': wanzikun_0x54cd32[wanzikun_0x58c9('0x9')][wanzikun_0x58c9('0x1e')]
            },
            'success': function(_0x10a8df) {
                if (_0x10a8df[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')] == 0x0) {
                    _0x133b5d[wanzikun_0x58c9('0x10')](_0x10a8df[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x12')]);
                    _0x33291c[wanzikun_0x58c9('0xd')]({
                        'kjhelp': _0x133b5d
                    });
                }
            }
        });
    },
    'getgoods': function(_0x1319ed) {
        var _0x4ae10f = {
            'ypdOU': function(_0x750913, _0x355148) {
                return _0x750913 == _0x355148;
            },
            'OavAm': function(_0x391cf9, _0x2123c1) {
                return _0x391cf9 + _0x2123c1;
            },
            'jSuHP': function(_0x1ca9d5, _0x3ba2e0) {
                return _0x1ca9d5 + _0x3ba2e0;
            },
            'QQCxO': function(_0x386314, _0x212e5e) {
                return _0x386314 + _0x212e5e;
            },
            'RWMKV': wanzikun_0x58c9('0x36'),
            'Lrbwj': function(_0x385b21, _0xd24760) {
                return _0x385b21 === _0xd24760;
            },
            'KOkLZ': wanzikun_0x58c9('0x37'),
            'uFRqx': function(_0x353ca7, _0x5598ef) {
                return _0x353ca7 !== _0x5598ef;
            },
            'nLPeV': wanzikun_0x58c9('0x38'),
            'rUaZH': wanzikun_0x58c9('0x39')
        };
        var _0x1f5840 = this;
        var _0x3f2923 = _0x1f5840[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x3a')];
        wx['request']({
            'url': wanzikun_0x54cd32['globalData'][wanzikun_0x58c9('0x15')] + _0x4ae10f[wanzikun_0x58c9('0x3b')],
            'data': {
                'id': _0x1319ed
            },
            'success': function(_0x402501) {
                var _0x19c164 = {
                    'GruUM': function(_0xc278f0, _0x55c92e) {
                        return _0xc278f0 == _0x55c92e;
                    }
                };
                if (_0x4ae10f[wanzikun_0x58c9('0x3c')](_0x4ae10f[wanzikun_0x58c9('0x3d')], _0x4ae10f[wanzikun_0x58c9('0x3d')])) {
                    if (_0x4ae10f[wanzikun_0x58c9('0x3e')](_0x402501[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')], 0x0)) {
                        if (_0x4ae10f[wanzikun_0x58c9('0x3f')](_0x4ae10f[wanzikun_0x58c9('0x40')], wanzikun_0x58c9('0x38'))) {
                            if (_0x4ae10f['ypdOU'](_0x402501[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')], 0x0)) {
                                wx['navigateTo']({
                                    'url': _0x4ae10f[wanzikun_0x58c9('0x41')](_0x4ae10f['jSuHP'](_0x4ae10f['jSuHP'](_0x4ae10f[wanzikun_0x58c9('0x42')](_0x4ae10f['QQCxO'](wanzikun_0x58c9('0x43'), _0x402501[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x44')]), wanzikun_0x58c9('0x45')), _0x402501['data'][wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x1e')]), _0x4ae10f[wanzikun_0x58c9('0x46')]), _0x402501[wanzikun_0x58c9('0x11')]['data'][wanzikun_0x58c9('0x21')])
                                });
                            } else {
                                wx[wanzikun_0x58c9('0x47')]({
                                    'title': '错误',
                                    'content': _0x402501[wanzikun_0x58c9('0x11')]['msg'],
                                    'showCancel': ![]
                                });
                            }
                        } else {
                            _0x3f2923[_0x1319ed] = _0x402501[wanzikun_0x58c9('0x11')]['data'][wanzikun_0x58c9('0x48')];
                            _0x1f5840['setData']({
                                'pics': _0x3f2923
                            });
                        }
                    }
                } else {
                    if (_0x19c164[wanzikun_0x58c9('0x49')](_0x402501[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')], 0x0)) {
                        _0x3f2923[_0x1319ed] = _0x402501[wanzikun_0x58c9('0x11')]['data'][wanzikun_0x58c9('0x48')];
                        _0x1f5840[wanzikun_0x58c9('0xd')]({
                            'pics': _0x3f2923
                        });
                    }
                }
            }
        });
    },
    'gethelpid': function(_0x114beb) {
        var _0x27262d = {
            'UfnSP': function(_0x532d30, _0x290da9) {
                return _0x532d30 + _0x290da9;
            },
            'NWnIP': function(_0x79837f, _0x559ddc) {
                return _0x79837f !== _0x559ddc;
            },
            'BtSDW': wanzikun_0x58c9('0x4a'),
            'wSiJO': wanzikun_0x58c9('0x4b'),
            'vLUhC': function(_0x471763, _0x32c3ad) {
                return _0x471763 == _0x32c3ad;
            }
        };
        var _0x4c4996 = this;
        var _0x2b0776 = _0x4c4996[wanzikun_0x58c9('0x11')]['helps'];
        wx[wanzikun_0x58c9('0x13')]({
            'url': wanzikun_0x54cd32[wanzikun_0x58c9('0x9')][wanzikun_0x58c9('0x15')] + '/shop/goods/detail',
            'data': {
                'id': _0x114beb
            },
            'success': function(_0x262fd8) {
                var _0x368436 = {
                    'Bajza': function(_0x3cc7ae, _0x3ba9c6) {
                        return _0x3cc7ae == _0x3ba9c6;
                    },
                    'OjQfb': function(_0x486090, _0x466d51) {
                        return _0x27262d[wanzikun_0x58c9('0x4c')](_0x486090, _0x466d51);
                    }
                };
                if (_0x27262d['NWnIP'](_0x27262d[wanzikun_0x58c9('0x4d')], _0x27262d['wSiJO'])) {
                    if (_0x27262d[wanzikun_0x58c9('0x4e')](_0x262fd8[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')], 0x0)) {
                        _0x2b0776[_0x114beb] = _0x262fd8[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x11')]['basicInfo'];
                        _0x4c4996['setData']({
                            'helps': _0x2b0776
                        });
                    }
                } else {
                    var _0x3e4a8d = this;
                    var _0x36bf6d = _0x3e4a8d[wanzikun_0x58c9('0x11')]['pics'];
                    wx[wanzikun_0x58c9('0x13')]({
                        'url': _0x368436[wanzikun_0x58c9('0x4f')](wanzikun_0x54cd32[wanzikun_0x58c9('0x9')][wanzikun_0x58c9('0x15')], wanzikun_0x58c9('0x39')),
                        'data': {
                            'id': _0x114beb
                        },
                        'success': function(_0x5ef2eb) {
                            if (_0x368436[wanzikun_0x58c9('0x50')](_0x5ef2eb[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')], 0x0)) {
                                _0x36bf6d[_0x114beb] = _0x5ef2eb['data'][wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x48')];
                                _0x3e4a8d['setData']({
                                    'pics': _0x36bf6d
                                });
                            }
                        }
                    });
                }
            }
        });
    },
    // 'gokj': function(_0x1b979a) {
    //     var _0x244cd3 = {
    //         'ybvDL': function(_0x5ab1a9, _0x2bbf90) {
    //             return _0x5ab1a9 + _0x2bbf90;
    //         },
    //         'BGDZZ': function(_0x51bea2, _0x1a88f1) {
    //             return _0x51bea2 + _0x1a88f1;
    //         },
    //         'goRcv': '/pages/kanjia/index?kjId=',
    //         'pNdba': wanzikun_0x58c9('0x36'),
    //         'sseYi': function(_0x3406d7, _0x40f3e2) {
    //             return _0x3406d7 + _0x40f3e2;
    //         },
    //         'SWJvT': wanzikun_0x58c9('0x51')
    //     };
    //     var _0x451402 = _0x1b979a[wanzikun_0x58c9('0x52')][wanzikun_0x58c9('0x53')]['id'];
    //     wx[wanzikun_0x58c9('0x13')]({
    //         'url': _0x244cd3[wanzikun_0x58c9('0x54')](wanzikun_0x54cd32['globalData'][wanzikun_0x58c9('0x15')], _0x244cd3['SWJvT']),
    //         'data': {
    //             'kjid': _0x451402,
    //             'token': wanzikun_0x54cd32[wanzikun_0x58c9('0x9')][wanzikun_0x58c9('0x1d')]
    //         },
    //         'success': function(_0x520c15) {
    //             if (_0x520c15[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0xf')] == 0x0) {
    //                 wx[wanzikun_0x58c9('0x55')]({
    //                     'url': _0x244cd3[wanzikun_0x58c9('0x56')](_0x244cd3[wanzikun_0x58c9('0x56')](_0x244cd3[wanzikun_0x58c9('0x57')](_0x244cd3[wanzikun_0x58c9('0x57')](_0x244cd3['goRcv'] + _0x520c15[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x44')], wanzikun_0x58c9('0x45')), _0x520c15['data'][wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x1e')]), _0x244cd3[wanzikun_0x58c9('0x58')]), _0x520c15[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x21')])
    //                 });
    //             } else {
    //                 wx[wanzikun_0x58c9('0x47')]({
    //                     'title': '错误',
    //                     'content': _0x520c15[wanzikun_0x58c9('0x11')][wanzikun_0x58c9('0x59')],
    //                     'showCancel': ![]
    //                 });
    //             }
    //         }
    //     });
    // },
    'tabFun': function(_0x145b6d) {
        var _0x1f2a30 = wanzikun_0x58c9('0x5a')[wanzikun_0x58c9('0x5b')]('|'),
            _0x3f7c3a = 0x0;
        while (!![]) {
            switch (_0x1f2a30[_0x3f7c3a++]) {
                case '0':
                    _0x51c4ea[wanzikun_0x58c9('0x5c')] = _0x55a08d;
                    continue;
                case '1':
                    var _0x55a08d = _0x145b6d['target'][wanzikun_0x58c9('0x53')]['id'];
                    continue;
                case '2':
                    var _0x51c4ea = {};
                    continue;
                case '3':
                    _0x51c4ea[wanzikun_0x58c9('0x5d')] = _0x55a08d;
                    continue;
                case '4':
                    this[wanzikun_0x58c9('0xd')]({
                        'tabArr': _0x51c4ea
                    });
                    continue;
            }
            break;
        }
    }
});
