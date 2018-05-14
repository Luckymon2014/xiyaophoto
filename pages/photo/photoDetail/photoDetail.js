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
      descriptionDetail: 
        options.id == 1 ? "" :
        options.id == 2 ? 
        "管你是床前明月光\n" +
        "还是胸口朱砂痣\n" +
        "明天\n" +
        "自然未知\n" :
        options.id == 3 ? 
        "这是一组闭（xia）眼（zi）lolita\n" +
        "小鹿姐姐表示哭笑不得哈哈哈哈哈哈\n" :
        ""
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