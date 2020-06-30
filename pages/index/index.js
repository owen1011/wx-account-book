// pages/index/index.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
const { switchTab } = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    currentId: 0,
    currentYear: new Date(Date.now()).getFullYear(),
    currentMonth: new Date(Date.now()).getMonth(),
    inTotal: '0.00',
    outTotal: '0.00'
  },
  watchs: {
    currentId () {
      console.log('currentId Change')
    }
  },
  //事件处理函数
  close (e) {
    console.log(e)
  },
  dateChange (e) {
    const { currentYear, currentMonth } = e.detail
    this.setData({
      currentYear,
      currentMonth
    })
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
    this.setData({
      currentId: e.detail
    })
  }
})
