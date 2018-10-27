var fileData = require('../../../resources/data.js');

Page({
  data: {
    "catalogLolita": fileData.mtData().mtUrl + "服装目录-lolita.jpg",
    "catalogHanfu": fileData.mtData().mtUrl + "服装目录-汉服.jpg",
    "catalogGufeng": fileData.mtData().mtUrl + "服装目录-古风.jpg",
    "catalogRichang": fileData.mtData().mtUrl + "服装目录-日常.jpg",
  },
  dress: function (e) {
    var dressType = e.currentTarget.dataset.dressType;
    wx.navigateTo({
      url: '/pages/dress/dress?dressType=' + dressType
    })
  }
})