var wanzikun_0x3acd = ['XEiez', 'showModal', 'PVNsw', 'VzRmf', 'uuGZR', 'JKovk', 'ffUyz', 'data', 'selProvince', 'KyRhg', 'NMhsF', 'nQEPT', 'cityData', 'cityList', 'districtList', 'name', 'bindPickerChange', 'mqknm', 'XsGPp', 'confirm', 'request', 'bOshY', 'siteInfo', 'url', 'subDomain', 'globalData', 'cancel', 'FBjrx', 'BNaTt', 'selProvinceIndex', 'selCityIndex', 'exDnD', 'selDistrict', 'selDistrictIndex', 'VXZQr', 'yIfpw', 'ihEPW', 'dHOQs', 'MBnYj', 'xtYpR', 'TSFaQ', 'length', 'grQRx', 'districtId', 'QpJSN', 'uIWWT', 'ZwUlm', 'dhSJF', 'urls', 'yQTLX', 'token', 'true', 'Upfev', 'msg', '/user/shipping-address/detail', 'ljrwP', 'dhghV', 'YoKbK', 'BDINe', 'yPiiq', 'CiGat', 'qZNVp', 'PjFUX', 'UjRUx', 'showLoading', 'BKhXE', 'PAnVF', 'CPmKG', 'setData', 'provinceStr', 'cityStr', 'areaStr', 'setDBSaveAddressId', '无法获取快递地址数据', 'push', 'LsnrJ', 'NYLRc', 'bpSeT', 'pCqbU', 'gdKOx', 'initCityData', 'iNkpp', 'QtbYS', 'ewVzf', 'PKjRa', 'hideLoading', 'YwfNM', 'EmlXo', 'edFzE', 'QZhvp', 'mAJwH', 'ybiOo', 'lUKeJ', 'ChNQS', 'provinceId', 'iDofu', 'CLezp', 'nHhWV', 'ZjhRF', 'cityId', 'OPxay', 'MDkWQ', 'nzxRr', 'EOrvO', 'YQCvw', 'KfFIL', '用户点击取消', '确定要删除该收货地址吗？', 'currentTarget', 'dataset', 'KSHVK', 'NebXK', 'NGSKf', 'FhxmR', 'pEBhz', 'TWXsn', 'log', 'jJeml', 'CxhFG', 'TfDnV', 'cYPci', 'ENIxg', 'chooseAddress', 'rfGDW', 'wNHCB', 'RSQhT', 'cityName', 'countyName', 'VTUFu', 'aSbeU', 'bindPickerProvinceChange', 'yTdqK', 'yBfUP', 'BhdgD', 'espHh', '../../utils/city.js', '请选择', 'navigateBack', 'iphone', '/user/shipping-address/delete', '请填写联系人姓名', 'eejZX', '请填写手机号码', 'DudJS', 'YqVIo', '请选择地区', 'KAQto', 'YjtJU', '请填写详细地址', 'YweAD', '请填写邮编', 'add', 'update', '/user/shipping-address/', 'detail', 'value', 'address', 'mobile', 'code'];
(function (_0x2d8f05, _0x4b81bb) {
    var _0x4d74cb = function (_0x32719f) {
        while (--_0x32719f) {
            _0x2d8f05['push'](_0x2d8f05['shift']());
        }
    };
    _0x4d74cb(++_0x4b81bb);
}(wanzikun_0x3acd, 0x87));
var wanzikun_0x14fd = function (_0x4f2cc7, _0x151d24) {
    _0x4f2cc7 = _0x4f2cc7 - 0x0;
    var _0x5db93c = wanzikun_0x3acd[_0x4f2cc7];
    return _0x5db93c;
};
var wanzikun_0x21a7f4 = require(wanzikun_0x14fd('0x0'));
var wanzikun_0x5c9afa = getApp();
const app = getApp();
Page({
    'data': {
        "provinces": [
            "北京市",
            "天津市",
            "河北省",
            "山西省",
            "内蒙古自治区",
            "辽宁省",
            "吉林省",
            "黑龙江省",
            "上海市",
            "江苏省",
            "浙江省",
            "安徽省",
            "福建省",
            "江西省",
            "山东省",
            "河南省",
            "湖北省",
            "湖南省",
            "广东省",
            "广西壮族自治区",
            "海南省",
            "重庆市",
            "四川省",
            "贵州省",
            "云南省",
            "西藏自治区",
            "陕西省",
            "甘肃省",
            "青海省",
            "宁夏回族自治区",
            "新疆维吾尔自治区",
            "台湾省",
            "香港特别行政区",
            "澳门特别行政区"
        ],
        'citys': [],
        'districts': [],
        'selProvince': wanzikun_0x14fd('0x1'),
        'selCity': '请选择',
        'selDistrict': wanzikun_0x14fd('0x1'),
        'selProvinceIndex': 0x0,
        'selCityIndex': 0x0,
        'selDistrictIndex': 0x0,
        more: false,
        isEdit: false,
        isAdd: false,
        optionsGoodsId: false
    },
    'bindCancel': function () {
        wx[wanzikun_0x14fd('0x2')]({});
    },
    bindSave: function (e) {
        const self = this;
        let status = '0';
        let url = '/userImpl/addAddress';
        if (self.data.more) {
            status = '1'
        }
        const obj = {
            VIP_ID: app.globalData.userInfo.USER_ID,
            ADDRESS: e.detail.value.address,
            PROVINCE: self.data.selProvince,
            CITY: self.data.selCity,
            DISTRICT: self.data.selDistrict == '请选择' ? '' : self.data.selDistrict,
            IS_USE: status,
            NAME: e.detail.value.linkMan,
            TEL: e.detail.value.mobile
        }
        if (this.data.isEdit) {
            url = '/userImpl/editAddress'
            obj.USER_ID = self.data.addressData.USER_ID
        }
        wx.request({
            url: app.globalData.url + '' + url,
            method: "POST",
            data: obj,
            success: function (res) {
                let url = '/pages/select-address/index'
                wx.showToast({
                    title: '地址保存成功!',
                    icon: 'success',
                    duration: 1000,
                    mask: true
                });
                if (self.data.isAdd) {
                    if (self.data.optionsGoodsId) {
                        wx.redirectTo({
                            url: url + '?selects=1&optionsGoodsId=' + self.data.optionsGoodsId + '&num=' + self.data.num
                        })
                    } else {
                        wx.redirectTo({
                            url: url + '?selects=1'
                        })
                    }
                } else {
                    wx.redirectTo({
                        url: url
                    })
                }
            }
        })
    },
    hanlerMore: function () {
        this.setData({
            more: !this.data.more
        })
    },
    onLoad: function (options) {
        const self = this;
        if (options.isAadd) {
            self.setData({
                isAdd: true
            })
        }
        if (options.optionsGoodsId) {
            self.setData({
                optionsGoodsId: options.optionsGoodsId,
                num: options.num
            })
        }
        if (options.id) {
            wx.showLoading({});
            wx.request({
                url: app.globalData.url + `/userImpl/getAddressList?USER_ID=${app.globalData.userInfo.USER_ID}&ADDRESS_ID=${options.id}`,
                method: "GET",
                success: function (res) {
                    if (res.statusCode == 200) {
                        const obj = res.data.addList[0];
                        self.setData({
                            selProvince: obj.PROVINCE,
                            selCity: obj.CITY,
                            selDistrict: obj.DISTRICT,
                            more: obj.IS_USE == 1 ? true : false,
                            addressData: obj,
                            isEdit: true
                        })
                        wx.hideLoading();
                    }
                }
            })
        }
    },
    deleteAddress: function (e) {
        wx.showModal({
            title: '提示',
            content: '确定要删除吗？',
            success: function (sm) {
                if (sm.confirm) {
                    wx.request({
                        url: app.globalData.url + `/userImpl/deleteAddress?UESR_ID=${e.currentTarget.dataset.id}`,
                        method: "GET",
                        success: function (res) {
                            if (res.statusCode == 200) {
                                wx.showToast({
                                    title: '删除成功!',
                                    icon: 'none',
                                    duration: 2000
                                });
                                setTimeout(function () {
                                    wx.redirectTo({
                                        url: '/pages/select-address/index'
                                    })
                                }, 1500)
                            }
                        }
                    })
                } else if (sm.cancel) {
                    wx.showToast({
                        title: '取消成功!',
                        icon: 'none',
                        duration: 2000
                    });
                    // console.log('取消');
                }
            }
        })
    },
    // submit: function () {
    //
    // wx.request({
    //     url: app.globalData.url+`/userImpl/addAddress`,
    //     method: "GET",
    //     success: function(res) {
    //         if(res.statusCode == 200){
    //             self.setData({
    //                 goods: res.data.goodList
    //             })
    //         }
    //     }
    // })
    // },
    // 'bindSave': function(_0x30a551) {
    //     var _0xe91d75 = {
    //         'LuWOA': wanzikun_0x14fd('0x3'),
    //         'bOshY': function(_0x4d0bf6, _0x5992d3) {
    //             return _0x4d0bf6 + _0x5992d3;
    //         },
    //         'QGhKy': function(_0x292e42, _0xe585f4) {
    //             return _0x292e42 + _0xe585f4;
    //         },
    //         'bHIzD': wanzikun_0x14fd('0x4'),
    //         'FBjrx': '用户点击取消',
    //         'grQRx': function(_0xe03814, _0x2c9ac8) {
    //             return _0xe03814 == _0x2c9ac8;
    //         },
    //         'Upfev': function(_0x1dcff4, _0x4d6de5) {
    //             return _0x1dcff4 != _0x4d6de5;
    //         },
    //         'XEiez': function(_0x4240fb, _0x13b8e2) {
    //             return _0x4240fb == _0x13b8e2;
    //         },
    //         'PVNsw': wanzikun_0x14fd('0x5'),
    //         'VzRmf': function(_0x5ecb26, _0xa7e63) {
    //             return _0x5ecb26 == _0xa7e63;
    //         },
    //         'uuGZR': function(_0x1d23b0, _0x53b837) {
    //             return _0x1d23b0 === _0x53b837;
    //         },
    //         'JKovk': wanzikun_0x14fd('0x6'),
    //         'ffUyz': 'KlBKf',
    //         'FIyjO': wanzikun_0x14fd('0x7'),
    //         'KyRhg': wanzikun_0x14fd('0x1'),
    //         'NMhsF': wanzikun_0x14fd('0x8'),
    //         'nQEPT': wanzikun_0x14fd('0x9'),
    //         'BNaTt': wanzikun_0x14fd('0xa'),
    //         'mqknm': wanzikun_0x14fd('0xb'),
    //         'XsGPp': wanzikun_0x14fd('0xc'),
    //         'exDnD': function(_0x5c156b, _0x2ae71f) {
    //             return _0x5c156b == _0x2ae71f;
    //         },
    //         'VXZQr': function(_0x1bbd96, _0x3b08df) {
    //             return _0x1bbd96 == _0x3b08df;
    //         },
    //         'yIfpw': wanzikun_0x14fd('0xd'),
    //         'ihEPW': function(_0x5163b3, _0x470862) {
    //             return _0x5163b3 == _0x470862;
    //         },
    //         'dHOQs': function(_0x472447, _0x55dbab) {
    //             return _0x472447 !== _0x55dbab;
    //         },
    //         'xtYpR': wanzikun_0x14fd('0xe'),
    //         'TSFaQ': wanzikun_0x14fd('0xf'),
    //         'QpJSN': wanzikun_0x14fd('0x10'),
    //         'uIWWT': wanzikun_0x14fd('0x11'),
    //         'ZwUlm': function(_0x1a1341, _0x505333) {
    //             return _0x1a1341 + _0x505333;
    //         },
    //         'dhSJF': function(_0x5cc62a, _0x25c0e6) {
    //             return _0x5cc62a + _0x25c0e6;
    //         },
    //         'yQTLX': wanzikun_0x14fd('0x12')
    //     };
    //     var _0x460ec6 = this;
    //     var _0x54ab6a = _0x30a551[wanzikun_0x14fd('0x13')]['value']['linkMan'];
    //     var _0x4f74ee = _0x30a551[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')][wanzikun_0x14fd('0x15')];
    //     var _0x5a9e1d = _0x30a551[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')][wanzikun_0x14fd('0x16')];
    //     var _0x515e75 = _0x30a551['detail']['value'][wanzikun_0x14fd('0x17')];
    //     if (_0xe91d75[wanzikun_0x14fd('0x18')](_0x54ab6a, '')) {
    //         wx[wanzikun_0x14fd('0x19')]({
    //             'title': '提示',
    //             'content': _0xe91d75[wanzikun_0x14fd('0x1a')],
    //             'showCancel': ![]
    //         });
    //         return;
    //     }
    //     if (_0xe91d75[wanzikun_0x14fd('0x1b')](_0x5a9e1d, '')) {
    //         if (_0xe91d75[wanzikun_0x14fd('0x1c')](_0xe91d75[wanzikun_0x14fd('0x1d')], _0xe91d75[wanzikun_0x14fd('0x1e')])) {
    //             _0x460ec6['setData']({
    //                 'iphone': _0xe91d75['LuWOA']
    //             });
    //         } else {
    //             wx[wanzikun_0x14fd('0x19')]({
    //                 'title': '提示',
    //                 'content': _0xe91d75['FIyjO'],
    //                 'showCancel': ![]
    //             });
    //             return;
    //         }
    //     }
    //     if (_0xe91d75[wanzikun_0x14fd('0x1b')](this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x20')], _0xe91d75[wanzikun_0x14fd('0x21')])) {
    //         if (_0xe91d75['uuGZR'](_0xe91d75[wanzikun_0x14fd('0x22')], _0xe91d75[wanzikun_0x14fd('0x23')])) {
    //             if (diatrictName == wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][i][wanzikun_0x14fd('0x25')][j][wanzikun_0x14fd('0x26')][k][wanzikun_0x14fd('0x27')]) {
    //                 eventJ = {
    //                     'detail': {
    //                         'value': k
    //                     }
    //                 };
    //                 _0x460ec6[wanzikun_0x14fd('0x28')](eventJ);
    //             }
    //         } else {
    //             wx['showModal']({
    //                 'title': '提示',
    //                 'content': _0xe91d75['BNaTt'],
    //                 'showCancel': ![]
    //             });
    //             return;
    //         }
    //     }
    //     if (this[wanzikun_0x14fd('0x1f')]['selCity'] == _0xe91d75[wanzikun_0x14fd('0x21')]) {
    //         if (_0xe91d75[wanzikun_0x14fd('0x1c')](_0xe91d75[wanzikun_0x14fd('0x29')], _0xe91d75[wanzikun_0x14fd('0x2a')])) {
    //             if (res[wanzikun_0x14fd('0x2b')]) {
    //                 wx[wanzikun_0x14fd('0x2c')]({
    //                     'url': _0xe91d75[wanzikun_0x14fd('0x2d')](_0xe91d75['QGhKy'](wanzikun_0x5c9afa[wanzikun_0x14fd('0x2e')][wanzikun_0x14fd('0x2f')], wanzikun_0x5c9afa[wanzikun_0x14fd('0x2e')][wanzikun_0x14fd('0x30')]), _0xe91d75['bHIzD']),
    //                     'data': {
    //                         'token': wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')]['token'],
    //                         'id': id
    //                     },
    //                     'success': _0x1924d2 => {
    //                         wx[wanzikun_0x14fd('0x2')]({});
    //                     }
    //                 });
    //             } else if (res[wanzikun_0x14fd('0x32')]) {
    //                 console['log'](_0xe91d75[wanzikun_0x14fd('0x33')]);
    //             }
    //         } else {
    //             wx[wanzikun_0x14fd('0x19')]({
    //                 'title': '提示',
    //                 'content': _0xe91d75[wanzikun_0x14fd('0x34')],
    //                 'showCancel': ![]
    //             });
    //             return;
    //         }
    //     }
    //     var _0x55ba3e = wanzikun_0x21a7f4['cityData'][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x35')]][wanzikun_0x14fd('0x25')][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x36')]]['id'];
    //     var _0x79ef22;
    //     if (_0xe91d75[wanzikun_0x14fd('0x37')](this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x38')], _0xe91d75[wanzikun_0x14fd('0x21')]) || !this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x38')]) {
    //         _0x79ef22 = '';
    //     } else {
    //         _0x79ef22 = wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x35')]][wanzikun_0x14fd('0x25')][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x36')]][wanzikun_0x14fd('0x26')][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x39')]]['id'];
    //     } if (_0xe91d75[wanzikun_0x14fd('0x3a')](_0x4f74ee, '')) {
    //         wx[wanzikun_0x14fd('0x19')]({
    //             'title': '提示',
    //             'content': _0xe91d75[wanzikun_0x14fd('0x3b')],
    //             'showCancel': ![]
    //         });
    //         return;
    //     }
    //     if (_0xe91d75[wanzikun_0x14fd('0x3c')](_0x515e75, '')) {
    //         if (_0xe91d75[wanzikun_0x14fd('0x3d')](wanzikun_0x14fd('0x3e'), _0xe91d75[wanzikun_0x14fd('0x3f')])) {
    //             wx['showModal']({
    //                 'title': '提示',
    //                 'content': _0xe91d75[wanzikun_0x14fd('0x40')],
    //                 'showCancel': ![]
    //             });
    //             return;
    //         } else {
    //             this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x36')] = j;
    //             for (var _0x362d4b = 0x0; _0x362d4b < wanzikun_0x21a7f4['cityData'][i][wanzikun_0x14fd('0x25')][j][wanzikun_0x14fd('0x26')][wanzikun_0x14fd('0x41')]; _0x362d4b++) {
    //                 if (_0xe91d75[wanzikun_0x14fd('0x42')](data[wanzikun_0x14fd('0x43')], wanzikun_0x21a7f4['cityData'][i][wanzikun_0x14fd('0x25')][j][wanzikun_0x14fd('0x26')][_0x362d4b]['id'])) {
    //                     this['data'][wanzikun_0x14fd('0x39')] = _0x362d4b;
    //                 }
    //             }
    //         }
    //     }
    //     var _0x478b85 = _0xe91d75[wanzikun_0x14fd('0x44')];
    //     var _0x21049d = _0x460ec6[wanzikun_0x14fd('0x1f')]['id'];
    //     if (_0x21049d) {
    //         _0x478b85 = _0xe91d75[wanzikun_0x14fd('0x45')];
    //     } else {
    //         _0x21049d = 0x0;
    //     }
    //     wx[wanzikun_0x14fd('0x2c')]({
    //         'url': _0xe91d75[wanzikun_0x14fd('0x46')](_0xe91d75[wanzikun_0x14fd('0x47')](wanzikun_0x5c9afa['globalData'][wanzikun_0x14fd('0x48')], _0xe91d75[wanzikun_0x14fd('0x49')]), _0x478b85),
    //         'data': {
    //             'token': wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')][wanzikun_0x14fd('0x4a')],
    //             'id': _0x21049d,
    //             'provinceId': wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x35')]]['id'],
    //             'cityId': _0x55ba3e,
    //             'districtId': _0x79ef22,
    //             'linkMan': _0x54ab6a,
    //             'address': _0x4f74ee,
    //             'mobile': _0x5a9e1d,
    //             'code': _0x515e75,
    //             'isDefault': wanzikun_0x14fd('0x4b')
    //         },
    //         'success': function(_0x2cad87) {
    //             if (_0xe91d75[wanzikun_0x14fd('0x4c')](_0x2cad87[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x17')], 0x0)) {
    //                 wx['hideLoading']();
    //                 wx[wanzikun_0x14fd('0x19')]({
    //                     'title': '失败',
    //                     'content': _0x2cad87[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x4d')],
    //                     'showCancel': ![]
    //                 });
    //                 return;
    //             }
    //             wx[wanzikun_0x14fd('0x2')]({});
    //         }
    //     });
    // },
    'initCityData': function (_0x5e7dd4, _0x166db6) {
        var _0x5940e9 = {
            'CPmKG': function (_0x4ed374, _0x35e2a2) {
                return _0x4ed374 == _0x35e2a2;
            },
            'BKhXE': function (_0x41ab7b, _0x542276) {
                return _0x41ab7b + _0x542276;
            },
            'PAnVF': wanzikun_0x14fd('0x4e'),
            'bpSeT': function (_0x54bfe7, _0x323a21) {
                return _0x54bfe7 == _0x323a21;
            },
            'CiGat': function (_0xc9db9b, _0xa2c030) {
                return _0xc9db9b == _0xa2c030;
            },
            'qZNVp': function (_0x421b39, _0x469501) {
                return _0x421b39 === _0x469501;
            },
            'PjFUX': wanzikun_0x14fd('0x4f'),
            'UjRUx': wanzikun_0x14fd('0x50'),
            'LsnrJ': function (_0x39e21f, _0x48fb91) {
                return _0x39e21f < _0x48fb91;
            },
            'NYLRc': wanzikun_0x14fd('0x51'),
            'xBmtJ': wanzikun_0x14fd('0x52'),
            'CdkuK': function (_0x12c5bd, _0x3ece83) {
                return _0x12c5bd !== _0x3ece83;
            },
            'vlQvj': 'sTwFL',
            'pCqbU': wanzikun_0x14fd('0x53')
        };
        if (_0x5940e9[wanzikun_0x14fd('0x54')](_0x5e7dd4, 0x1)) {
            var _0x564022 = [];
            for (var _0x27efcb = 0x0; _0x27efcb < wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][wanzikun_0x14fd('0x41')]; _0x27efcb++) {
                if (_0x5940e9[wanzikun_0x14fd('0x55')](_0x5940e9[wanzikun_0x14fd('0x56')], _0x5940e9[wanzikun_0x14fd('0x57')])) {
                    wx[wanzikun_0x14fd('0x58')]();
                    wx['request']({
                        'url': _0x5940e9[wanzikun_0x14fd('0x59')](wanzikun_0x5c9afa['globalData'][wanzikun_0x14fd('0x48')], _0x5940e9[wanzikun_0x14fd('0x5a')]),
                        'data': {
                            'token': wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')][wanzikun_0x14fd('0x4a')],
                            'id': id
                        },
                        'success': function (_0x4e1d03) {
                            wx['hideLoading']();
                            if (_0x5940e9[wanzikun_0x14fd('0x5b')](_0x4e1d03[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x17')], 0x0)) {
                                that[wanzikun_0x14fd('0x5c')]({
                                    'id': id,
                                    'addressData': _0x4e1d03[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')],
                                    'selProvince': _0x4e1d03[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x5d')],
                                    'selCity': _0x4e1d03['data'][wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x5e')],
                                    'selDistrict': _0x4e1d03[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x5f')]
                                });
                                that[wanzikun_0x14fd('0x60')](_0x4e1d03[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')]);
                                return;
                            } else {
                                wx[wanzikun_0x14fd('0x19')]({
                                    'title': '提示',
                                    'content': wanzikun_0x14fd('0x61'),
                                    'showCancel': ![]
                                });
                            }
                        }
                    });
                } else {
                    _0x564022[wanzikun_0x14fd('0x62')](wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][_0x27efcb][wanzikun_0x14fd('0x27')]);
                }
            }
            this[wanzikun_0x14fd('0x5c')]({
                'provinces': _0x564022
            });
        } else if (_0x5e7dd4 == 0x2) {
            var _0x564022 = [];
            var _0x60e07b = _0x166db6[wanzikun_0x14fd('0x25')];
            for (var _0x27efcb = 0x0; _0x5940e9[wanzikun_0x14fd('0x63')](_0x27efcb, _0x60e07b[wanzikun_0x14fd('0x41')]); _0x27efcb++) {
                _0x564022[wanzikun_0x14fd('0x62')](_0x60e07b[_0x27efcb][wanzikun_0x14fd('0x27')]);
            }
            this[wanzikun_0x14fd('0x5c')]({
                'citys': _0x564022
            });
        } else if (_0x5e7dd4 == 0x3) {
            if (_0x5940e9[wanzikun_0x14fd('0x64')] === _0x5940e9['xBmtJ']) {
                if (_0x5940e9[wanzikun_0x14fd('0x65')](data['cityId'], wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][_0x27efcb][wanzikun_0x14fd('0x25')][j]['id'])) {
                    this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x36')] = j;
                    for (var _0x786f3a = 0x0; _0x786f3a < wanzikun_0x21a7f4['cityData'][_0x27efcb][wanzikun_0x14fd('0x25')][j][wanzikun_0x14fd('0x26')][wanzikun_0x14fd('0x41')]; _0x786f3a++) {
                        if (_0x5940e9[wanzikun_0x14fd('0x54')](data['districtId'], wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][_0x27efcb]['cityList'][j][wanzikun_0x14fd('0x26')][_0x786f3a]['id'])) {
                            this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x39')] = _0x786f3a;
                        }
                    }
                }
            } else {
                var _0x564022 = [];
                var _0x60e07b = _0x166db6[wanzikun_0x14fd('0x26')];
                for (var _0x27efcb = 0x0; _0x5940e9['LsnrJ'](_0x27efcb, _0x60e07b[wanzikun_0x14fd('0x41')]); _0x27efcb++) {
                    if (_0x5940e9['CdkuK'](_0x5940e9['vlQvj'], _0x5940e9[wanzikun_0x14fd('0x66')])) {
                        _0x564022[wanzikun_0x14fd('0x62')](_0x60e07b[_0x27efcb]['name']);
                    } else {
                        that[wanzikun_0x14fd('0x5c')]({
                            'id': id,
                            'addressData': res[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')],
                            'selProvince': res[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x5d')],
                            'selCity': res[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')]['cityStr'],
                            'selDistrict': res[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x5f')]
                        });
                        that[wanzikun_0x14fd('0x60')](res[wanzikun_0x14fd('0x1f')]['data']);
                        return;
                    }
                }
                this[wanzikun_0x14fd('0x5c')]({
                    'districts': _0x564022
                });
            }
        }
    },
    'bindPickerProvinceChange': function (_0x5ba5c5) {
        var _0x1891a9 = {
            'gdKOx': wanzikun_0x14fd('0x1')
        };
        var _0x3c2cdf = wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][_0x5ba5c5[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')]];
        this[wanzikun_0x14fd('0x5c')]({
            'selProvince': _0x3c2cdf[wanzikun_0x14fd('0x27')],
            'selProvinceIndex': _0x5ba5c5[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')],
            'selCity': wanzikun_0x14fd('0x1'),
            'selCityIndex': 0x0,
            'selDistrict': _0x1891a9[wanzikun_0x14fd('0x67')],
            'selDistrictIndex': 0x0
        });
        this[wanzikun_0x14fd('0x68')](0x2, _0x3c2cdf);
    },
    'bindPickerCityChange': function (_0x4f17d3) {
        var _0xc4771d = {
            'iNkpp': wanzikun_0x14fd('0x1')
        };
        var _0x403361 = wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][this[wanzikun_0x14fd('0x1f')]['selProvinceIndex']][wanzikun_0x14fd('0x25')][_0x4f17d3[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')]];
        this[wanzikun_0x14fd('0x5c')]({
            'selCity': _0x403361['name'],
            'selCityIndex': _0x4f17d3[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')],
            'selDistrict': _0xc4771d[wanzikun_0x14fd('0x69')],
            'selDistrictIndex': 0x0
        });
        this[wanzikun_0x14fd('0x68')](0x3, _0x403361);
    },
    'bindPickerChange': function (_0x308525) {
        var _0x547ea4 = wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x35')]][wanzikun_0x14fd('0x25')][this[wanzikun_0x14fd('0x1f')]['selCityIndex']][wanzikun_0x14fd('0x26')][_0x308525['detail'][wanzikun_0x14fd('0x14')]];
        if (_0x547ea4 && _0x547ea4[wanzikun_0x14fd('0x27')] && _0x308525[wanzikun_0x14fd('0x13')]['value']) {
            this[wanzikun_0x14fd('0x5c')]({
                'selDistrict': _0x547ea4[wanzikun_0x14fd('0x27')],
                'selDistrictIndex': _0x308525['detail']['value']
            });
        }
    },
    // 'onLoad': function(_0x3277ed) {
    //     var _0x504a24 = {
    //         'edFzE': '无法获取快递地址数据',
    //         'ewVzf': function(_0x1dd622, _0x7a428b) {
    //             return _0x1dd622 == _0x7a428b;
    //         },
    //         'YwfNM': function(_0x7c8cd3, _0x326e6e) {
    //             return _0x7c8cd3 === _0x326e6e;
    //         },
    //         'EmlXo': wanzikun_0x14fd('0x6a'),
    //         'NjSeh': function(_0x3fa82e, _0x7da7d4) {
    //             return _0x3fa82e + _0x7da7d4;
    //         },
    //         'PKjRa': wanzikun_0x14fd('0x4e')
    //     };
    //     var _0x42ceda = this;
    //     if (_0x504a24[wanzikun_0x14fd('0x6b')](wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')][wanzikun_0x14fd('0x3')], !![])) {
    //         _0x42ceda[wanzikun_0x14fd('0x5c')]({
    //             'iphone': wanzikun_0x14fd('0x3')
    //         });
    //     }
    //     this[wanzikun_0x14fd('0x68')](0x1);
    //     var _0x3f1b90 = _0x3277ed['id'];
    //     if (_0x3f1b90) {
    //         wx[wanzikun_0x14fd('0x58')]();
    //         wx[wanzikun_0x14fd('0x2c')]({
    //             'url': _0x504a24['NjSeh'](wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')][wanzikun_0x14fd('0x48')], _0x504a24[wanzikun_0x14fd('0x6c')]),
    //             'data': {
    //                 'token': wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')][wanzikun_0x14fd('0x4a')],
    //                 'id': _0x3f1b90
    //             },
    //             'success': function(_0x410810) {
    //                 wx[wanzikun_0x14fd('0x6d')]();
    //                 if (_0x504a24[wanzikun_0x14fd('0x6b')](_0x410810[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x17')], 0x0)) {
    //                     if (_0x504a24[wanzikun_0x14fd('0x6e')](_0x504a24[wanzikun_0x14fd('0x6f')], _0x504a24[wanzikun_0x14fd('0x6f')])) {
    //                         _0x42ceda[wanzikun_0x14fd('0x5c')]({
    //                             'id': _0x3f1b90,
    //                             'addressData': _0x410810[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')],
    //                             'selProvince': _0x410810[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')]['provinceStr'],
    //                             'selCity': _0x410810[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x5e')],
    //                             'selDistrict': _0x410810[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x5f')]
    //                         });
    //                         _0x42ceda[wanzikun_0x14fd('0x60')](_0x410810[wanzikun_0x14fd('0x1f')]['data']);
    //                         return;
    //                     } else {
    //                         wx['showModal']({
    //                             'title': '提示',
    //                             'content': _0x504a24[wanzikun_0x14fd('0x70')],
    //                             'showCancel': ![]
    //                         });
    //                     }
    //                 } else {
    //                     wx[wanzikun_0x14fd('0x19')]({
    //                         'title': '提示',
    //                         'content': _0x504a24['edFzE'],
    //                         'showCancel': ![]
    //                     });
    //                 }
    //             }
    //         });
    //     }
    // },
    'setDBSaveAddressId': function (_0x1a067f) {
        var _0x101132 = {
            'EOrvO': function (_0x14009d, _0x3c0198) {
                return _0x14009d + _0x3c0198;
            },
            'lUKeJ': function (_0x20382d, _0x350a2d) {
                return _0x20382d < _0x350a2d;
            },
            'ChNQS': function (_0x341026, _0x561d46) {
                return _0x341026 == _0x561d46;
            },
            'iDofu': function (_0xc7f12e, _0x4b5768) {
                return _0xc7f12e < _0x4b5768;
            },
            'UTEDE': function (_0x54c466, _0x2d35a4) {
                return _0x54c466 === _0x2d35a4;
            },
            'CLezp': 'XzCxP',
            'nHhWV': wanzikun_0x14fd('0x71'),
            'ZjhRF': function (_0x3c2aef, _0x356336) {
                return _0x3c2aef == _0x356336;
            },
            'OPxay': function (_0x3c4d7b, _0x4dbc5b) {
                return _0x3c4d7b === _0x4dbc5b;
            },
            'MDkWQ': wanzikun_0x14fd('0x72'),
            'nzxRr': wanzikun_0x14fd('0x73')
        };
        var _0x29d858 = 0x0;
        for (var _0x4808b7 = 0x0; _0x101132[wanzikun_0x14fd('0x74')](_0x4808b7, wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][wanzikun_0x14fd('0x41')]); _0x4808b7++) {
            if (_0x101132[wanzikun_0x14fd('0x75')](_0x1a067f[wanzikun_0x14fd('0x76')], wanzikun_0x21a7f4['cityData'][_0x4808b7]['id'])) {
                this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x35')] = _0x4808b7;
                for (var _0x4e7125 = 0x0; _0x101132[wanzikun_0x14fd('0x77')](_0x4e7125, wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][_0x4808b7]['cityList']['length']); _0x4e7125++) {
                    if (_0x101132['UTEDE'](_0x101132[wanzikun_0x14fd('0x78')], _0x101132[wanzikun_0x14fd('0x79')])) {
                        var _0x3612d1 = wanzikun_0x21a7f4['cityData'][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x35')]][wanzikun_0x14fd('0x25')][this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x36')]][wanzikun_0x14fd('0x26')][event[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')]];
                        if (_0x3612d1 && _0x3612d1['name'] && event[wanzikun_0x14fd('0x13')][wanzikun_0x14fd('0x14')]) {
                            this[wanzikun_0x14fd('0x5c')]({
                                'selDistrict': _0x3612d1[wanzikun_0x14fd('0x27')],
                                'selDistrictIndex': event[wanzikun_0x14fd('0x13')]['value']
                            });
                        }
                    } else {
                        if (_0x101132[wanzikun_0x14fd('0x7a')](_0x1a067f[wanzikun_0x14fd('0x7b')], wanzikun_0x21a7f4['cityData'][_0x4808b7]['cityList'][_0x4e7125]['id'])) {
                            this['data'][wanzikun_0x14fd('0x36')] = _0x4e7125;
                            for (var _0x3db1a2 = 0x0; _0x3db1a2 < wanzikun_0x21a7f4['cityData'][_0x4808b7]['cityList'][_0x4e7125][wanzikun_0x14fd('0x26')]['length']; _0x3db1a2++) {
                                if (_0x101132[wanzikun_0x14fd('0x7c')](_0x101132[wanzikun_0x14fd('0x7d')], _0x101132[wanzikun_0x14fd('0x7e')])) {
                                    wx[wanzikun_0x14fd('0x2c')]({
                                        'url': _0x101132[wanzikun_0x14fd('0x7f')](wanzikun_0x5c9afa[wanzikun_0x14fd('0x2e')][wanzikun_0x14fd('0x2f')], wanzikun_0x5c9afa[wanzikun_0x14fd('0x2e')][wanzikun_0x14fd('0x30')]) + wanzikun_0x14fd('0x4'),
                                        'data': {
                                            'token': wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')][wanzikun_0x14fd('0x4a')],
                                            'id': id
                                        },
                                        'success': _0x44aeb9 => {
                                            wx[wanzikun_0x14fd('0x2')]({});
                                        }
                                    });
                                } else {
                                    if (_0x1a067f[wanzikun_0x14fd('0x43')] == wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][_0x4808b7][wanzikun_0x14fd('0x25')][_0x4e7125][wanzikun_0x14fd('0x26')][_0x3db1a2]['id']) {
                                        this[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x39')] = _0x3db1a2;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    'selectCity': function () {
    },
    // 'deleteAddress': function (_0x5ead98) {
    //     var _0x14a063 = {
    //         'NebXK': function (_0x3a019e, _0x3cbb52) {
    //             return _0x3a019e !== _0x3cbb52;
    //         },
    //         'NGSKf': wanzikun_0x14fd('0x80'),
    //         'FhxmR': wanzikun_0x14fd('0x81'),
    //         'pEBhz': function (_0xe14a1, _0x520eee) {
    //             return _0xe14a1 + _0x520eee;
    //         },
    //         'TWXsn': function (_0x29cf64, _0x255fa2) {
    //             return _0x29cf64 + _0x255fa2;
    //         },
    //         'jJeml': wanzikun_0x14fd('0x82'),
    //         'KSHVK': wanzikun_0x14fd('0x83')
    //     };
    //     var _0x395b9d = this;
    //     var _0x21f0c2 = _0x5ead98[wanzikun_0x14fd('0x84')][wanzikun_0x14fd('0x85')]['id'];
    //     wx[wanzikun_0x14fd('0x19')]({
    //         'title': '提示',
    //         'content': _0x14a063[wanzikun_0x14fd('0x86')],
    //         'success': function (_0x488180) {
    //             if (_0x488180['confirm']) {
    //                 if (_0x14a063[wanzikun_0x14fd('0x87')](_0x14a063[wanzikun_0x14fd('0x88')], _0x14a063[wanzikun_0x14fd('0x89')])) {
    //                     wx[wanzikun_0x14fd('0x2c')]({
    //                         'url': _0x14a063[wanzikun_0x14fd('0x8a')](_0x14a063[wanzikun_0x14fd('0x8b')](wanzikun_0x5c9afa[wanzikun_0x14fd('0x2e')][wanzikun_0x14fd('0x2f')], wanzikun_0x5c9afa['siteInfo'][wanzikun_0x14fd('0x30')]), wanzikun_0x14fd('0x4')),
    //                         'data': {
    //                             'token': wanzikun_0x5c9afa[wanzikun_0x14fd('0x31')][wanzikun_0x14fd('0x4a')],
    //                             'id': _0x21f0c2
    //                         },
    //                         'success': _0x488180 => {
    //                             wx[wanzikun_0x14fd('0x2')]({});
    //                         }
    //                     });
    //                 } else {
    //                     wx['navigateBack']({});
    //                 }
    //             } else if (_0x488180['cancel']) {
    //                 console[wanzikun_0x14fd('0x8c')](_0x14a063[wanzikun_0x14fd('0x8d')]);
    //             }
    //         }
    //     });
    // },
    'readFromWx': function () {
        var _0x46ee98 = {
            'SIRHq': wanzikun_0x14fd('0xa'),
            'rfGDW': function (_0x1ad837, _0x5357aa) {
                return _0x1ad837 === _0x5357aa;
            },
            'RSQhT': wanzikun_0x14fd('0x8e'),
            'yTdqK': function (_0x410d63, _0x13196f) {
                return _0x410d63 < _0x13196f;
            },
            'VTUFu': function (_0x5c3e5c, _0x2ed145) {
                return _0x5c3e5c == _0x2ed145;
            },
            'aSbeU': wanzikun_0x14fd('0x8f'),
            'yBfUP': function (_0x51fbdc, _0x2fe6bc) {
                return _0x51fbdc == _0x2fe6bc;
            },
            'BhdgD': wanzikun_0x14fd('0x90'),
            'espHh': wanzikun_0x14fd('0x91')
        };
        let _0x426695 = this;
        wx[wanzikun_0x14fd('0x92')]({
            'success': function (_0x2151e0) {
                if (_0x46ee98[wanzikun_0x14fd('0x93')](wanzikun_0x14fd('0x94'), _0x46ee98[wanzikun_0x14fd('0x95')])) {
                    wx[wanzikun_0x14fd('0x19')]({
                        'title': '提示',
                        'content': wanzikun_0x14fd('0xd'),
                        'showCancel': ![]
                    });
                    return;
                } else {
                    let _0x48b445 = _0x2151e0['provinceName'];
                    let _0x456317 = _0x2151e0[wanzikun_0x14fd('0x96')];
                    let _0x4029e8 = _0x2151e0[wanzikun_0x14fd('0x97')];
                    let _0x313fa1 = 0x0;
                    for (var _0x3c557f = 0x0; _0x46ee98['yTdqK'](_0x3c557f, wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][wanzikun_0x14fd('0x41')]); _0x3c557f++) {
                        if (_0x46ee98[wanzikun_0x14fd('0x98')](_0x48b445, wanzikun_0x21a7f4['cityData'][_0x3c557f][wanzikun_0x14fd('0x27')])) {
                            if (_0x46ee98[wanzikun_0x14fd('0x93')](_0x46ee98[wanzikun_0x14fd('0x99')], _0x46ee98['aSbeU'])) {
                                let _0x3833c2 = {
                                    'detail': {
                                        'value': _0x3c557f
                                    }
                                };
                                _0x426695[wanzikun_0x14fd('0x9a')](_0x3833c2);
                                _0x426695[wanzikun_0x14fd('0x1f')][wanzikun_0x14fd('0x35')] = _0x3c557f;
                                for (var _0x410416 = 0x0; _0x46ee98[wanzikun_0x14fd('0x9b')](_0x410416, wanzikun_0x21a7f4['cityData'][_0x3c557f][wanzikun_0x14fd('0x25')][wanzikun_0x14fd('0x41')]); _0x410416++) {
                                    if (_0x456317 == wanzikun_0x21a7f4[wanzikun_0x14fd('0x24')][_0x3c557f][wanzikun_0x14fd('0x25')][_0x410416][wanzikun_0x14fd('0x27')]) {
                                        _0x3833c2 = {
                                            'detail': {
                                                'value': _0x410416
                                            }
                                        };
                                        _0x426695['bindPickerCityChange'](_0x3833c2);
                                        for (var _0x2be63e = 0x0; _0x46ee98[wanzikun_0x14fd('0x9b')](_0x2be63e, wanzikun_0x21a7f4['cityData'][_0x3c557f][wanzikun_0x14fd('0x25')][_0x410416][wanzikun_0x14fd('0x26')][wanzikun_0x14fd('0x41')]); _0x2be63e++) {
                                            if (_0x46ee98[wanzikun_0x14fd('0x9c')](_0x4029e8, wanzikun_0x21a7f4['cityData'][_0x3c557f]['cityList'][_0x410416]['districtList'][_0x2be63e][wanzikun_0x14fd('0x27')])) {
                                                if (_0x46ee98[wanzikun_0x14fd('0x9d')] === _0x46ee98[wanzikun_0x14fd('0x9e')]) {
                                                    wx['showModal']({
                                                        'title': '提示',
                                                        'content': _0x46ee98['SIRHq'],
                                                        'showCancel': ![]
                                                    });
                                                    return;
                                                } else {
                                                    _0x3833c2 = {
                                                        'detail': {
                                                            'value': _0x2be63e
                                                        }
                                                    };
                                                    _0x426695['bindPickerChange'](_0x3833c2);
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                wx[wanzikun_0x14fd('0x2')]({});
                            }
                        }
                    }
                    _0x426695[wanzikun_0x14fd('0x5c')]({
                        'wxaddress': _0x2151e0
                    });
                }
            }
        });
    }
});
