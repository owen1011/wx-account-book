// pages/index/index.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
const { switchTab, getWeekday } = require('../../utils/util.js')
const computedBehavior = require('miniprogram-computed')

//获取应用实例
const app = getApp()

Page({
  behaviors: [computedBehavior],
  data: {
    currentId: 0,
    currentYear: new Date(Date.now()).getFullYear(),
    currentMonth: new Date(Date.now()).getMonth() + 1,
    inTotal: '0.00',
    outTotal: '0.00',
    currentList: [],
    currentDayList: []
  },
  watch: {
    'list, currentId, currentYear, currentMonth': function () {
      this.setData({
        currentList: this.data.list.filter((obj) => {
          let date = new Date(obj.date)
          let year = date.getFullYear()
          let month = date.getMonth() + 1

          if (this.data.currentId === 0) {
            return year === this.data.currentYear &&
              month === this.data.currentMonth 
          } else {
            return year === this.data.currentYear &&
              month === this.data.currentMonth && 
              obj.subtypeId === this.data.currentId
          }
        })
      })
    },
    'currentList': function () {
      // 计算每月总支出
      let outTotal = this.data.currentList.reduce((sum, current) => {
        let subtype = this.data.getSubtype(current.subtypeId)
        return subtype.type === 0 ? sum + current.money : sum
      }, 0).toFixed(2)
      // 计算每月总收入
      let inTotal = this.data.currentList.reduce((sum, current) => {
        let subtype = this.data.getSubtype(current.subtypeId)
        return subtype.type === 1 ? sum + current.money : sum
      }, 0).toFixed(2)
      this.setData({
        outTotal,
        inTotal
      })
      let days = new Set()
      // 获取当前选中月的所有天数集合
      this.data.currentList.forEach((obj) => {
        let date = new Date(obj.date)
        days.add(date.getUTCDate())
      })
      let currentDayList = []
      // 遍历集合，为每一天添加所对应的收支详情
      for (let i of days) {
        let dayItem = {
          month: this.data.currentMonth,
          day: i,
          list: this.data.currentList.filter((obj) => {
            // console.log(this.data.getSubtype(obj.subtypeId))
            let date = new Date(obj.date)
            let day = date.getUTCDate()
            return day === i
          }).sort((a, b) => b.date - a.date)
        }
         
        dayItem.list.forEach(obj => {
          // 获取类别对象
          let subtype = this.data.getSubtype(obj.subtypeId)
          obj.subtypeName = subtype.name
          obj.type = subtype.type

          // 截取类别名称第一个字作为图标
          obj.icon = obj.subtypeName.substr(0, 1)
          // 保留两位小数作为显示金额
          obj.viewMoney = obj.type === 0 ? '-' + obj.money.toFixed(2) : '+' + obj.money.toFixed(2)
          // 获取时间（hh:mm）
          obj.time = new Date(obj.date).toTimeString().substr(0, 5)
          // 是否是最后一个
          obj.isLast = false
        })
        dayItem.list[dayItem.list.length - 1].isLast = true
        // 星期几
        dayItem.weekday = getWeekday(dayItem.list[0].date)
        // 每日总支出
        dayItem.outTotal = dayItem.list.filter(obj => {
          let { type } = this.data.subtype.find(item => item.id === obj.subtypeId)
          return type === 0
        }).reduce((sum, current) => sum + current.money, 0)
          .toFixed(2)
        // 每日总收入
        dayItem.inTotal = dayItem.list.filter(obj => {
          let { type } = this.data.subtype.find(item => item.id === obj.subtypeId)
          return type === 1
        }).reduce((sum, current) => sum + current.money, 0)
          .toFixed(2)
        currentDayList.push(dayItem)
      }
      currentDayList.sort((a, b) => b.day - a.day)
      // daysArr.sort((a, b) => b - a)
      // console.log(currentDayList)
      this.setData({
        currentDayList
      })
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
      fields: ['subtype', 'list', 'currentList', 'getSubtype'],
      actions: ['update']
    })
  },
  onReady () {
    // this.data.currentList({
    //   subtypeid: this.data.currentId,
    //   year: this.data.currentYear,
    //   month: this.data.currentMonth
    // })
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
