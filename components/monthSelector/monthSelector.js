// components/monthSelector/monthSelector.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentYear: {
      type: Number,
      value: new Date(Date.now()).getFullYear()
    },
    currentMonth: {
      type: Number,
      value: new Date(Date.now()).getMonth()+1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    currentDate: '',
    monthList: []
  },

  observers: {
    'currentMonth, currentYear': function () {
      this.setData({
        currentDate: this.getCurrentDate()
      })
    }
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
      this.triggerEvent('close')
    },
    selectMonth (e) {
      this.triggerEvent('dateChange', {
        currentYear: this.data.currentYear,
        currentMonth: e.target.dataset.month
      })
      this.setData({
        show: false
      })
    }
  }
})
