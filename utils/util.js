const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const switchTab = function(context, current) {
  if (typeof context.getTabBar === 'function' &&
    context.getTabBar()) {
    context.getTabBar().setData({
      current
    })
  }
}

const getWeekday = function (date) {
  let diff = Math.ceil((date - Date.now())/(24*60*60*1000))
  if (diff === 0) return '今天'
  else if (diff === -1) return '昨天'
  else {
    const arr = ['日', '一', '二', '三', '四', '五', '六']
    return `星期${arr[new Date(date).getDay()]}`
  }
}

module.exports = {
  formatTime,
  switchTab,
  getWeekday
}
