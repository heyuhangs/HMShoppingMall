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
    'statusType': ['个人业绩', '代理商业绩'],
    currentType: 0,
    page: 1
  },
  onLoad: function () {
    const self = this;
    const status = this.data.currentType+1;
    wx.showLoading({});
    // wx.request({
    //   url: app.globalData.url + `userImpl/childDLUser?USER_ID=${status}`,
    //   method: "get",
    //   success: function (res) {
    //     if(res.statusCode == 200){
    //       self.setData({
    //         list: res.data.list
    //       })
    //     }
    //     wx.hideLoading({});
    //   }
    // })
  },
  getDateTime: function (e) {
    debugger
  },
  'statusTap': function (e) {
    // this.setData({
    //   currentType: e.currentTarget.dataset.index
    // })
    this.onLoad();
  }
});
