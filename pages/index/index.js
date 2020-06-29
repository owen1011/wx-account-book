// pages/index/index.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
const { switchTab } = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        text: '详细'
      }, 
      {
        text: '统计'
      }, 
      {
        text: '我'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
  },
  close (e) {
    console.log(e.detail)
  },
  onLoad: function () {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['subtype', 'num'],
      actions: ['update']
    })
  },
  onShow: function () {
    switchTab(this, 0)
  },
  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  },
  tabChange (e) {
    console.log(e)
  },
  onSelectSubtype (e) {
    console.log(e.detail)
  }
})
