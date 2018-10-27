var fileData = require('../../resources/data.js');

Page({
  data: {
    "photoList1": fileData.mtData().photoList1,
    "photoList2": fileData.mtData().photoList2,
  },
  photoDetail: function (e) {
    var photos = e.currentTarget.dataset.photoList;
    wx.navigateTo({
      url: '/pages/photo/photoDetail/photoDetail?photos=' + JSON.stringify(photos)
    })
  }
})