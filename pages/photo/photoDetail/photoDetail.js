Page({
  onLoad: function (options) {
    this.setData({
      title: options.title,
      photos: [
        options.grid1,
        options.grid2,
        options.grid3,
        options.grid4,
        options.grid5,
        options.grid6,
        options.grid7,
        options.grid8,
        options.grid9
      ],
      descriptionDetail: options.descriptionDetail,
    })
  },
  data: {
  },
  // 图片点击事件
  previewImage: function (e) {
      var that = this,
          //获取当前图片的下表
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