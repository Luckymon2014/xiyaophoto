Page({
  onLoad: function (options) {
    this.setData({
      scenes: JSON.parse(options.scenes),
    })
    console.log(this.data)
  },
  data: {
  },
  // 图片点击事件
  previewImage: function (e) {
    var that = this,
      //获取当前图片的下标
      index = e.currentTarget.dataset.index,
      //数据源
      scenes = this.data.scenes;
    wx.previewImage({
      //当前显示下表
      current: scenes[index],
      //数据源
      urls: scenes
    })
  }
})