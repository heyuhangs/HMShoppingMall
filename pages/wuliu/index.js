const app = getApp();
Page({
    'data': {
        starIndex: 0,
        val: ''
    },
    onLoad: function (options) {
        this.setData({
            gId: options.gId,
            img: options.img,
            orId: options.orId
        });
    },
    onChange: function (e) {
        const index = e.detail.index;
        this.setData({
            'starIndex': index
        })
    },
    changeVal: function (e) {
        this.setData({
            val: e.detail.detail.value
        })
    },
    handleClick: function () {
        const self = this;
        const data = {
            GOOD_ID:self.data.gId,
            ORDER_ID: self.data.orId,
            USER_ID: app.globalData.userInfo.USER_ID,
            PL_STAR: self.data.starIndex,
            PL_CONTENT: self.data.val
        }
        wx.showLoading({
            title: '发布中',
            mask: true
        })
        wx.request({
            url: app.globalData.url + `/goodImpl/saveComment`,
            method: "POST",
            data: data,
            success: function (res) {
                if (res.statusCode == 200) {
                    wx.showToast({
                        title: '评价成功!',
                        icon: 'none',
                        duration: 2000
                    })
                }
                wx.hideLoading({});
                setTimeout(function () {
                    wx.reLaunch({
                        url: '/pages/my/index'
                    })
                },1000)
            }
        });
    }
});
