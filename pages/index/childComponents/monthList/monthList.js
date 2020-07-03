// pages/index/childComponents/monthList/monthList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentDayList: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentAutoId: -2
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSlideButtonShow (e) {
      this.setData({
        currentAutoId: e.detail
      })
    }
  }
})
