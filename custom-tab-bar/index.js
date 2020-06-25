// custom-tab-bar/index.js
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
    current: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '明细',
        iconPath: '/assets/imgs/tabBar/account.png',
        selectedIconPath: '/assets/imgs/tabBar/account-fill.png'
      },
      {
        pagePath: '/pages/statistics/statistics',
        text: '统计',
        iconPath: '/assets/imgs/tabBar/statistics.png',
        selectedIconPath: '/assets/imgs/tabBar/statistics-fill.png'
      },
      {
        pagePath: '/pages/profile/profile',
        text: '我',
        iconPath: '/assets/imgs/tabBar/profile.png',
        selectedIconPath: '/assets/imgs/tabBar/profile-fill.png'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapChange (e) {
      const url = e.detail.item.pagePath
      wx.switchTab({ url })
    }
  }
})
