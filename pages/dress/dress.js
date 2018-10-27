var fileData = require('../../resources/data.js');

Page({
  onLoad: function (options) {
    var dressType = options.dressType;
    var dressList1, dressList2;
    console.log(dressType);
    switch(dressType) {
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
  dressDetail: function (e) {
    var dresss = e.currentTarget.dataset.dressList;
    wx.navigateTo({
      url: '/pages/dress/dressDetail/dressDetail?dresss=' + JSON.stringify(dresss)
    })
  }
})