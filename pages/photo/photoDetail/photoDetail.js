Page({
  onLoad: function (options) {
    this.setData({
      photos: JSON.parse(options.photos),
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
      photos = this.data.photos;
    wx.previewImage({
      //当前显示下表
      current: photos[index],
      //数据源
      urls: photos
    })
  }
})