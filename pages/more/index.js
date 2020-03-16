// pages/more/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    const userinfo = wx.getStorageSync("userinfo")
    this.setData({
      userinfo
    })

  },

  handleGetUserInfo(e){
    const {userInfo} = e.detail
    wx.setStorageSync("userinfo", userInfo)
    this.data.userinfo = userInfo
    this.setData({
      userinfo: userInfo
    })
  }

})