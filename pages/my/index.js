var wanzikun_0xed31 = ['ppZik', 'vNfYk', 'VKzBi', 'EdxtX', 'WqTtL', 'mallinfo', '/score/today-signed', 'kLZgd', 'vmNLE', 'oiVMO', 'dNClU', 'vzYHF', 'cSRdp', 'KeJBe', 'NHwwn', 'rBvrY', 'showModal', 'msg', '/score/sign', 'voYte', 'rQBwc', 'OlyWP', '重新登陆成功', 'SulBM', 'PXtEW', 'login', 'DPdAI', 'confirm', 'IoOQd', 'VPjXa', 'ZMHMd', '/pages/withdraw/index', '/pages/score/index', 'ziKEN', '/pages/my-kanjia/index', '/pages/mycoupons/index', 'wgpob', 'uwQDa', 'currentTarget', 'dataset', 'index', 'navigateTo', 'NLwEV', '/pages/order-list/index?currentType=', 'GQPmD', 'getUserApiInfo', 'getUserAmount', 'checkScoreSign', 'getInfo', 'request', 'gYdDb', 'globalData', 'urls', 'tXTBt', 'jZCPJ', 'WymxO', 'onShow', 'RpLpV', 'data', '/pages/select-address/index', 'PfNSD', 'XrARc', 'OMgVt', 'MkqLz', 'fStCN', '/order/statistics', 'shopCarInfo', 'TskIh', 'token', 'BPEDm', 'RmNKh', 'code', 'count_id_no_pay', 'setTabBarBadge', 'WmmZQ', 'removeTabBarBadge', 'setData', 'count_id_no_transfer', 'count_id_no_confirm', 'count_id_no_reputation', 'balance', 'freeze', 'score', 'getStorage', 'wBnKU', 'EXUZs', 'wHVWB', 'ZnCrY', 'nFVba', 'bYeNV', 'shopNum', 'iKOjL', 'RBtNk', 'EFFEV', 'NTKEM', 'okMYf', 'dYUXs', 'nejFP', '/user/detail', 'hKRAo', 'OhUhJ', 'zAzyc', 'dJkqn', 'XNFfV', 'SOFbw', 'XAyuv', 'ojIVr', 'rRqLA', 'fKchH', 'continuous', 'nEsyg', '/user/amount', 'IgAAe', 'QGUEd', 'Jvdhb', 'cPlQC'];
(function(_0x2bde96, _0x47cebf) {
  var _0x4a3205 = function(_0x4e29a9) {
    while (--_0x4e29a9) {
      _0x2bde96['push'](_0x2bde96['shift']());
    }
  };
  _0x4a3205(++_0x47cebf);
}(wanzikun_0xed31, 0x9a));
var wanzikun_0x42d0 = function(_0x4116aa, _0x5a522b) {
  _0x4116aa = _0x4116aa - 0x0;
  var _0x1e0951 = wanzikun_0xed31[_0x4116aa];
  return _0x1e0951;
};
const app = getApp();
const wanzikun_0x10e85e = getApp();
Page({
  'data': {
    isMemberShipStatus: true,
    'balance': 0x0,
    'freeze': 0x0,
    'score': 0x0,
    'score_sign_continuous': 0x0,
    'tabClass': ['', '', '', '', ''],
    user: {},
    salepd: {},
    isLoginUser: false
  },
  // userlogin: function() {
  //   const self = this;
  //   // if (!self.data.checked) {
  //   //   return false;
  //   // }
  //   wx.showLoading({
  //     mask: true
  //   })
  //
  //   app.getUserInfo().then(userRes => {
  //     //判断是否有用户
  //     console.log('执行注册，判断userid')
  //     if (userRes.userInfo.USER_ID) {
  //       console.log('得到userid', userRes.userInfo.USER_ID)
  //       //如果有用id查询到用户信息
  //       wx.request({
  //         url: app.globalData.url + `userImpl/userInfo?USER_ID=${userRes.userInfo.USER_ID}`,
  //         method: "get",
  //         success: function(res) {
  //           if (res.data.result != 'error') {
  //             app.globalData.userInfo = res.data.user;
  //             app.globalData.wxUser = {
  //               WX_IMG: res.data.user.WX_IMG,
  //               WX_NICKNAME: res.data.user.WX_NICKNAME,
  //               openid: res.data.user.OPEN_ID
  //             }
  //             wx.hideLoading({})
  //             self.onLoad()
  //           } else {
  //             wx.showToast({
  //               title: '获取失败无法登陆!',
  //               icon: 'none',
  //               duration: 2000
  //             })
  //             return false
  //           }
  //         }
  //       });
  //     } else {
  //     }
  //   });
  // },
  userlogin: function() {
    //看看有没有推荐人
    const self = this
    const PAR_ID = wx.getStorageSync('PAR_ID');
    //如果是新用户创建用户
    wx.getUserInfo({
      success: function(res) {
        if (res.userInfo) {
          const obj = res.userInfo
          //
          //
          //
          wx.login({
            success: function(loginRes) {
              let newObject = {
                PAR_ID: PAR_ID || '',
                code: loginRes.code,
                WX_NICKNAME: obj.nickName || '',
                WX_IMG: obj.avatarUrl || '',
              }
              if (loginRes.code) {
                wx.request({
                  url: app.globalData.url + `userImpl/getWxInfo`,
                  method: "post",
                  data: newObject,
                  success: function(userRes) {
                    if (userRes.data.result != 'error') {
                      if (userRes.data.userInfo.USER_ID) {
                        app.globalData.wxUser = userRes.data.wxInfo;
                        app.globalData.userInfo = userRes.data.userInfo;
                        wx.setStorage({
                          key: 'userKey',
                          data: userRes.data.userInfo.USER_ID,
                          success: function(res) {
                          }
                        });
                        if (userRes.data.userInfo.PHONE && userRes.data.userInfo.NAME && userRes.data.userInfo.PHONE != '' && userRes.data.userInfo.NAME != '') {
                          self.onLoad()
                        } else {
                          setTimeout(function() {
                            wx.reLaunch({
                              url: '/pages/register/register',
                            });
                          }, 500)
                        }
                      } else {
                        wx.showToast({
                          title: '注册失败，请联系管理员!',
                          icon: 'none',
                          duration: 2000
                        })
                      }
                    } else {
                      wx.showToast({
                        title: '注册失败，请联系管理员!',
                        icon: 'none',
                        duration: 2000
                      })
                    }
                  },
                  fail: function() {
                    wx.showToast({
                      title: 'openId获取失败无法登陆，请联系管理员!',
                      icon: 'none',
                      duration: 2000
                    })
                  }
                })
              } else {
                wx.showToast({
                  title: '后台取OpenID失败，无法登陆，请联系管理员!',
                  icon: 'none',
                  duration: 2000
                })
              }
            },
            fail: function() {
              wx.showToast({
                title: '后台取OpenID失败，无法登陆，请联系管理员!',
                icon: 'none',
                duration: 2000
              })
            }
          })
          //
          //
          //
        } else {
          wx.showToast({
            title: '微信信息获取失败!',
            icon: 'none',
            duration: 2000
          })
        }
      }, complete(res) {
        wx.hideLoading({})
      }
    })
  },
  isMembership: function() {
    const self = this;
    return new Promise(function(resolve, reject) {
      if (!app.globalData.userInfo.PHONE || app.globalData.userInfo.PHONE == '') {
        self.setData({
          isMemberShipStatus: false
        })
        resolve(200)
      } else {
        resolve(400)
      }
    })
  },
  confirmMemberShip: function() {
    wx.redirectTo({
      url: '/pages/register/register',
    });
  },
  onLoad: function() {
    const self = this;
    app.isLoginUser().then(res => {
      if (!res) {
        self.setData({
          isLoginUser: res
        })
      } else {
        self.setData({
          isLoginUser: true
        })
        self.isMembership().then(res => {
          if (res == 200) {
            return false;
          }
        });
        wx.request({
          url: app.globalData.url + `/userImpl/userInfo?USER_ID=${app.globalData.userInfo.USER_ID}`,
          method: "GET",
          success: function(res) {
            if (res.statusCode == 200) {
              self.setData({
                user: res.data.user
              })
            }
          }
        })
        wx.request({
          url: app.globalData.url + `userImpl/vipSale?USER_ID=${app.globalData.userInfo.USER_ID}`,
          method: "GET",
          success: function(res) {
            if (res.statusCode == 200) {
              self.setData({
                salepd: res.data.salepd
              })
            }
          }
        })
      }
    })
  },
  isMembership: function() {
    const self = this;
    return new Promise(function(resolve, reject) {
      if (app.globalData.userInfo.PHONE == '' || app.globalData.userInfo.PHONE == null) {
        self.setData({
          isMemberShipStatus: false,
          hideShopPopup: true
        })
        resolve(200)
      } else {
        resolve(400)
      }
    })
  },
  'getUserApiInfo': function() {
    var _0x83412c = {
      'zAzyc': function(_0x5d545c, _0x5264b8) {
        return _0x5d545c == _0x5264b8;
      },
      'ojIVr': function(_0x585308, _0x112621) {
        return _0x585308 + _0x112621;
      },
      'dJkqn': wanzikun_0x42d0('0x3a'),
      'XNFfV': function(_0x25bb57, _0x5f2a26) {
        return _0x25bb57 == _0x5f2a26;
      },
      'Zswnk': function(_0x312775, _0xb967a9) {
        return _0x312775 !== _0xb967a9;
      },
      'SOFbw': wanzikun_0x42d0('0x3b'),
      'XAyuv': 'LthGH',
      'hKRAo': function(_0x160727, _0x54a31e) {
        return _0x160727 + _0x54a31e;
      },
      'OhUhJ': wanzikun_0x42d0('0x3c')
    };
    var _0x6a9aae = this;
    wx[wanzikun_0x42d0('0xb')]({
      'url': _0x83412c[wanzikun_0x42d0('0x3d')](wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0xe')], _0x83412c[wanzikun_0x42d0('0x3e')]),
      'data': {
        'token': wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0x1e')]
      },
      'success': function(_0x2ebf40) {
        var _0x3584c5 = {
          'fKchH': function(_0x1a6af5, _0x114fc5) {
            return _0x83412c[wanzikun_0x42d0('0x3f')](_0x1a6af5, _0x114fc5);
          }
        };
        if (_0x83412c[wanzikun_0x42d0('0x40')] === _0x83412c[wanzikun_0x42d0('0x40')]) {
          if (_0x83412c[wanzikun_0x42d0('0x41')](_0x2ebf40[wanzikun_0x42d0('0x14')]['code'], 0x0)) {
            if (_0x83412c['Zswnk'](_0x83412c[wanzikun_0x42d0('0x42')], _0x83412c[wanzikun_0x42d0('0x43')])) {
              _0x6a9aae[wanzikun_0x42d0('0x26')]({
                'apiUserInfoMap': _0x2ebf40[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')]
              });
            } else {
              var _0x2a980f = {
                'rRqLA': function(_0x58373c, _0x15620d) {
                  return _0x83412c[wanzikun_0x42d0('0x3f')](_0x58373c, _0x15620d);
                }
              };
              var _0x21cd52 = this;
              wx[wanzikun_0x42d0('0xb')]({
                'url': _0x83412c[wanzikun_0x42d0('0x44')](wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0xe')], '/user/amount'),
                'data': {
                  'token': wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0x1e')]
                },
                'success': function(_0x2a8de0) {
                  if (_0x2a980f[wanzikun_0x42d0('0x45')](_0x2a8de0['data'][wanzikun_0x42d0('0x21')], 0x0)) {
                    _0x21cd52[wanzikun_0x42d0('0x26')]({
                      'balance': _0x2a8de0[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x2a')],
                      'freeze': _0x2a8de0[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x2b')],
                      'score': _0x2a8de0[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')]['score']
                    });
                  }
                }
              });
            }
          }
        } else {
          if (_0x3584c5[wanzikun_0x42d0('0x46')](_0x2ebf40[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x21')], 0x0)) {
            _0x6a9aae[wanzikun_0x42d0('0x26')]({
              'score_sign_continuous': _0x2ebf40[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x47')]
            });
          }
        }
      }
    });
  },
  'getUserAmount': function() {
    var _0x46f2ac = {
      'QGUEd': function(_0x446e22, _0x329246) {
        return _0x446e22 == _0x329246;
      },
      'Jvdhb': function(_0x1f4740, _0x5e1a01) {
        return _0x1f4740 > _0x5e1a01;
      },
      'cPlQC': function(_0x3703c2, _0x60c110) {
        return _0x3703c2 + _0x60c110;
      },
      'nSAcT': function(_0x22c814, _0x51aaa2) {
        return _0x22c814 !== _0x51aaa2;
      },
      'ppZik': wanzikun_0x42d0('0x48'),
      'IgAAe': wanzikun_0x42d0('0x49')
    };
    var _0x5e6a24 = this;
    wx[wanzikun_0x42d0('0xb')]({
      'url': _0x46f2ac['cPlQC'](wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0xe')], _0x46f2ac[wanzikun_0x42d0('0x4a')]),
      'data': {
        'token': wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0x1e')]
      },
      'success': function(_0x203c48) {
        var _0x23d6c1 = {
          'SaQrI': function(_0x40f326, _0x127605) {
            return _0x46f2ac[wanzikun_0x42d0('0x4b')](_0x40f326, _0x127605);
          },
          'vNfYk': function(_0x3f31af, _0x558d70) {
            return _0x46f2ac[wanzikun_0x42d0('0x4c')](_0x3f31af, _0x558d70);
          },
          'VKzBi': function(_0x312a5f, _0x57230f) {
            return _0x46f2ac[wanzikun_0x42d0('0x4d')](_0x312a5f, _0x57230f);
          },
          'EdxtX': function(_0x4490f3, _0x107cba) {
            return _0x4490f3 + _0x107cba;
          }
        };
        if (_0x46f2ac['nSAcT'](_0x46f2ac[wanzikun_0x42d0('0x4e')], _0x46f2ac[wanzikun_0x42d0('0x4e')])) {
          if (_0x23d6c1['SaQrI'](_0x203c48[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x21')], 0x0)) {
            if (_0x23d6c1[wanzikun_0x42d0('0x4f')](_0x203c48[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x22')], 0x0)) {
              wx['setTabBarBadge']({
                'index': 0x3,
                'text': _0x23d6c1[wanzikun_0x42d0('0x50')](_0x23d6c1[wanzikun_0x42d0('0x51')]('', _0x203c48[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x22')]), '')
              });
            } else {
              wx[wanzikun_0x42d0('0x25')]({
                'index': 0x3
              });
            }
            _0x5e6a24[wanzikun_0x42d0('0x26')]({
              'noplay': _0x203c48['data']['data'][wanzikun_0x42d0('0x22')],
              'notransfer': _0x203c48[wanzikun_0x42d0('0x14')]['data'][wanzikun_0x42d0('0x27')],
              'noconfirm': _0x203c48[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x28')],
              'noreputation': _0x203c48[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x29')]
            });
          }
        } else {
          if (_0x46f2ac[wanzikun_0x42d0('0x4b')](_0x203c48[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x21')], 0x0)) {
            _0x5e6a24[wanzikun_0x42d0('0x26')]({
              'balance': _0x203c48['data'][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x2a')],
              'freeze': _0x203c48['data'][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x2b')],
              'score': _0x203c48['data'][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x2c')]
            });
          }
        }
      }
    });
  },
  'getInfo': function() {
    var _0x54b776 = {
      'QUjFL': function(_0x4794e6, _0x183edc) {
        return _0x4794e6 == _0x183edc;
      },
      'WqTtL': '/config/get-value'
    };
    var _0x51fba0 = this;
    wx[wanzikun_0x42d0('0xb')]({
      'url': wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0xe')] + _0x54b776[wanzikun_0x42d0('0x52')],
      'data': {
        'key': wanzikun_0x42d0('0x53')
      },
      'success': function(_0x4690c3) {
        if (_0x54b776['QUjFL'](_0x4690c3[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x21')], 0x0)) {
          _0x51fba0[wanzikun_0x42d0('0x26')]({
            'getInfo': _0x4690c3['data']['data']['value']
          });
        }
      }
    });
  },
  'checkScoreSign': function() {
    var _0x2fe160 = {
      'dNClU': function(_0x820be7, _0x3ae88c) {
        return _0x820be7 > _0x3ae88c;
      },
      'vzYHF': function(_0x58ef19, _0x4fb233) {
        return _0x58ef19 + _0x4fb233;
      },
      'vmNLE': function(_0x3469ef, _0x381909) {
        return _0x3469ef !== _0x381909;
      },
      'oiVMO': 'AsVlp',
      'cSRdp': function(_0x3c8c25, _0x3fec93) {
        return _0x3c8c25 == _0x3fec93;
      },
      'KeJBe': function(_0x99b958, _0x1b640b) {
        return _0x99b958 === _0x1b640b;
      },
      'NHwwn': 'SzCOk',
      'OhKAW': function(_0xef72ab, _0x2db62b) {
        return _0xef72ab + _0x2db62b;
      },
      'kLZgd': wanzikun_0x42d0('0x54')
    };
    var _0x58bdde = this;
    wx[wanzikun_0x42d0('0xb')]({
      'url': _0x2fe160['OhKAW'](wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0xe')], _0x2fe160[wanzikun_0x42d0('0x55')]),
      'data': {
        'token': wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0x1e')]
      },
      'success': function(_0x2edc63) {
        var _0x4945fe = {
          'rBvrY': function(_0x4da568, _0x476e73) {
            return _0x4da568 == _0x476e73;
          }
        };
        if (_0x2fe160[wanzikun_0x42d0('0x56')](_0x2fe160[wanzikun_0x42d0('0x57')], _0x2fe160[wanzikun_0x42d0('0x57')])) {
          if (_0x2fe160[wanzikun_0x42d0('0x58')](_0x2edc63[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x22')], 0x0)) {
            wx[wanzikun_0x42d0('0x23')]({
              'index': 0x3,
              'text': _0x2fe160[wanzikun_0x42d0('0x59')](_0x2fe160['vzYHF']('', _0x2edc63[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x22')]), '')
            });
          } else {
            wx[wanzikun_0x42d0('0x25')]({
              'index': 0x3
            });
          }
          _0x58bdde[wanzikun_0x42d0('0x26')]({
            'noplay': _0x2edc63[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x22')],
            'notransfer': _0x2edc63[wanzikun_0x42d0('0x14')]['data'][wanzikun_0x42d0('0x27')],
            'noconfirm': _0x2edc63['data'][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x28')],
            'noreputation': _0x2edc63[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x29')]
          });
        } else {
          if (_0x2fe160[wanzikun_0x42d0('0x5a')](_0x2edc63[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x21')], 0x0)) {
            if (_0x2fe160[wanzikun_0x42d0('0x5b')](_0x2fe160[wanzikun_0x42d0('0x5c')], 'SzCOk')) {
              _0x58bdde[wanzikun_0x42d0('0x26')]({
                'score_sign_continuous': _0x2edc63['data']['data'][wanzikun_0x42d0('0x47')]
              });
            } else {
              if (_0x4945fe[wanzikun_0x42d0('0x5d')](_0x2edc63['data']['code'], 0x0)) {
                _0x58bdde[wanzikun_0x42d0('0x8')]();
                _0x58bdde[wanzikun_0x42d0('0x9')]();
              } else {
                wx[wanzikun_0x42d0('0x5e')]({
                  'title': '错误',
                  'content': _0x2edc63[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x5f')],
                  'showCancel': ![]
                });
              }
            }
          }
        }
      }
    });
  },
  'scoresign': function() {
    var _0x1e1ea4 = {
      'rQBwc': function(_0x120b09, _0xd09809) {
        return _0x120b09 == _0xd09809;
      },
      'BJFFJ': function(_0x3e6e5e, _0x8bdd75) {
        return _0x3e6e5e + _0x8bdd75;
      },
      'voYte': wanzikun_0x42d0('0x60')
    };
    var _0x5b4e86 = this;
    wx['request']({
      'url': _0x1e1ea4['BJFFJ'](wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0xe')], _0x1e1ea4[wanzikun_0x42d0('0x61')]),
      'data': {
        'token': wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0x1e')]
      },
      'success': function(_0x3eeba8) {
        if (_0x1e1ea4[wanzikun_0x42d0('0x62')](_0x3eeba8[wanzikun_0x42d0('0x14')]['code'], 0x0)) {
          _0x5b4e86['getUserAmount']();
          _0x5b4e86['checkScoreSign']();
        } else {
          wx[wanzikun_0x42d0('0x5e')]({
            'title': '错误',
            'content': _0x3eeba8[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x5f')],
            'showCancel': ![]
          });
        }
      }
    });
  },
  'relogin': function() {
    var _0x2b4e0d = {
      'SulBM': wanzikun_0x42d0('0x63'),
      'PXtEW': function(_0x32894e, _0xff04f) {
        return _0x32894e === _0xff04f;
      },
      'dWoAn': wanzikun_0x42d0('0x64'),
      'RntvR': 'scope.userInfo'
    };
    var _0x18ec2e = this;
    wx['authorize']({
      'scope': _0x2b4e0d['RntvR'],
      'success'() {
        var _0x5559d = {
          'DPdAI': _0x2b4e0d[wanzikun_0x42d0('0x65')],
          'IoOQd': function(_0x3c31c7, _0xee8bb1) {
            return _0x2b4e0d[wanzikun_0x42d0('0x66')](_0x3c31c7, _0xee8bb1);
          }
        };
        wanzikun_0x10e85e['globalData'][wanzikun_0x42d0('0x1e')] = null;
        wanzikun_0x10e85e[wanzikun_0x42d0('0x67')]();
        wx[wanzikun_0x42d0('0x5e')]({
          'title': '提示',
          'content': _0x2b4e0d['dWoAn'],
          'showCancel': ![],
          'success': function(_0x7f994d) {
            var _0x190825 = {
              'VPjXa': wanzikun_0x42d0('0x64')
            };
            if (_0x5559d[wanzikun_0x42d0('0x68')] === 'OlyWP') {
              if (_0x7f994d[wanzikun_0x42d0('0x69')]) {
                if (_0x5559d[wanzikun_0x42d0('0x6a')]('PAJbN', 'PAJbN')) {
                  _0x18ec2e[wanzikun_0x42d0('0x12')]();
                } else {
                  wanzikun_0x10e85e[wanzikun_0x42d0('0xd')][wanzikun_0x42d0('0x1e')] = null;
                  wanzikun_0x10e85e['login']();
                  wx[wanzikun_0x42d0('0x5e')]({
                    'title': '提示',
                    'content': _0x190825[wanzikun_0x42d0('0x6b')],
                    'showCancel': ![],
                    'success': function(_0x151249) {
                      if (_0x151249['confirm']) {
                        _0x18ec2e[wanzikun_0x42d0('0x12')]();
                      }
                    }
                  });
                }
              }
            } else {
              wx[wanzikun_0x42d0('0x5e')]({
                'title': '错误',
                'content': _0x7f994d[wanzikun_0x42d0('0x14')][wanzikun_0x42d0('0x5f')],
                'showCancel': ![]
              });
            }
          }
        });
      },
      'fail'(_0x54fa64) {
        wx['openSetting']({});
      }
    });
  },
  'address': function() {
    var _0x16ae19 = {
      'ZMHMd': '/pages/select-address/index'
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx[wanzikun_0x42d0('0x3')]({
          'url': _0x16ae19[wanzikun_0x42d0('0x6c')]
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  myVipList: function() {
    var _0x1bc935 = {
      'tfapv': '/pages/vipList/index'
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx['navigateTo']({
          'url': _0x1bc935['tfapv']
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  geren: function() {
    var _0x1bc935 = {
      'tfapv': '/pages/personalInformation/index?userId=' + this.data.user.USER_ID
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx['navigateTo']({
          'url': _0x1bc935['tfapv']
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  yjlist: function() {
    var _0x1bc935 = {
      'tfapv': '/pages/performanceStatistics/index'
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx['navigateTo']({
          'url': _0x1bc935['tfapv']
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  'withdraw': function() {
    var _0x1bc935 = {
      'tfapv': wanzikun_0x42d0('0x6d')
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx['navigateTo']({
          'url': _0x1bc935['tfapv']
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  'score': function() {
    var _0x42d8fe = {
      'ziKEN': wanzikun_0x42d0('0x6e')
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx[wanzikun_0x42d0('0x3')]({
          'url': _0x42d8fe[wanzikun_0x42d0('0x6f')]
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  'mykanjia': function() {
    var _0x2c653c = {
      'LdFxV': wanzikun_0x42d0('0x70')
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx[wanzikun_0x42d0('0x3')]({
          'url': _0x2c653c['LdFxV']
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })

  },
  capitalMovements: function() {
    var _0x2c653c = {
      'LdFxV': '/pages/capitalMovements/index'
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx[wanzikun_0x42d0('0x3')]({
          'url': _0x2c653c['LdFxV']
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  'mycoupons': function() {
    var _0x32db71 = {
      'wgpob': wanzikun_0x42d0('0x71')
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx[wanzikun_0x42d0('0x3')]({
          'url': _0x32db71[wanzikun_0x42d0('0x72')]
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })

  },
  'favlist': function() {
    var _0xec6078 = {
      'uwQDa': '/pages/fav-list/index'
    };
    app.isLoginUser().then(res => {
      if (res) {
        wx[wanzikun_0x42d0('0x3')]({
          'url': _0xec6078[wanzikun_0x42d0('0x73')]
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  'goorderlist'(_0x4ed87b) {
    var _0x1f5978 = {
      'NLwEV': function(_0x1768e4, _0xaa680f) {
        return _0x1768e4 + _0xaa680f;
      }
    };
    var _0x2956a7 = _0x4ed87b[wanzikun_0x42d0('0x0')][wanzikun_0x42d0('0x1')][wanzikun_0x42d0('0x2')];
    app.isLoginUser().then(res => {
      if (res) {
        wx[wanzikun_0x42d0('0x3')]({
          'url': _0x1f5978[wanzikun_0x42d0('0x4')](wanzikun_0x42d0('0x5'), _0x2956a7)
        });
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  clickVip() {
    app.isLoginUser().then(res => {
      if (res) {
        wx.navigateTo({
          url: '/pages/newcoupons/index'
        })
      } else {
        wx.showToast({
          title: '登录后可查看！',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    })
  },
});
