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
Page({
        'data': {
                'balance': 0x0
        },
        'onLoad': function() {
                var _0x3a0e19 = {
                        'xareV': function(_0x4e5ea5, _0x1245c3) {
                                return _0x4e5ea5 == _0x1245c3;
                        },
                        'oUHpd': function(_0x2d6131, _0x3cf723) {
                                return _0x2d6131 === _0x3cf723;
                        },
                        'WYuEH': wanzikun_0xfabc('0x0')
                };
                var _0x2dca94 = this;
                if (wanzikun_0x111576['globalData'][wanzikun_0xfabc('0x1')] == !![]) {
                        _0x2dca94[wanzikun_0xfabc('0x2')]({
                                'iphone': wanzikun_0xfabc('0x1')
                        });
                }
                wx[wanzikun_0xfabc('0x3')]({
                        'url': wanzikun_0x111576[wanzikun_0xfabc('0x4')][wanzikun_0xfabc('0x5')] + wanzikun_0xfabc('0x6'),
                        'data': {
                                'token': wanzikun_0x111576[wanzikun_0xfabc('0x4')][wanzikun_0xfabc('0x7')]
                        },
                        'success': function(_0x3255f9) {
                                if (_0x3a0e19[wanzikun_0xfabc('0x8')](_0x3255f9[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xa')], 0x0)) {
                                        if (_0x3a0e19[wanzikun_0xfabc('0xb')](_0x3a0e19[wanzikun_0xfabc('0xc')], wanzikun_0xfabc('0x0'))) {
                                                _0x2dca94[wanzikun_0xfabc('0x2')]({
                                                        'balance': _0x3255f9[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xd')],
                                                        'freeze': _0x3255f9['data'][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xe')],
                                                        'score': _0x3255f9[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xf')]
                                                });
                                        } else {
                                                if (_0x3255f9['confirm']) {
                                                        _0x2dca94[wanzikun_0xfabc('0x10')]();
                                                }
                                        }
                                }
                        }
                });
        },
        'onReady': function() {},
        'onShow': function() {
                var _0x35679c = {
                        'rxUHd': function(_0x79cf96, _0x360190) {
                                return _0x79cf96 == _0x360190;
                        },
                        'ekgTo': function(_0x1128c9, _0x467221) {
                                return _0x1128c9 !== _0x467221;
                        },
                        'gVeCb': 'pZblL',
                        'KgXdW': wanzikun_0xfabc('0x11'),
                        'jkXkC': function(_0x14d363, _0x114aba) {
                                return _0x14d363 + _0x114aba;
                        }
                };
                var _0x5cebdf = this;
                wx[wanzikun_0xfabc('0x3')]({
                        'url': _0x35679c['jkXkC'](wanzikun_0x111576[wanzikun_0xfabc('0x4')][wanzikun_0xfabc('0x5')], '/user/amount'),
                        'data': {
                                'token': wanzikun_0x111576['globalData'][wanzikun_0xfabc('0x7')]
                        },
                        'success': function(_0x4753d8) {
                                if (_0x35679c[wanzikun_0xfabc('0x12')](_0x4753d8[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xa')], 0x0)) {
                                        if (_0x35679c['ekgTo'](_0x35679c[wanzikun_0xfabc('0x13')], _0x35679c[wanzikun_0xfabc('0x14')])) {
                                                _0x5cebdf[wanzikun_0xfabc('0x2')]({
                                                        'balance': _0x4753d8[wanzikun_0xfabc('0x9')]['data'][wanzikun_0xfabc('0xd')],
                                                        'freeze': _0x4753d8[wanzikun_0xfabc('0x9')]['data'][wanzikun_0xfabc('0xe')],
                                                        'score': _0x4753d8[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xf')]
                                                });
                                        } else {
                                                _0x5cebdf[wanzikun_0xfabc('0x10')]();
                                        }
                                }
                        }
                });
        },
        'onHide': function() {},
        'onUnload': function() {},
        'onPullDownRefresh': function() {},
        'onReachBottom': function() {},
        'onShareAppMessage': function() {},
        'bindCancel': function() {
                wx[wanzikun_0xfabc('0x15')]({});
        },
        'bindSave': function(_0x480b89) {
                var _0x1ac9e8 = {
                        'nwdvY': wanzikun_0xfabc('0x16'),
                        'myVMT': wanzikun_0xfabc('0x17'),
                        'YHscw': function(_0x97f4e8, _0xac86a7) {
                                return _0x97f4e8 == _0xac86a7;
                        },
                        'eVzsv': wanzikun_0xfabc('0x18'),
                        'EwSVj': function(_0x51fbf1, _0x1af0d6) {
                                return _0x51fbf1 == _0x1af0d6;
                        },
                        'qwYUM': function(_0x220d36, _0x14a976) {
                                return _0x220d36 < _0x14a976;
                        },
                        'iSNVM': function(_0x13191d, _0x189ed0) {
                                return _0x13191d * _0x189ed0;
                        },
                        'ZimRp': wanzikun_0xfabc('0x19'),
                        'WIxCi': function(_0x476fa9, _0x221261) {
                                return _0x476fa9 + _0x221261;
                        },
                        'VIeaH': wanzikun_0xfabc('0x1a')
                };
                var _0x4b8326 = this;
                var _0x9d10eb = _0x480b89['detail']['value'][wanzikun_0xfabc('0x1b')];
                if (_0x1ac9e8[wanzikun_0xfabc('0x1c')](_0x9d10eb, '') || _0x1ac9e8[wanzikun_0xfabc('0x1d')](_0x1ac9e8[wanzikun_0xfabc('0x1e')](_0x9d10eb, 0x1), 0x64)) {
                        wx[wanzikun_0xfabc('0x1f')]({
                                'title': '错误',
                                'content': _0x1ac9e8[wanzikun_0xfabc('0x20')],
                                'showCancel': ![]
                        });
                        return;
                }
                wx[wanzikun_0xfabc('0x3')]({
                        'url': _0x1ac9e8[wanzikun_0xfabc('0x21')](wanzikun_0x111576[wanzikun_0xfabc('0x4')]['urls'], _0x1ac9e8[wanzikun_0xfabc('0x22')]),
                        'data': {
                                'token': wanzikun_0x111576[wanzikun_0xfabc('0x4')][wanzikun_0xfabc('0x7')],
                                'money': _0x9d10eb
                        },
                        'success': function(_0x5942b0) {
                                var _0x373dcd = {
                                        'skKPB': wanzikun_0xfabc('0x1')
                                };
                                if (_0x1ac9e8[wanzikun_0xfabc('0x23')] === _0x1ac9e8[wanzikun_0xfabc('0x24')]) {
                                        _0x4b8326['setData']({
                                                'iphone': _0x373dcd[wanzikun_0xfabc('0x25')]
                                        });
                                } else {
                                        if (_0x1ac9e8['YHscw'](_0x5942b0[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0xa')], 0x0)) {
                                                wx[wanzikun_0xfabc('0x1f')]({
                                                        'title': '成功',
                                                        'content': _0x1ac9e8[wanzikun_0xfabc('0x26')],
                                                        'showCancel': ![],
                                                        'success': function(_0x5942b0) {
                                                                if (_0x5942b0[wanzikun_0xfabc('0x27')]) {
                                                                        _0x4b8326[wanzikun_0xfabc('0x10')]();
                                                                }
                                                        }
                                                });
                                        } else {
                                                wx['showModal']({
                                                        'title': '错误',
                                                        'content': _0x5942b0[wanzikun_0xfabc('0x9')][wanzikun_0xfabc('0x28')],
                                                        'showCancel': ![]
                                                });
                                        }
                                }
                        }
                });
        }
});
