// components/monthSelector/monthSelector.js
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
    show: false,
    currentYear: new Date(Date.now()).getFullYear(),
    currentMonth: new Date(Date.now()).getMonth()+1,
    // currentDate: currentYear + '年' + currentMonth  + '月'
    currentDate: '',
    monthList: []
  },

  lifetimes: {
    ready () {
      this.setData({
        currentDate: this.getCurrentDate(),
        monthList: (() => {
          let list = []
          for (let i = 1; i <= this.data.currentMonth; i++) {
            list.push(i)
          }
          return list
        })()
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tap (e) {
      this.setData({
        show: true
      })
    },
    getCurrentDate () {
      return this.data.currentYear + '年' + this.data.currentMonth + '月'
    },
    close () {
      this.triggerEvent('close', {
        currentYear: this.data.currentYear,
        currentMonth: this.data.currentMonth
      })
    },
    selectMonth (e) {
      this.setData({
        currentMonth: e.target.dataset.month
      })
      this.setData({
        currentDate: this.getCurrentDate(),
        show: false
      })
    }
  }
})
