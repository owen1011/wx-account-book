// pages/detail/detail.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      this.setData({
        item: data
      })
    })
    this.storeBindings = createStoreBindings(this, {
      store,
      actions: ['delete']
    })
  },

  deleteDetail () {
    wx.showModal({
      title: '删除后无法恢复，是否删除？',
      cancelColor: '#999',
      confirmText: '删除',
      confirmColor: '#e64340',
      success: (res) => {
        if (res.confirm) {
          this.delete(this.data.item.autoId)
          wx.navigateBack({
            delta: 0
          })
          wx.showToast({
            title: '已删除',
            icon: 'none'
          })
        } 
      }
    })
    // this.delete(this.data.item.autoId)
    // wx.navigateBack({
    //   delta: 0,
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})