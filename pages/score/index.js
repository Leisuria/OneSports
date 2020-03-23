// pages/score/index.js

var soccer = require('../../data/matchlist.js')



Page({

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
    matchItem:[
      {
        match_id: "",
        way: "-",
        region_flag: "",
        region_name: "",
        start_time: "-",
        status: "",
        lineup: 0,
        audienc: 0,
        live: 0,
        home_team: "",
        away_team: "",
        a_score: 0,
        h_score: 0,
        detail: {
          ht:"",
          corner:"",
        },
        fav:false,
      }
    ]
  },

  onShow: function () {
    this.setData({
      matchItem: soccer.matchlist
    })
  },

  // 导航点击事件 从子组件传递
  handleTabChange(e){
    // 1. 获取被点击标签的索引
    const {index} = e.detail
    console.log(index)
    // 2. 修改源数组
    let {tabCate} = this.data
    tabCate.forEach((v,i) => i===index? v.isActive=true:v.isActive=false)
    // 3. 赋值到data中
    this.setData({tabCate})
  },


  // 添加收藏比赛
  handleAddMatch(e){
    const {index} = e.detail
    let matchItem = this.data.matchItem
    let match = matchItem[index]
    // 1.获取缓存中的收藏数组
    let collect = wx.getStorageSync('collect') || []
    // 2.判断比赛是否被收藏过
    let findIndex = collect.findIndex(v=>v.match_id === match.match_id)
    if(findIndex !== -1) {
      // 能找到 已经收藏过该场比赛   在数组中删除该场比赛
      collect.splice(index,1)
      match.fav = false
      wx.showToast({
        title: '取消收藏',
        icon: 'none',
        mask: true
      })
    }else{
      // 没有收藏过
      match.fav = true
      collect.push(match)
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true
      })
    }
    // 3.把数组存入到缓存中
    wx.setStorageSync('collect', collect)
    this.setData({
      matchItem
    })
  }
})