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
    ],
    dialogShow: false,
    buttons: [
      {
        text: '取消'
      }, 
      {
        text: '删除',
        extClass: '^dialog-warn'
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSlideButtonShow (e) {
      this.triggerEvent('slideButtonShow', e.target.dataset.id)
    },
    gotoDetail (e) {
      wx.navigateTo({
        url: '/pages/detail/detail',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', e.currentTarget.dataset.item)
        }
      })
    },
    delete (e) {
      this.setData({
        dialogShow: true
      })
      // const { id } = e.target.dataset
      // console.log(id)
      // const page = getCurrentPages().reverse()[0]
      // console.log(id)
      // page.delete(id)
      // page.storeBindings.updateStoreBindings()
    },
    async handlebuttontap (e) {
      const { index } = e.detail
      if (index === 0) {
        this.setData({
          dialogShow: false
        })
      } else {
        const page = getCurrentPages().reverse()[0]
        try {
          await page.delete(this.dataset.currentAutoId)
          this.setData({
            dialogShow: false
          })
          wx.showToast({
            title: '已删除',
            icon: 'none'
          })
        } catch (e) {
          wx.showToast({
            title: '删除失败',
            icon: 'none'
          })
        }
        
        // console.log(this.data.currentAutoId)
      }
    }
  }
})
