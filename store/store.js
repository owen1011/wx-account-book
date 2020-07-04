import { observable, action } from 'mobx-miniprogram'
import { subtype } from './data'

export const store = observable({
  subtype,

  autoId: 0,
  list: [
    {
      autoId: 0,
      date: new Date('2020-07-01').valueOf(),
      subtypeId: 1,
      money: 444,
      from: '手动记账',
      remark: '交通'
    },
    {
      autoId: 1,
      date: new Date('2020-07-02').valueOf(),
      subtypeId: 2,
      money: 333,
      from: '手动记账',
      remark: ''
    },
    {
      autoId: 2,
      date: new Date('2020-07-01 09:00').valueOf(),
      subtypeId: 2,
      money: 333,
      from: '手动记账',
      remark: ''
    },
    {
      autoId: 3,
      date: new Date('2020-07-03 11:41').valueOf(),
      subtypeId: 20,
      money: 20,
      from: '手动记账',
      remark: 'test'
    }
  ],

  get getSubtype () {
    return (subtypeId) => {
      return this.subtype.find(obj => obj.id === subtypeId)
    }
  },

  get num () {
    return this.numA + 1000
  },

  update: action (function () {
    this.numA = 20
  }),

  delete: action (function (autoId) {
    console.log(autoId)
    let index = this.list.findIndex(obj => obj.autoId === autoId)
    this.list.splice(index, 1)
    this.list = JSON.parse(JSON.stringify(this.list))
    console.log(this.list)
  })
})