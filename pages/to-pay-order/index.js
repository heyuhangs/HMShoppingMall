var wanzikun_0x1f39 = ['token', 'pHxDO', 'DuluR', 'HoVLx', 'JPJlw', 'detail', 'value', 'remark', 'goodsJsonStr', 'VRCBq', 'isNeedLogistics', 'mtltD', 'curAddressData', 'hideLoading', 'showModal', 'wCrNW', 'xZGTd', 'goodsList', 'pingtuanId', 'IWuZt', 'hmIJp', 'wYAMJ', 'kjid', 'EmzqE', 'provinceId', 'cityId', 'districtId', 'address', 'linkMan', 'mobile', 'expireMinutes', 'closeorder', 'curCoupon', 'yzFAX', 'couponId', 'moneyHreshold', 'allGoodsAndYunPrice', 'WpLpB', 'zBhKF', 'calculate', 'hEPDy', 'request', 'ZJqLs', 'POST', 'OswCz', 'zLKvR', 'buyNow', 'removeStorageSync', 'amountLogistics', 'amountTotle', 'lrMPP', 'eooEI', 'vqDTX', 'rvAUh', 'dKcla', 'keyword1', 'dateAdd', 'keyword2', 'amountReal', 'orderNumber', 'keyword4', '订单已关闭', 'lyNQu', 'keyword5', 'neYEY', 'siteInfo', 'closeorderkey', 'formId', 'YUeLG', 'stringify', 'keyword3', 'sendTempleMsg', 'deliveryorderkey', 'kvrPQ', 'cgJkd', 'XOAZp', '&id=', 'CqNzW', '/user/shipping-address/default', 'ISpAo', 'urls', 'XjvpK', 'HrxPI', 'qKWRE', 'KSKZn', 'auXhw', 'McbFv', 'fwqOU', 'JJVhy', 'inviter_id_', 'pOJFg', '{"goodsId":', 'logistics', 'erqLY', 'price', 'number', 'wUUDQ', 'Wpamy', 'GfZeH', 'TkJRF', 'fIlvB', 'goodsId', 'cbvyD', 'NhYZc', 'Yquhu', 'coupons', 'money', 'IVzOB', 'pguat', 'propertyChildIds', '","logisticsType":0, "inviter_id":', 'navigateTo', '/pages/address-add/index', '/pages/select-address/index', 'fLSOI', 'true', 'vHUID', 'Ygxpg', 'RmmKn', 'gFdza', 'AKYEt', 'zXigj', 'aRCgi', 'FduiU', 'log', 'SUNWW', 'brHOS', 'XKils', 'gGXJY', 'UCEUb', 'JXxNY', 'OnPyF', 'nmaXN', 'buykjInfo', 'buyPT', 'PingTuanInfo', 'eLYsg', 'data', 'orderType', 'cvbwQ', 'length', 'getStorageSync', 'shopList', 'tnPHl', 'vJfto', 'qImMx', 'fBvSk', 'caqMP', 'SBEbz', 'chnWu', 'globalData', 'iphone', 'setData', 'gIaiW', 'buyNowInfo', 'filter', 'HYEjd', 'DxopD', 'active', 'initShippingAddress', 'wEpuq', 'gWjHm', 'UZkSu', 'GHYXP', 'rxjpv', 'pdgSP', 'code', 'processYunfei', 'shopCarInfo', 'pecUB', 'ogNUh', 'YePCA', '#173177', '您可以重新下单，请在30分钟内完成支付', 'pages/index/index', 'pages/order-details/index?id=', '/pages/to-pay-order/success/index?order=', '&money=', '请先设置您的收货地址！', 'mgFdH', 'FqCOQ', 'Glgty', 'application/x-www-form-urlencoded', 'showLoading'];
(function (_0x31085c, _0x3a3c14) {
    var _0x314bcf = function (_0x377943) {
        while (--_0x377943) {
            _0x31085c['push'](_0x31085c['shift']());
        }
    };
    _0x314bcf(++_0x3a3c14);
}(wanzikun_0x1f39, 0x13b));
var wanzikun_0x1432 = function (_0x172c3c, _0x540d37) {
    _0x172c3c = _0x172c3c - 0x0;
    var _0x649845 = wanzikun_0x1f39[_0x172c3c];
    return _0x649845;
};
var wanzikun_0x346709 = getApp();
const app = getApp();
Page({
    'data': {
        zffs: '在线支付',
        isRunOnShow: false,
        goodsList: [],
        'isNeedLogistics': 0x0,
        'allGoodsPrice': 0x0,
        'yunPrice': 0x0,
        'allGoodsAndYunPrice': 0x0,
        'goodsJsonStr': '',
        'orderType': '',
        'hasNoCoupons': !![],
        'coupons': [],
        'youhuijine': 0x0,
        'curCoupon': null,
        addressList: {},
        isShping: false,
        url: '',
        isOneGood: false
    },
    onLoad: function (options) {
        const self = this;
        wx.showLoading();
        self.setData({
            url: app.globalData.imgUrl
        })
        if (options.selects) {
            wx.request({
                url: app.globalData.url + `/userImpl/getAddressList?ADDRESS_ID=${options.myAddress}&USER_ID=${app.globalData.userInfo.USER_ID}`,
                method: "GET",
                success: function (res) {
                    if (res.data.addList.length && res.statusCode == 200) {
                        self.setData({
                            addressList: res.data.addList[0],
                            isAddress: true
                        })
                    }
                    wx.hideLoading();
                }
            })
        } else {
            wx.request({
                url: app.globalData.url + `/userImpl/getAddressList?USER_ID=${app.globalData.userInfo.USER_ID}`,
                method: "GET",
                success: function (res) {
                    if (res.data.addList.length && res.statusCode == 200) {
                        self.setData({
                            addressList: res.data.addList[0],
                            isAddress: true
                        })
                    }
                    wx.hideLoading();
                }
            })
        }
        if (options.goodId) {
            self.setData({
                optionsGoodsId: options.goodId,
                isOneGood: true,
                num: options.num
            })
        }
        if (options.optionsGoodsId) {
            self.setData({
                optionsGoodsId: options.optionsGoodsId,
                num: options.num
            })
        }
        //如果是购买会员卡，则不查询商品
        if (options.payVip) {
            const goodsList = [{
                goodsDetail: {
                    goodId: options.payVip,
                    USER_ID: options.payVip,
                    NAME: options.payVip == 9999 ? '爱心天使' : '光明天使',
                    PRICE: options.payVip == 9999 ? 999 : 199
                },
                buyNumber: 1
            }]
            self.setData({
                goodsList: goodsList,
                isPayVip: true,
                countPay: options.payVip == 9999 ? 999 : 199
            })
        } else {
            wx.showLoading({});
            this.data.isRunOnShow = true;
            if (this.data.optionsGoodsId) {
                wx.request({
                    url: app.globalData.url + `/goodImpl/goodInfo?GOOD_ID=${this.data.optionsGoodsId}&USER_ID=${app.globalData.userInfo.USER_ID}`,
                    method: "GET",
                    success: function (res) {
                        if (res.statusCode == 200) {
                            const goodsInfo = {
                                goodsDetail: res.data.goodInfo,
                                buyNumber: options.num,
                                active: true
                            };
                            // goodsInfo.goodsDetail =
                            const good = [];
                            good.push(goodsInfo)
                            self.setData({
                                goodsList: good,
                                isShping: false
                            });
                        }
                        self.countPay();
                    }
                });
            } else {
                const shopCarList = wx.getStorageSync('shopCar');
                const goodsList = [];
                for (const item of shopCarList) {
                    if (item.active) {
                        goodsList.push(item);
                    }
                }
                this.setData({
                    goodsList: goodsList,
                    isShping: true
                })
                self.countPay();
            }
        }
    },
    countPay: function () {
        let countPay = 0;
        for (const item of this.data.goodsList) {
            if (item.active) {
                countPay += item.buyNumber * item.goodsDetail.PRICE
            }
        }
        this.setData({
            countPay: countPay
        });
    },
    onShow: function () {
        const self = this;
        if (!this.data.isRunOnShow) {
            this.onLoad();
        }
        // const myAddress = wx.getStorageSync('myAddress');
        // if (myAddress) {
        //     self.setData({
        //         addressList: myAddress,
        //         isAddress: true
        //     })
        //     wx.hideLoading();
        // } else {
        // }
    },
    handleFruitChange: function ({ detail = {} }) {
        this.setData({
            zffs: detail.value
        })
    },
    createOrder: function () {
        let status = 1;
        const self = this;
        // if (this.data.countPay < 198) {
        //     wx.showToast({
        //         title: '首次最低消费198!',
        //         icon: 'none',
        //         duration: 2000
        //     })
        //     return false;
        // }
        if (!this.data.addressList || !this.data.addressList.USER_ID) {
            wx.showToast({
                title: '请选择收货人地址!',
                icon: 'none',
                duration: 2000
            })
            return false;
        }
        //如果是购买vip
        if (self.data.isPayVip) {
            self.createVipOrder();
            return false;
        }
        wx.showLoading({});
        switch (this.data.zffs) {
            case "在线支付":
                break;
            case "奖金支付":
                status = 2;
                break;
        }
        const orderGoodsList = [];
        for (const item of this.data.goodsList) {
            if (item.active) {
                orderGoodsList.push({
                    goodId: item.goodsDetail.USER_ID,
                    num: item.buyNumber,
                    price: item.goodsDetail.PRICE
                })
            }
        }
        const obj = {
            userId: app.globalData.userInfo.USER_ID,
            addressId: this.data.addressList.USER_ID,
            payType: status,
            orderGoodList: orderGoodsList
        }
        wx.request({
            url: app.globalData.url + `orderImpl/beforePayCheck`,
            method: "POST",
            data: obj,
            success: function (res) {
                if (res.statusCode == 200) {
                    self.clearShopCar();
                    debugger
                    wx.navigateTo({
                        url: `/pages/to-pay-order/success/index?orderCode=${res.data.order_code}&addressId=${obj.addressId}&count=${self.data.countPay}&status=${status}`
                    })
                }
                wx.hideLoading();
            }
        })
    },
    createVipOrder: function () {
        const self = this;
        let status = 1;
        wx.showLoading({});
        switch (this.data.zffs) {
            case "在线支付":
                break;
            case "奖金积分支付":
                status = 2;
                break;
        }
        const orderGoodsList = [];
        for (const item of this.data.goodsList) {
            orderGoodsList.push({
                goodId: item.goodsDetail.USER_ID,
                num: item.buyNumber
                // price: item.goodsDetail.PRICE
            })
        }
        const obj = {
            userId: app.globalData.userInfo.USER_ID,
            // addressId: this.data.addressList.USER_ID,
            payType: status,
            vipSaveOrderList: orderGoodsList
        }
        wx.request({
            url: app.globalData.url + `orderImpl/beforePayCheckVIP`,
            method: "POST",
            data: obj,
            success: function (res) {
                if (res.statusCode == 200) {
                    self.clearShopCar();
                    wx.navigateTo({
                        url: `/pages/to-pay-order/success/index?orderCode=${res.data.order_code}&count=${self.data.countPay}&status=${res.data.pay_type}&isPayVip=${self.data.isPayVip}`
                    })
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
    clearShopCar: function () {
        // const shopCarList = wx.getStorageSync('shopCar');
        // for (let i = 0; i < shopCarList.length; i++) {
        //     if (shopCarList[i].USER_ID == this.data.goodsList[i].USER_ID) {
        //         shopCarList.splice(i, 1);
        //     }
        // }
        wx.removeStorage({
            key: 'shopCar',
            success: function (res) {
            }
        })
    },
    'getDistrictId': function (_0x2390a1, _0x32b368) {
        var _0x3e0882 = {
            'pdgSP': function (_0x3782c3, _0x57a4f8) {
                return _0x3782c3 == _0x57a4f8;
            },
            'GHYXP': function (_0x129e91, _0x4326f8) {
                return _0x129e91 === _0x4326f8;
            },
            'rxjpv': wanzikun_0x1432('0x1f')
        };
        if (!_0x2390a1) {
            if (_0x3e0882[wanzikun_0x1432('0x20')](wanzikun_0x1432('0x1f'), _0x3e0882[wanzikun_0x1432('0x21')])) {
                return '';
            } else {
                if (_0x3e0882[wanzikun_0x1432('0x22')](res[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x23')], 0x0)) {
                    that[wanzikun_0x1432('0x15')]({
                        'curAddressData': res[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x6')]
                    });
                } else {
                    that['setData']({
                        'curAddressData': null
                    });
                }
                that[wanzikun_0x1432('0x24')]();
            }
        }
        if (!_0x32b368) {
            return '';
        }
        return _0x32b368;
    },
    'initShippingAddress': function () {
        var _0x1f475f = {
            'HrxPI': function (_0x21ac8c, _0x55e7af) {
                return _0x21ac8c == _0x55e7af;
            },
            'ISpAo': function (_0x3aeeda, _0x5bda9f) {
                return _0x3aeeda + _0x5bda9f;
            },
            'qKWRE': function (_0x52200b, _0x591ab8) {
                return _0x52200b !== _0x591ab8;
            },
            'KSKZn': wanzikun_0x1432('0x82'),
            'McbFv': function (_0x54e5e5, _0x1c36a3) {
                return _0x54e5e5 == _0x1c36a3;
            },
            'fwqOU': function (_0x4f742f, _0x381959) {
                return _0x4f742f === _0x381959;
            },
            'JJVhy': 'rMMtA',
            'XjvpK': wanzikun_0x1432('0x83')
        };
        var _0x2a6051 = this;
        wx[wanzikun_0x1432('0x5e')]({
            'url': _0x1f475f[wanzikun_0x1432('0x84')](wanzikun_0x346709[wanzikun_0x1432('0x13')][wanzikun_0x1432('0x85')], _0x1f475f[wanzikun_0x1432('0x86')]),
            'data': {
                'token': wanzikun_0x346709[wanzikun_0x1432('0x13')][wanzikun_0x1432('0x35')]
            },
            'success': _0x5dec27 => {
                var _0x5cc03d = {
                    'auXhw': function (_0x2def7d, _0x5b7b04) {
                        return _0x1f475f[wanzikun_0x1432('0x87')](_0x2def7d, _0x5b7b04);
                    },
                    'DQvZP': function (_0x572b9d, _0x454503) {
                        return _0x1f475f[wanzikun_0x1432('0x84')](_0x572b9d, _0x454503);
                    }
                };
                if (_0x1f475f[wanzikun_0x1432('0x88')](wanzikun_0x1432('0x82'), _0x1f475f[wanzikun_0x1432('0x89')])) {
                    var _0xc05dd = this;
                    wx[wanzikun_0x1432('0x5e')]({
                        'url': _0x5cc03d['DQvZP'](wanzikun_0x346709[wanzikun_0x1432('0x13')][wanzikun_0x1432('0x85')], wanzikun_0x1432('0x83')),
                        'data': {
                            'token': wanzikun_0x346709[wanzikun_0x1432('0x13')][wanzikun_0x1432('0x35')]
                        },
                        'success': _0x1450b6 => {
                            if (_0x5cc03d[wanzikun_0x1432('0x8a')](_0x1450b6[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x23')], 0x0)) {
                                _0xc05dd[wanzikun_0x1432('0x15')]({
                                    'curAddressData': _0x1450b6[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x6')]
                                });
                            } else {
                                _0xc05dd[wanzikun_0x1432('0x15')]({
                                    'curAddressData': null
                                });
                            }
                            _0xc05dd[wanzikun_0x1432('0x24')]();
                        }
                    });
                } else {
                    if (_0x1f475f[wanzikun_0x1432('0x8b')](_0x5dec27[wanzikun_0x1432('0x6')]['code'], 0x0)) {
                        if (_0x1f475f[wanzikun_0x1432('0x8c')](_0x1f475f[wanzikun_0x1432('0x8d')], _0x1f475f[wanzikun_0x1432('0x8d')])) {
                            _0x2a6051[wanzikun_0x1432('0x15')]({
                                'curAddressData': _0x5dec27['data'][wanzikun_0x1432('0x6')]
                            });
                        } else {
                            isNeedLogistics = 0x1;
                        }
                    } else {
                        _0x2a6051['setData']({
                            'curAddressData': null
                        });
                    }
                    _0x2a6051[wanzikun_0x1432('0x24')]();
                }
            }
        });
    },
    'processYunfei': function () {
        var _0x4ed991 = {
            'TkJRF': function (_0x3fe91d, _0x3d277c) {
                return _0x3fe91d + _0x3d277c;
            },
            'NhYZc': function (_0x148843, _0x1f7189) {
                return _0x148843 - _0x1f7189;
            },
            'Yquhu': function (_0x5bd791, _0x4b9948) {
                return _0x5bd791 == _0x4b9948;
            },
            'ovdnh': function (_0x4b0b4d, _0x386450) {
                return _0x4b0b4d < _0x386450;
            },
            'erqLY': function (_0x48de50, _0x141405) {
                return _0x48de50 * _0x141405;
            },
            'wUUDQ': function (_0x467003, _0x55a662) {
                return _0x467003 === _0x55a662;
            },
            'GfZeH': 'Wpamy',
            'fIlvB': wanzikun_0x1432('0x8e'),
            'cbvyD': wanzikun_0x1432('0x8f'),
            'IVzOB': function (_0x18ac98, _0x5b77f3) {
                return _0x18ac98 + _0x5b77f3;
            },
            'pguat': wanzikun_0x1432('0x90')
        };
        var _0x475c6f = this;
        var _0x223723 = this[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x46')];
        var _0x30d2ba = '[';
        var _0xe364a2 = 0x0;
        var _0x2da39d = 0x0;
        for (let _0x3f4f0f = 0x0; _0x4ed991['ovdnh'](_0x3f4f0f, _0x223723['length']); _0x3f4f0f++) {
            let _0x1168c4 = _0x223723[_0x3f4f0f];
            if (_0x1168c4[wanzikun_0x1432('0x91')]) {
                _0xe364a2 = 0x1;
            }
            _0x2da39d += _0x4ed991[wanzikun_0x1432('0x92')](_0x1168c4[wanzikun_0x1432('0x93')], _0x1168c4[wanzikun_0x1432('0x94')]);
            var _0x25f6a1 = '';
            if (_0x3f4f0f > 0x0) {
                if (_0x4ed991[wanzikun_0x1432('0x95')](wanzikun_0x1432('0x96'), _0x4ed991[wanzikun_0x1432('0x97')])) {
                    _0x25f6a1 = ',';
                } else {
                    allGoodsAndYunPrice = _0x4ed991[wanzikun_0x1432('0x98')](res[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x6')][wanzikun_0x1432('0x65')], res[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x6')][wanzikun_0x1432('0x66')]);
                }
            }
            let _0x19da42 = 0x0;
            let _0x15afaf = wx['getStorageSync'](_0x4ed991[wanzikun_0x1432('0x98')](_0x4ed991[wanzikun_0x1432('0x99')], _0x1168c4[wanzikun_0x1432('0x9a')]));
            if (_0x15afaf) {
                if (_0x4ed991['cbvyD'] !== _0x4ed991[wanzikun_0x1432('0x9b')]) {
                    const _0x344cd7 = _0x4ed991[wanzikun_0x1432('0x9c')](e[wanzikun_0x1432('0x3a')][wanzikun_0x1432('0x3b')][0x0], 0x1);
                    if (_0x4ed991[wanzikun_0x1432('0x9d')](_0x344cd7, -0x1)) {
                        this[wanzikun_0x1432('0x15')]({
                            'youhuijine': 0x0,
                            'curCoupon': null
                        });
                        return;
                    }
                    this[wanzikun_0x1432('0x15')]({
                        'youhuijine': this[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x9e')][_0x344cd7][wanzikun_0x1432('0x9f')],
                        'curCoupon': this['data']['coupons'][_0x344cd7]
                    });
                } else {
                    _0x19da42 = _0x15afaf;
                }
            }
            _0x25f6a1 += _0x4ed991[wanzikun_0x1432('0x98')](_0x4ed991[wanzikun_0x1432('0xa0')](_0x4ed991[wanzikun_0x1432('0xa0')](_0x4ed991['IVzOB'](_0x4ed991[wanzikun_0x1432('0xa1')] + _0x1168c4[wanzikun_0x1432('0x9a')], ',"number":') + _0x1168c4['number'] + ',"propertyChildIds":"', _0x1168c4[wanzikun_0x1432('0xa2')]), wanzikun_0x1432('0xa3')), _0x19da42) + '}';
            _0x30d2ba += _0x25f6a1;
        }
        _0x30d2ba += ']';
        _0x475c6f[wanzikun_0x1432('0x15')]({
            'isNeedLogistics': _0xe364a2,
            'goodsJsonStr': _0x30d2ba
        });
        _0x475c6f['createOrder']();
    },
    'addAddress': function () {
        if (this.data.isOneGood) {
            wx.navigateTo({
                url: '/pages/address-add/index?isAadd=1&optionsGoodsId=' + this.data.optionsGoodsId + '&num=' + this.data.num
            })
        } else {
            wx.navigateTo({
                url: '/pages/address-add/index?isAadd=1'
            })
        }
    },
    'selectAddress': function () {
        this.data.isRunOnShow = false;
        var _0x4d546e = {
            'fLSOI': wanzikun_0x1432('0xa6')
        };
        if (this.data.isOneGood) {
            wx.navigateTo({
                url: _0x4d546e[wanzikun_0x1432('0xa7')] + '?selects=1&optionsGoodsId=' + this.data.optionsGoodsId + '&num=' + this.data.num
            })
        } else {
            wx.navigateTo({
                url: _0x4d546e[wanzikun_0x1432('0xa7')] + '?selects=1'
            })
        }
    },
    'getMyCoupons': function () {
        var _0x4746c7 = {
            'FduiU': wanzikun_0x1432('0xa8'),
            'gFdza': function (_0x3d7b4c, _0x484763) {
                return _0x3d7b4c <= _0x484763;
                ``
            },
            'CGVCR': function (_0x54e965, _0x410662) {
                return _0x54e965 == _0x410662;
            },
            'AKYEt': function (_0x44bdb9, _0x13166e) {
                return _0x44bdb9 === _0x13166e;
            },
            'aRCgi': wanzikun_0x1432('0xa9'),
            'brHOS': function (_0x2f619d, _0x54cc3e) {
                return _0x2f619d > _0x54cc3e;
            },
            'Ygxpg': function (_0xe771fa, _0x143f44) {
                return _0xe771fa + _0x143f44;
            },
            'RmmKn': '/discounts/my'
        };
        var _0x21fc39 = this;
        wx[wanzikun_0x1432('0x5e')]({
            'url': _0x4746c7[wanzikun_0x1432('0xaa')](wanzikun_0x346709[wanzikun_0x1432('0x13')][wanzikun_0x1432('0x85')], _0x4746c7[wanzikun_0x1432('0xab')]),
            'data': {
                'token': wanzikun_0x346709[wanzikun_0x1432('0x13')][wanzikun_0x1432('0x35')],
                'status': 0x0
            },
            'success': function (_0x2b8bf6) {
                var _0x1a7598 = {
                    'SUNWW': function (_0x357021, _0x503191) {
                        return _0x4746c7[wanzikun_0x1432('0xac')](_0x357021, _0x503191);
                    }
                };
                if (_0x4746c7['CGVCR'](_0x2b8bf6[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x23')], 0x0)) {
                    if (_0x4746c7[wanzikun_0x1432('0xad')](wanzikun_0x1432('0xae'), _0x4746c7[wanzikun_0x1432('0xaf')])) {
                        postData['calculate'] = _0x4746c7[wanzikun_0x1432('0xb0')];
                    } else {
                        console[wanzikun_0x1432('0xb1')](_0x2b8bf6);
                        console['log']('aa', _0x2b8bf6[wanzikun_0x1432('0x6')]['data'][wanzikun_0x1432('0x18')]);
                        var _0x6a9f45 = _0x2b8bf6[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x6')][wanzikun_0x1432('0x18')](_0x49fb82 => {
                            return _0x1a7598[wanzikun_0x1432('0xb2')](_0x49fb82[wanzikun_0x1432('0x58')], _0x21fc39['data'][wanzikun_0x1432('0x59')]);
                        });
                        if (_0x4746c7[wanzikun_0x1432('0xb3')](_0x6a9f45['length'], 0x0)) {
                            _0x21fc39[wanzikun_0x1432('0x15')]({
                                'hasNoCoupons': ![],
                                'coupons': _0x6a9f45
                            });
                        }
                    }
                }
            }
        });
    },
    'bindChangeCoupon': function (_0xeacd45) {
        var _0x4b80da = {
            'JXxNY': wanzikun_0x1432('0x17'),
            'gGXJY': function (_0x55abd7, _0x12a9e8) {
                return _0x55abd7 == _0x12a9e8;
            },
            'UCEUb': wanzikun_0x1432('0xb4')
        };
        const _0x2aceac = _0xeacd45['detail'][wanzikun_0x1432('0x3b')][0x0] - 0x1;
        if (_0x4b80da[wanzikun_0x1432('0xb5')](_0x2aceac, -0x1)) {
            if (wanzikun_0x1432('0xb4') === _0x4b80da[wanzikun_0x1432('0xb6')]) {
                this[wanzikun_0x1432('0x15')]({
                    'youhuijine': 0x0,
                    'curCoupon': null
                });
                return;
            } else {
                var _0xb094c6 = wx[wanzikun_0x1432('0xa')](_0x4b80da[wanzikun_0x1432('0xb7')]);
                if (_0xb094c6 && _0xb094c6['shopList']) {
                    shopList = _0xb094c6[wanzikun_0x1432('0xb')];
                }
            }
        }
        this[wanzikun_0x1432('0x15')]({
            'youhuijine': this[wanzikun_0x1432('0x6')][wanzikun_0x1432('0x9e')][_0x2aceac]['money'],
            'curCoupon': this['data'][wanzikun_0x1432('0x9e')][_0x2aceac]
        });
    }
});
