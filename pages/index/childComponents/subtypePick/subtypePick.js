// pages/index/childComponents/subtypePick/subtypePick.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subtype: Array,
    currentId: {
      type: Number,
      default: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentSubtype: '全部类型',
    show: false,
    subtypeOut: [],
    subtypeIn: []
  },

  observers: {
    currentId (val) {
      this.setData({
        currentSubtype: val === 0 ? '全部类型' : this.data.subtype.find(item => item.id === val).name,
      })
    }
    
  },

  lifetimes: {
    ready () {
      this.setData({
        subtypeOut: this.data.subtype.filter(item=>item.type===0),
        subtypeIn: this.data.subtype.filter(item=>item.type===1)
      })
    }
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
    onClose (e) {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          hidden: false
        })
      }
    },
    selectSubtype (e) {
      const { id } = e.target.dataset
      this.setData({
        show: false
      })
      this.onClose()
      this.triggerEvent('selectSubtype', id)
    }
  }
})
