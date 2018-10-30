var fileData = require('../../resources/data.js');

Page({
  onLoad: function (options) {
    var dressType = options.dressType;
    var dressList1, dressList2;
    console.log(dressType);
    switch (dressType) {
      case "lolita":
        dressList1 = fileData.mtData().dressListLolita1;
        dressList2 = fileData.mtData().dressListLolita2;
        break;
      case "hanfu":
        dressList1 = fileData.mtData().dressListHanfu1;
        dressList2 = fileData.mtData().dressListHanfu2;
        break;
      case "gufeng":
        dressList1 = fileData.mtData().dressListGufeng1;
        dressList2 = fileData.mtData().dressListGufeng2;
        break;
      case "richang":
        dressList1 = fileData.mtData().dressListRichang1;
        dressList2 = fileData.mtData().dressListRichang2;
        break;
      default:
        console.log("wrong dress type!");
    }
    this.setData({
      "dressList1": dressList1,
      "dressList2": dressList2,
    })
    console.log(this.data)
  },
  data: {
  },
  // 图片点击事件
  previewImage: function (e) {
    // 当前图片url
    var url = e.currentTarget.dataset.src;
    // 从服装列表里获取所有服装url
    var urls = new Array();
    for (var i = 0; i < this.data.dressList1.length + this.data.dressList2.length; i++) {
      if (i % 2 == 0)
        urls[i] = this.data.dressList1[i / 2].dress;
      else
        urls[i] = this.data.dressList2[(i - 1) / 2].dress;
    }

    wx.previewImage({
      current: url,
      urls: urls
    })
  }
})