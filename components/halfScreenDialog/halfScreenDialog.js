// components/halfScreenDialog/halfScreenDialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    close () {
      this.setData({
        show: false
      })

      this.triggerEvent('close')
    },
    stop () {
      
    }
  },
  observers: {
    'show': function(val) {
      // console.log(typeof this.getTabBar, this.getTabBar(), val)
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          hidden: val
        })
      }
    }
  }
})
