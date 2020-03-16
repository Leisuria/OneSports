// components/jftabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabCate:{
      type: Array,
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
    handleItemTap(e) {
      // 1.取出index
      // console.log(event)
      const {index} = e.currentTarget.dataset
  
      // 2.触发父组件中的事件 自定义
      this.triggerEvent("tabChange", {index})
    }
  }
})
