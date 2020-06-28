import { observable, action } from 'mobx-miniprogram'
import { subtype } from './data'

export const store = observable({
  subtype,

  list: [],

  get num () {
    return this.numA + 1000
  },

  update: action (function () {
    this.numA = 20
  })
})