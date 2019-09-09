// pages/jurisDiction/jurisDiction.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    userlogin: function() {
        const self = this;
        wx.showLoading({
            mask: true
        })
        wx.getUserInfo({
            success: function(res) {
                if (res.userInfo) {
                    const obj = res.userInfo
                    let newObject = {
                        PAR_ID: '',
                        OPEN_ID: app.globalData.wxUser.openid,
                        WX_NICKNAME: obj.nickName,
                        WX_IMG: obj.avatarUrl,
                    }
                    wx.request({
                        url: app.globalData.url + `/userImpl/saveUser?PAR_ID=${newObject.PAR_ID}&OPEN_ID=${newObject.OPEN_ID}&WX_NICKNAME=${newObject.WX_NICKNAME}&WX_IMG=${newObject.WX_IMG}`,
                        method: "get",
                        success: function(res) {
                            if (res.data.result != 'error') {
                                app.globalData.userInfo = res.data.userInfo;
                                wx.reLaunch({
                                    url: '/pages/index/index',
                                });
                            } else {
                                wx.showToast({
                                    title: '信息注册失败，请联系管理员!',
                                    icon: 'none',
                                    duration: 2000
                                })
                            }
                        },
                        complete(res) {
                            wx.hideLoading({})
                        }
                    })
                    // wx.request({
                    //     url: app.globalData.getServerUrl() + app.globalData.applicationId + '/' + app.globalData.secretKey + `/data/WXUser`,
                    //     method: 'PUT',
                    //     data: JSON.stringify(newObject),
                    //     success: function (res) {
                    //         app.globalData.userInfo = res.data
                    //         if(app.globalData.userInfo){
                    //             wx.redirectTo({
                    //                 url: '/pages/home/home'
                    //             })
                    //         }
                    //         // self.setData({
                    //         //   userInfo: app.globalData.userInfo
                    //         // })
                    //         console.log('userInfo', app.globalData.userInfo)
                    //     }
                    // })
                }
            },
        })
    },
})
