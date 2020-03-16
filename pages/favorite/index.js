// pages/favorite/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCate: [
      {
        id: 0,
        value: "All Games",
        isActive: true
      },
      {
        id: 1,
        value: "Fixtures",
        isActive: false
      },
      {
        id: 2,
        value: "Results",
        isActive: false
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  // 一级tab点击事件
  handleTabChange(e){
    // 1. 获取被点击标签的索引
    const {index} = e.detail
    // console.log(index)
    // 2. 修改源数组
    let {tabCate} = this.data
    tabCate.forEach((v,i) => i===index? v.isActive=true:v.isActive=false)
    // 3. 赋值到data中
    this.setData({tabCate})
  },


})