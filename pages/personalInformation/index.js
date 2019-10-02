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
    data: {
        parUser: null,
        user: null,
        valiData: false
    },
    onLoad: function(e) {
        this.getUserData(e.userId)
        // if (e.BANKCODE) {
        //
        // }
        // if (e.PHONE) {
        //
        // }
    },
    getUserData: function(id) {
        const self = this;
        wx.showLoading({
            mask: true
        })
        wx.request({
            url: app.globalData.url + `userImpl/userInfo?USER_ID=${id}`,
            method: "get",
            success: function(res) {
                if (res.statusCode == 200) {
                    app.globalData.userInfo = res.data.user;
                    self.setData({
                        user: res.data.user
                    })
                    if (res.data.user.RIGHTS == 99) {
                        self.setData({
                            valiData: true
                        })
                    }
                }
                self.getParData();
                wx.hideLoading({});
            }
        });
    },
    goMy() {
        wx.reLaunch({
            url: `/pages/my/index`
        })
    },
    getParData: function() {
        const self = this;
        wx.request({
            url: app.globalData.url + `userImpl/userInfo?USER_ID=${self.data.user.PAR_ID}`,
            method: "get",
            success: function(res) {
                if (res.statusCode == 200) {
                    self.setData({
                        parUser: res.data.user
                    })
                }
            }
        });
    },
    inputVal: function(e) {
        let title = ''
        let status = 0
        let val = ''
        switch (e.currentTarget.dataset.id) {
            case '0':
                title = '注册姓名';
                val = this.data.user.NAME || '';
                break;
            case '1':
                title = '银行名称';
                val = this.data.user.BANKNAME;
                break;
            case '2':
                title = '开户行地址';
                val = this.data.user.BANK_ADD;
                break;
            case '3':
                title = '开户人姓名';
                val = this.data.user.BANK_USERNAME;
                break;
            case '4':
                title = '银行卡号';
                val = this.data.user.BANKCODE;
                break;
            case '5':
                title = '支付宝账号';
                val = this.data.user.ZFB_CODE;
                break;
            case '6':
                title = '电话';
                val = this.data.user.PHONE;
                break;
        }
        status = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/inputInfo/index?title=${title}&status=${status}&val=${val}`
        })
    }
});
