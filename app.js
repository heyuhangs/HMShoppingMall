var wanzikun_0x2167 = ['JjIrU', 'model', 'search', 'FlWeJ', 'globalData', 'request', '/config/get-value', 'HFtaJ', 'sIXJM', 'data', 'code', 'setStorageSync', 'value', 'YueNG', 'goodReputation', 'FSIDi', 'usinfo', 'LYpaS', 'showModal', 'rSlQm', 'token', 'uid', 'score', 'PMScn', 'recharge_amount_min', 'qcILz', 'ZBxLq', 'yYAKu', 'iphone', 'QxiXe', 'nYBGT', 'PjyGJ', 'result', 'rRebO', 'kanjiaList', 'config.js', 'FlLRR', '/user/wxapp/login', 'kulaC', 'TXPNT', 'kAWga', 'DhLLP', '/user/check-token', 'QKSyR', 'login', 'GGaqu', 'QbOyw', 'mzWAt', 'QXOPe', 'CDdtB', 'eUPIW', 'IyPWO', 'hideLoading', 'fjAeq', 'url', 'siteInfo', 'subDomain', 'shareProfile', 'POST', 'application/x-www-form-urlencoded', 'order', 'xURwd', '/template-msg/put', 'NOwZL', 'ObPNe', 'immediately', 'mbxFU', 'gmJwR', 'jDZKI', 'iPhone X', '无法登录，请重试', 'hggsX', 'tVvAn', 'FVlQo', 'pUTsz', 'mallName', '/score/send/rule', '/shop/goods/kanjia/list', 'urls', 'getSystemInfo'];
(function(_0x15f3d8, _0x3a1dbf) {
  var _0x143f07 = function(_0x465e2f) {
    while (--_0x465e2f) {
      _0x15f3d8['push'](_0x15f3d8['shift']());
    }
  };
  _0x143f07(++_0x3a1dbf);
}(wanzikun_0x2167, 0x135));
var wanzikun_0x1f1d = function(_0x1f64a4, _0x59d287) {
  _0x1f64a4 = _0x1f64a4 - 0x0;
  var _0x53a4cd = wanzikun_0x2167[_0x1f64a4];
  return _0x53a4cd;
};
App({
  onLaunch: function() {
    var _0x4b3d7f = this;
    _0x4b3d7f[wanzikun_0x1f1d('0x9')]();
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })
    // 下载新版本
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 重启应用
            updateManager.applyUpdate()
          }
        }
      })
    })
    // 新版本下载失败
    updateManager.onUpdateFailed(function (res) {
      console.log(res)
      wx.showToast({
        title: '更新失败',
        content: '请删除小程序，并重新进入',
        success(res) {
          if (res.confirm) {
            // 重启应用
            // updateManager.applyUpdate()
          }
        }
      })
    })
  },
  // pay(newObject) {
  //
  // },
  relUserInfo() {
    const userKey = wx.getStorageSync('userKey');
    if (userKey) {
      wx.request({
        url: app.globalData.url + `userImpl/userInfo?USER_ID=${userKey}`,
        method: "get",
        success: function(res) {
          if (res.statusCode == 200) {
            app.globalData.userInfo = res.data.user;
            app.globalData.wxUser = {
              WX_IMG: res.data.user.WX_IMG,
              WX_NICKNAME: res.data.user.WX_NICKNAME,
              openid: res.data.user.OPEN_ID
            }
          }
        }
      });
    } else {
      this.getUserInfo().then(res => {

      });
    }
  },
  //微信充值生成随机数
  randomWord: function(randomFlag, min, max) {
    var str = "",
      range = min,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
      var pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
    return str
  },
  getUserInfoLogin(u) {
    const self = this;
    return new Promise(function(resolve, reject) {
      wx.request({
        url: self.globalData.url + `userImpl/userInfo?USER_ID=${u}`,
        method: "get",
        success: function(res) {
          if (res.data.result != 'error') {
            self.globalData.userInfo = res.data.user;
            self.globalData.wxUser = {
              WX_IMG: res.data.user.WX_IMG,
              WX_NICKNAME: res.data.user.WX_NICKNAME,
              openid: res.data.user.OPEN_ID
            }
            resolve(res.data.user);
          } else {
            wx.showToast({
              title: '获取失败无法登陆!',
              icon: 'none',
              duration: 2000
            })
            reject(false)
            return false
          }
        }
      })
    })
  },
  accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length
    } catch (e) {
    }
    try {
      m += s2.split(".")[1].length
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  },
  getUserInfo() {
    const self = this;
    return new Promise(function(resolve, reject) {
      wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
              url: self.globalData.url + `userImpl/getWxInfo?code=${res.code}`,
              method: "get",
              success: function(res) {
                console.log('通过code获取用户信息')
                console.log('返回值', res)
                if (res.statusCode == 200) {
                  if (res.data.wxInfo.openid && res.data.wxInfo.openid != undefined && res.data.wxInfo.openid != null) {
                    self.globalData.wxUser = res.data.wxInfo;
                    self.globalData.userInfo = res.data.userInfo;
                    console.log('得到openid', res.data.wxInfo)
                    if (res.data.userInfo.USER_ID) {
                      console.log('通过code，获取到了用户信息')
                      wx.setStorage({
                        key: 'userKey',
                        data: res.data.userInfo.USER_ID,
                        success: function(res) {
                        }
                      });
                    }
                    resolve(res.data);
                  } else {
                    wx.showToast({
                      title: 'openId获取失败无法登陆，请联系管理员!',
                      icon: 'none',
                      duration: 2000
                    })
                    reject('后台取OpenID失败，无法登陆，请联系管理员!')
                  }
                } else {
                  wx.showToast({
                    title: '注册失败，请联系管理员!',
                    icon: 'none',
                    duration: 2000
                  })
                  reject('注册失败，无法登陆，请联系管理员!')
                }
              },
              fail: function() {
                wx.showToast({
                  title: 'openId获取失败无法登陆，请联系管理员!',
                  icon: 'none',
                  duration: 2000
                })
                reject('后台取OpenID失败，无法登陆，请联系管理员!')
              }
            })
          } else {
            wx.showToast({
              title: '后台取OpenID失败，无法登陆，请联系管理员!',
              icon: 'none',
              duration: 2000
            })
            reject('后台取OpenID失败，无法登陆，请联系管理员!')
          }
        },
        fail: function() {
          wx.showToast({
            title: '后台取OpenID失败，无法登陆，请联系管理员!',
            icon: 'none',
            duration: 2000
          })
          reject('后台取OpenID失败，无法登陆，请联系管理员!')
        }
      })
    })
  },
  'siteInfo': require(wanzikun_0x1f1d('0x2e')),
  'urls': function() {
    var _0x1c129e = {
      'fjAeq': function(_0x35f3a9, _0x3332d3) {
        return _0x35f3a9 + _0x3332d3;
      }
    };
    var _0x4f0fe5 = this;
    _0x4f0fe5[wanzikun_0x1f1d('0xf')][wanzikun_0x1f1d('0x9')] = _0x1c129e[wanzikun_0x1f1d('0x40')](_0x4f0fe5['siteInfo'][wanzikun_0x1f1d('0x41')], _0x4f0fe5[wanzikun_0x1f1d('0x42')][wanzikun_0x1f1d('0x43')]);
    _0x4f0fe5['globalData']['share'] = _0x4f0fe5[wanzikun_0x1f1d('0x42')][wanzikun_0x1f1d('0x44')];
  },
  isLoginUser: function() {
    const self = this
    return new Promise(function(resolve, reject) {
      let status = true
      if (self.globalData.userInfo.USER_ID) {
        resolve(status)
      } else {
        status = false
        resolve(status)
      }
    })
  },
  globalData: {
    // wxUser: {
    //     errcode: null,
    //     openid: 'oxPYE5vJxfvIuMqV3ptTXElfY1oE',
    //     WX_NICKNAME: '._.',
    //     WX_IMG: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLH2ZL2ZbyudBGXxVgR82bSf7I260ibeZ7ZQA9AGbagxYSEmX4PxicP2wfCDz3862ZANlR89TTVP2zQ/132',
    // },
    wxUser: '',
    // userInfo: {
    //     PHONE: '15524444266',
    //     PASSWORD: '',
    //     NAME: '',
    //     BANKCODE: '123123',
    //     BANKNAME: '123123',
    //     PAR_ID: '123123123',
    //     USER_ID: '39',
    //     JJB: '1000',
    //     GWB: '300'
    // },
    payId: '',
    userInfo: '',
    Urls: {},
    // imgUrl: 'http://f22t435363.imwork.net/',
    // url: 'http://localhost:8888/HM_war_exploded/',
    // url: 'http://f22t435363.imwork.net/HM/'
    imgUrl: 'https://www.hmgm999.com/',
    url: 'https://www.hmgm999.com/'
  }
});
