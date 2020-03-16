// pages/score/c_component/jmatchfo/jmatchfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    matchItem:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleFavAdd(e){
      const {index} = e.currentTarget.dataset
      this.triggerEvent("addMatch", {index})
    }
  }
})
