// pages/index/childComponents/dayList/dayList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    currentAutoId: {
      type: Number,
      value: -2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    slideButtons: [
      {
        type: 'warn',
        text: '删除'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSlideButtonShow (e) {
      this.triggerEvent('slideButtonShow', e.target.dataset.id)
    }
  }
})
