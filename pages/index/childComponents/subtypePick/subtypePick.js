// pages/index/childComponents/subtypePick/subtypePick.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentSubtype: '全部类别',
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tap (e) {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          hidden: true
        })
      }
      this.setData({
        show: true
      })
    },
    close (e) {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          hidden: false
        })
      }
    }
  }
})
