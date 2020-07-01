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
      remark: ''
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
    }
  ],

  get num () {
    return this.numA + 1000
  },

  update: action (function () {
    this.numA = 20
  })
})