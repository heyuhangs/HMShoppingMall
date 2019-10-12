var wanzikun_0x39de = ['WjNYi', 'gbyVf', 'EkwWm', 'JefPz', 'dwINl', 'code', 'second', 'data', 'home', 'WjCSa', 'ZWXUt', 'zZRlu', 'switchTab', 'TKDhz', 'setData', '../index/index', 'FHlvL', '/pages/goods-details/index?id=', 'kleSE', 'currentTarget', 'dataset', 'PWKvl', 'Fdavb', 'mBHgL', 'redirectTo', 'fOMiM', 'sGCTK', 'fmxsh', 'JKOFV', 'mallName', 'start', 'Vxzia', 'request', 'globalData'];
(function(_0x2144b9, _0x3f25e4) {
  var _0x3aace5 = function(_0x56ce83) {
    while (--_0x56ce83) {
      _0x2144b9['push'](_0x2144b9['shift']());
    }
  };
  _0x3aace5(++_0x3f25e4);
}(wanzikun_0x39de, 0x116));
var wanzikun_0x3fe9 = function(_0x414709, _0x3df5b1) {
  _0x414709 = _0x414709 - 0x0;
  var _0x2fafed = wanzikun_0x39de[_0x414709];
  return _0x2fafed;
};
var wanzikun_0x3891c7 = getApp();

const app = getApp();

function wanzikun_0x4a9cec(_0x16ae00) {
  var _0x2751c4 = {
    'TKDhz': '../index/index',
    'WTdgq': function(_0x459152, _0xad196) {
      return _0x459152(_0xad196);
    },
    'WjCSa': function(_0x55ea7e, _0x14083f) {
      return _0x55ea7e == _0x14083f;
    },
    'ZWXUt': function(_0x551a41, _0x34bd35) {
      return _0x551a41 === _0x34bd35;
    },
    'zZRlu': 'FNdzm'
  };
  var _0x13ba76 = _0x16ae00['data'][wanzikun_0x3fe9('0x0')];
  var _0x41f282 = _0x16ae00[wanzikun_0x3fe9('0x1')][wanzikun_0x3fe9('0x2')];
  if (_0x41f282 == 0x0) {
    if (_0x2751c4[wanzikun_0x3fe9('0x3')](_0x13ba76, 0x0)) {
      // if (!app.globalData.userInfo || app.globalData.userInfo == '') {
      //     wx.redirectTo({
      //         url: '/pages/jurisDiction/jurisDiction'
      //     })
      //     return false;
      // }
      if (_0x2751c4[wanzikun_0x3fe9('0x4')](_0x2751c4[wanzikun_0x3fe9('0x5')], _0x2751c4['zZRlu'])) {
        wx[wanzikun_0x3fe9('0x6')]({
          'url': _0x2751c4['TKDhz']
        });
      } else {
        if (_0x13ba76 == 0x0) {
          wx[wanzikun_0x3fe9('0x6')]({
            'url': _0x2751c4[wanzikun_0x3fe9('0x7')]
          });
        }
      }
    }
  }
  var _0x8e69bb = setTimeout(function() {
    _0x16ae00[wanzikun_0x3fe9('0x8')]({
      'second': _0x13ba76 - 0x1
    });
    _0x2751c4['WTdgq'](wanzikun_0x4a9cec, _0x16ae00);
  }, 0x3e8);
}

Page({
  'data': {
    'second': 0x6,
    'home': 0x0,
    sales: [{
      "businessId": 30164,
      "dateAdd": "2018-03-12 17:48:47",
      "dateUpdate": "2018-05-19 11:24:33",
      "id": 5581,
      "linkUrl": "",
      "paixu": 0,
      "picUrl": "https://cdn.it120.cc/apifactory/2018/05/19/4e72a11f1b291f4cacd72262ca6e96f0.png",
      "remark": "",
      "status": 0,
      "statusStr": "显示",
      "title": "清欢严选",
      "type": "start",
      "userId": 797
    }]
  },
  'home': function() {
    if (!this.data.isGo) {
      return false;
    }
    this[wanzikun_0x3fe9('0x8')]({
      'home': 0x1
    });
    // if (!app.globalData.userInfo || app.globalData.userInfo == '') {
    //     wx.redirectTo({
    //         url: '/pages/jurisDiction/jurisDiction'
    //     })
    //     return false;
    // } else {
    //     wx['switchTab']({
    //         'url': wanzikun_0x3fe9('0x9')
    //     });
    // }
    wx['switchTab']({
      'url': wanzikun_0x3fe9('0x9')
    });

  },
  onLoad: function(options) {
    const self = this;
    //获取推荐人信息
    if (options.PAR_ID) {
      wx.setStorage({
        key: 'PAR_ID',
        data: options.PAR_ID,
        success: function(res) {
        }
      });
      app.globalData.payId = options.PAR_ID;
    }
    const userKey = wx.getStorageSync('userKey');
    if (userKey) {
      wx.request({
        url: app.globalData.url + `userImpl/userInfo?USER_ID=${userKey}`,
        method: "get",
        success: function(res) {
          if (res.data.result != 'error') {
            app.globalData.userInfo = res.data.user;
            app.globalData.wxUser = {
              WX_IMG: res.data.user.WX_IMG,
              WX_NICKNAME: res.data.user.WX_NICKNAME,
              openid: res.data.user.OPEN_ID
            }
          } else {
            wx.showToast({
              title: '获取失败无法登陆!',
              icon: 'none',
              duration: 2000
            })
            return false
          }
        }, complete(res) {
          self.setData({
            isGo: true
          })
        }
      });
    } else {
      self.setData({
        isGo: true
      })
    }
    var _0x19fa02 = {
      'JefPz': function(_0x404048, _0x1a0c63) {
        return _0x404048 == _0x1a0c63;
      },
      'dwINl': 'VUGMU',
      'Vxzia': function(_0x18da9a, _0x269348) {
        return _0x18da9a(_0x269348);
      },
      'WjNYi': '/banner/list',
      'gbyVf': wanzikun_0x3fe9('0x17'),
      'EkwWm': wanzikun_0x3fe9('0x18')
    };
    var _0x3aff02 = this;
    _0x19fa02[wanzikun_0x3fe9('0x19')](wanzikun_0x4a9cec, _0x3aff02);
    //获取当前banner等
  }
})
;
