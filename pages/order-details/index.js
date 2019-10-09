var wanzikun_0x550c = ['nhblN', '立即好评，系统赠送您', 'HEqRB', 'sendTempleMsgImmediately', 'siteInfo', 'assessorderkey', '/pages/order-details/index?id=', 'stringify', 'jdAzE', 'mTXzW', 'GKTzp', 'orderInfo', 'ylojE', '您已确认收货，期待您的再次光临！', 'DRjkh', 'keyword2', 'AogjL', 'cYkpo', '3|1|0|5|2|4', 'Iiksg', '感谢您的评价，期待您的再次光临！', '积分奖励已发放至您的账户。', 'goodReputation', '/order/reputation', 'value', 'PzHZt', 'PodmJ', 'mxsWQ', 'reputation', 'remark', 'push', 'reputations', 'pgZmm', 'rLNbH', 'EXSDx', 'iVZQe', 'GuXdW', 'jRuBW', 'XfTex', 'mmFRb', 'successorderkey', 'Ogtaz', 'TpzEv', 'share', 'Cgquh', 'ECexV', '0.00', '4|3|1|5|0|2', 'iphone', 'IQafG', 'split', 'data', 'orderId', 'setData', 'woYgs', 'globalData', '积分奖励。', '/order/detail', 'showLoading', 'IoptG', 'eDsEC', 'wZUnP', 'request', 'urls', 'LyZRh', 'SYKgp', 'BXNBf', 'hideLoading', 'mEqTY', 'code', 'showModal', 'msg', 'qaIRg', 'order_reputation_score', 'MpYwm', 'gOSSP', 'length', 'vbdZK', 'LcTtY', 'price', 'number', '/pages/wuliu/index?id=', 'currentTarget', 'dataset', 'navigateTo', 'cEKmZ', 'BSENL', '&number=', 'GhFlG', '确认您已收到商品？', 'detail', 'formId', '#173177', 'aHotv', 'pjuAg', 'ruepv', 'confirm', 'qcXLa', 'phTen', 'wvNCR', '/order/delivery', 'token', 'lJned', 'onShow', 'keyword1', 'orderDetail', 'orderNumber', 'KYtGj', 'dMJyx', 'ULZyl'];
(function(_0x41cb77, _0x18fe3b) {
    var _0x5c60f0 = function(_0x3e7033) {
        while (--_0x3e7033) {
            _0x41cb77['push'](_0x41cb77['shift']());
        }
    };
    _0x5c60f0(++_0x18fe3b);
}(wanzikun_0x550c, 0x1e6));
var wanzikun_0x56ae = function(_0x2f3e31, _0x3a89c9) {
    _0x2f3e31 = _0x2f3e31 - 0x0;
    var _0x2c6db2 = wanzikun_0x550c[_0x2f3e31];
    return _0x2c6db2;
};
var wanzikun_0x15c6b9 = getApp();
const app = getApp();
Page({
    'data': {
        'orderId': 0x0,
        'goodsList': [],
        'yunPrice': wanzikun_0x56ae('0x0'),
        url: ''
    },
    onLoad:function (e) {
        const self = this;
        self.setData({
            currentType: e.currentType,
            url: app.globalData.imgUrl
        })
        wx.showLoading({});
        wx.request({
            url: app.globalData.url + `/orderImpl/orderInfo?USER_ID=${e.id}`,
            method: "GET",
            success: function (res) {
                if (res.statusCode == 200) {
                    self.setData({
                        orderInfo: res.data.orderInfo
                    })
                }
                wx.hideLoading({});
            }
        })
    },
    toPingjia(e) {
        const self = this;
        wx.navigateTo({
            url: `/pages/wuliu/index?img=${e.currentTarget.dataset.id.PATH}&orId=${self.data.orderInfo.USER_ID}&gId=${e.currentTarget.dataset.id.GOOD_ID}`
        });
    },
    'wuliuDetailsTap': function(_0x48fbef) {
        var _0x5fb7ce = {
            'cEKmZ': function(_0x213e5f, _0x1713a7) {
                return _0x213e5f + _0x1713a7;
            },
            'BSENL': wanzikun_0x56ae('0x23')
        };
        var _0x293b22 = _0x48fbef[wanzikun_0x56ae('0x24')][wanzikun_0x56ae('0x25')]['id'];
        var _0x5312fa = _0x48fbef[wanzikun_0x56ae('0x24')][wanzikun_0x56ae('0x25')]['number'];
        wx[wanzikun_0x56ae('0x26')]({
            'url': _0x5fb7ce[wanzikun_0x56ae('0x27')](_0x5fb7ce[wanzikun_0x56ae('0x28')] + _0x293b22, wanzikun_0x56ae('0x29')) + _0x5312fa
        });
    },
    'confirmBtnTap': function(_0x37a448) {
        var _0x383dd8 = {
            'aHotv': '您已确认收货，期待您的再次光临！',
            'pjuAg': function(_0x4716d1, _0x59b872) {
                return _0x4716d1 + _0x59b872;
            },
            'vSDYr': function(_0x50e32a, _0x504403) {
                return _0x50e32a + _0x504403;
            },
            'ruepv': '/order/delivery',
            'qcXLa': wanzikun_0x56ae('0x2a'),
            'phTen': 'XUJxs',
            'wvNCR': function(_0x550cbf, _0x26223f) {
                return _0x550cbf + _0x26223f;
            },
            'xxBJw': wanzikun_0x56ae('0x2b')
        };
        let _0x24470a = this;
        let _0x142e53 = this[wanzikun_0x56ae('0x5')][wanzikun_0x56ae('0x6')];
        let _0x4152cd = _0x37a448[wanzikun_0x56ae('0x2c')][wanzikun_0x56ae('0x2d')];
        wx['showModal']({
            'title': _0x383dd8['xxBJw'],
            'content': '',
            'success': function(_0xdc77d) {
                var _0x948aab = {
                    'lJned': function(_0x89d2cb, _0x2f79fb) {
                        return _0x89d2cb == _0x2f79fb;
                    },
                    'KYtGj': wanzikun_0x56ae('0x2e'),
                    'dMJyx': _0x383dd8[wanzikun_0x56ae('0x2f')],
                    'ULZyl': function(_0x247a6c, _0x170b3d) {
                        return _0x383dd8[wanzikun_0x56ae('0x30')](_0x247a6c, _0x170b3d);
                    },
                    'nhblN': function(_0x1020a0, _0x5dee42) {
                        return _0x383dd8['vSDYr'](_0x1020a0, _0x5dee42);
                    },
                    'HEqRB': '积分奖励。',
                    'jdAzE': function(_0x5975fa, _0x19dcc2) {
                        return _0x5975fa + _0x19dcc2;
                    },
                    'mTXzW': function(_0x2ce30f, _0x2d21c7) {
                        return _0x2ce30f + _0x2d21c7;
                    },
                    'GKTzp': _0x383dd8[wanzikun_0x56ae('0x31')]
                };
                if (_0xdc77d[wanzikun_0x56ae('0x32')]) {
                    if (_0x383dd8[wanzikun_0x56ae('0x33')] !== _0x383dd8[wanzikun_0x56ae('0x34')]) {
                        wx['showLoading']();
                        wx['request']({
                            'url': _0x383dd8[wanzikun_0x56ae('0x35')](wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')]['urls'], wanzikun_0x56ae('0x36')),
                            'data': {
                                'token': wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x37')],
                                'orderId': _0x142e53
                            },
                            'success': _0xdc77d => {
                                if (_0x948aab[wanzikun_0x56ae('0x38')](_0xdc77d[wanzikun_0x56ae('0x5')][wanzikun_0x56ae('0x17')], 0x0)) {
                                    _0x24470a[wanzikun_0x56ae('0x39')]();
                                    let _0x59f8f7 = {};
                                    _0x59f8f7[wanzikun_0x56ae('0x3a')] = {
                                        'value': _0x24470a[wanzikun_0x56ae('0x5')][wanzikun_0x56ae('0x3b')]['orderInfo'][wanzikun_0x56ae('0x3c')],
                                        'color': _0x948aab[wanzikun_0x56ae('0x3d')]
                                    };
                                    let _0x3cf607 = _0x948aab[wanzikun_0x56ae('0x3e')];
                                    if (wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x1b')]) {
                                        _0x3cf607 += _0x948aab[wanzikun_0x56ae('0x3f')](_0x948aab[wanzikun_0x56ae('0x40')](wanzikun_0x56ae('0x41'), wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x1b')]), _0x948aab[wanzikun_0x56ae('0x42')]);
                                    }
                                    _0x59f8f7['keyword2'] = {
                                        'value': _0x3cf607,
                                        'color': _0x948aab['KYtGj']
                                    };
                                    wanzikun_0x15c6b9[wanzikun_0x56ae('0x43')](wanzikun_0x15c6b9[wanzikun_0x56ae('0x44')][wanzikun_0x56ae('0x45')], _0x4152cd, _0x948aab[wanzikun_0x56ae('0x40')](wanzikun_0x56ae('0x46'), _0x142e53), JSON[wanzikun_0x56ae('0x47')](_0x59f8f7));
                                }
                            }
                        });
                    } else {
                        var _0x4f7907 = {
                            'AybLk': function(_0x26a204, _0x49fd0e) {
                                return _0x26a204 == _0x49fd0e;
                            },
                            'ylojE': wanzikun_0x56ae('0x2e'),
                            'AogjL': function(_0x1ad1d7, _0x1e9f9f) {
                                return _0x948aab[wanzikun_0x56ae('0x48')](_0x1ad1d7, _0x1e9f9f);
                            },
                            'DRjkh': wanzikun_0x56ae('0x41'),
                            'sLWbN': wanzikun_0x56ae('0xa'),
                            'cYkpo': wanzikun_0x56ae('0x46')
                        };
                        wx[wanzikun_0x56ae('0xc')]();
                        wx[wanzikun_0x56ae('0x10')]({
                            'url': _0x948aab[wanzikun_0x56ae('0x49')](wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x11')], _0x948aab[wanzikun_0x56ae('0x4a')]),
                            'data': {
                                'token': wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x37')],
                                'orderId': _0x142e53
                            },
                            'success': _0x202ed4 => {
                                if (_0x4f7907['AybLk'](_0x202ed4['data'][wanzikun_0x56ae('0x17')], 0x0)) {
                                    _0x24470a[wanzikun_0x56ae('0x39')]();
                                    let _0x85168a = {};
                                    _0x85168a['keyword1'] = {
                                        'value': _0x24470a[wanzikun_0x56ae('0x5')][wanzikun_0x56ae('0x3b')][wanzikun_0x56ae('0x4b')]['orderNumber'],
                                        'color': _0x4f7907[wanzikun_0x56ae('0x4c')]
                                    };
                                    let _0x3dd15e = wanzikun_0x56ae('0x4d');
                                    if (wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x1b')]) {
                                        _0x3dd15e += _0x4f7907['AogjL'](_0x4f7907[wanzikun_0x56ae('0x4e')], wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x1b')]) + _0x4f7907['sLWbN'];
                                    }
                                    _0x85168a[wanzikun_0x56ae('0x4f')] = {
                                        'value': _0x3dd15e,
                                        'color': _0x4f7907[wanzikun_0x56ae('0x4c')]
                                    };
                                    wanzikun_0x15c6b9['sendTempleMsgImmediately'](wanzikun_0x15c6b9[wanzikun_0x56ae('0x44')][wanzikun_0x56ae('0x45')], _0x4152cd, _0x4f7907[wanzikun_0x56ae('0x50')](_0x4f7907[wanzikun_0x56ae('0x51')], _0x142e53), JSON[wanzikun_0x56ae('0x47')](_0x85168a));
                                }
                            }
                        });
                    }
                }
            }
        });
    },
    'submitReputation': function(_0x7b05ba) {
        var _0x333e4b = {
            'rLNbH': wanzikun_0x56ae('0x52'),
            'iaPqX': function(_0x1a3143, _0x151f16) {
                return _0x1a3143 == _0x151f16;
            },
            'EXSDx': wanzikun_0x56ae('0x2'),
            'iVZQe': function(_0x98bf26, _0x26361f) {
                return _0x98bf26 === _0x26361f;
            },
            'GuXdW': wanzikun_0x56ae('0x53'),
            'Xgsxs': wanzikun_0x56ae('0x54'),
            'jRuBW': function(_0x65141c, _0x310026) {
                return _0x65141c + _0x310026;
            },
            'XfTex': wanzikun_0x56ae('0x55'),
            'mmFRb': wanzikun_0x56ae('0x2e'),
            'HdCnb': function(_0x51a987, _0x233e48) {
                return _0x51a987 + _0x233e48;
            },
            'Ogtaz': wanzikun_0x56ae('0x46'),
            'PzHZt': function(_0x543b30, _0x356132) {
                return _0x543b30 + _0x356132;
            },
            'PodmJ': 'orderGoodsId',
            'zCwoQ': function(_0x49c3be, _0x54658d) {
                return _0x49c3be + _0x54658d;
            },
            'xsYRs': wanzikun_0x56ae('0x56'),
            'mxsWQ': 'goodReputationRemark',
            'pgZmm': wanzikun_0x56ae('0x57')
        };
        let _0x1fafc2 = this;
        let _0x130ae8 = _0x7b05ba[wanzikun_0x56ae('0x2c')][wanzikun_0x56ae('0x2d')];
        let _0x28b8d2 = {};
        _0x28b8d2[wanzikun_0x56ae('0x37')] = wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x37')];
        _0x28b8d2[wanzikun_0x56ae('0x6')] = this[wanzikun_0x56ae('0x5')][wanzikun_0x56ae('0x6')];
        let _0x47a018 = [];
        let _0x2509f3 = 0x0;
        while (_0x7b05ba['detail'][wanzikun_0x56ae('0x58')][_0x333e4b[wanzikun_0x56ae('0x59')](_0x333e4b[wanzikun_0x56ae('0x5a')], _0x2509f3)]) {
            let _0x556bb7 = _0x7b05ba[wanzikun_0x56ae('0x2c')][wanzikun_0x56ae('0x58')][_0x333e4b['PzHZt'](_0x333e4b['PodmJ'], _0x2509f3)];
            let _0x3fab79 = _0x7b05ba[wanzikun_0x56ae('0x2c')][wanzikun_0x56ae('0x58')][_0x333e4b['zCwoQ'](_0x333e4b['xsYRs'], _0x2509f3)];
            let _0x4869c1 = _0x7b05ba[wanzikun_0x56ae('0x2c')][wanzikun_0x56ae('0x58')][_0x333e4b[wanzikun_0x56ae('0x5b')] + _0x2509f3];
            let _0x2fca34 = {};
            _0x2fca34['id'] = _0x556bb7;
            _0x2fca34[wanzikun_0x56ae('0x5c')] = _0x3fab79;
            _0x2fca34[wanzikun_0x56ae('0x5d')] = _0x4869c1;
            _0x47a018[wanzikun_0x56ae('0x5e')](_0x2fca34);
            _0x2509f3++;
        }
        _0x28b8d2[wanzikun_0x56ae('0x5f')] = _0x47a018;
        wx[wanzikun_0x56ae('0xc')]();
        wx[wanzikun_0x56ae('0x10')]({
            'url': wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x11')] + _0x333e4b[wanzikun_0x56ae('0x60')],
            'data': {
                'postJsonString': _0x28b8d2
            },
            'success': _0x4104d1 => {
                var _0x310758 = {
                    'TpzEv': _0x333e4b[wanzikun_0x56ae('0x61')],
                    'Cgquh': function(_0x94e69b, _0x320367) {
                        return _0x333e4b['iaPqX'](_0x94e69b, _0x320367);
                    },
                    'ECexV': _0x333e4b[wanzikun_0x56ae('0x62')]
                };
                wx[wanzikun_0x56ae('0x15')]();
                if (_0x4104d1[wanzikun_0x56ae('0x5')][wanzikun_0x56ae('0x17')] == 0x0) {
                    if (_0x333e4b[wanzikun_0x56ae('0x63')](_0x333e4b[wanzikun_0x56ae('0x64')], _0x333e4b['GuXdW'])) {
                        _0x1fafc2[wanzikun_0x56ae('0x39')]();
                        let _0x28b8d2 = {};
                        _0x28b8d2[wanzikun_0x56ae('0x3a')] = {
                            'value': _0x1fafc2[wanzikun_0x56ae('0x5')][wanzikun_0x56ae('0x3b')][wanzikun_0x56ae('0x4b')][wanzikun_0x56ae('0x3c')],
                            'color': wanzikun_0x56ae('0x2e')
                        };
                        let _0x4175a6 = _0x333e4b['Xgsxs'];
                        if (wanzikun_0x15c6b9['globalData'][wanzikun_0x56ae('0x1b')]) {
                            _0x4175a6 += _0x333e4b[wanzikun_0x56ae('0x65')](wanzikun_0x15c6b9['globalData'][wanzikun_0x56ae('0x1b')], _0x333e4b[wanzikun_0x56ae('0x66')]);
                        }
                        _0x28b8d2['keyword2'] = {
                            'value': _0x4175a6,
                            'color': _0x333e4b[wanzikun_0x56ae('0x67')]
                        };
                        wanzikun_0x15c6b9['sendTempleMsgImmediately'](wanzikun_0x15c6b9[wanzikun_0x56ae('0x44')][wanzikun_0x56ae('0x68')], _0x130ae8, _0x333e4b['HdCnb'](_0x333e4b[wanzikun_0x56ae('0x69')], _0x1fafc2[wanzikun_0x56ae('0x5')]['orderId']), JSON[wanzikun_0x56ae('0x47')](_0x28b8d2));
                    } else {
                        var _0x53ad2b = _0x310758[wanzikun_0x56ae('0x6a')][wanzikun_0x56ae('0x4')]('|'),
                            _0x3259dc = 0x0;
                        while (!![]) {
                            switch (_0x53ad2b[_0x3259dc++]) {
                                case '0':
                                    if (!_0x7b05ba[wanzikun_0x56ae('0x6b')]) {
                                        _0x4b81bb[wanzikun_0x56ae('0x7')]({
                                            'share': !![]
                                        });
                                    }
                                    continue;
                                case '1':
                                    var _0x4d74cb = _0x7b05ba['id'];
                                    continue;
                                case '2':
                                    _0x4b81bb['data'][wanzikun_0x56ae('0x6')] = _0x4d74cb;
                                    continue;
                                case '3':
                                    var _0x4b81bb = this;
                                    continue;
                                case '4':
                                    _0x4b81bb['setData']({
                                        'orderId': _0x4d74cb
                                    });
                                    continue;
                                case '5':
                                    if (_0x310758[wanzikun_0x56ae('0x6c')](wanzikun_0x15c6b9[wanzikun_0x56ae('0x9')][wanzikun_0x56ae('0x2')], !![])) {
                                        _0x4b81bb[wanzikun_0x56ae('0x7')]({
                                            'iphone': _0x310758[wanzikun_0x56ae('0x6d')]
                                        });
                                    }
                                    continue;
                            }
                            break;
                        }
                    }
                }
            }
        });
    }
});
