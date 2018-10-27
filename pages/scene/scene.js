var fileData = require('../../resources/data.js');

Page({
  data: {
    "sceneList1": fileData.mtData().sceneList1,
    "sceneList2": fileData.mtData().sceneList2,
  },
  sceneDetail: function(e){
    var scenes = e.currentTarget.dataset.sceneList;
    wx.navigateTo({
      url: '/pages/scene/sceneDetail/sceneDetail?scenes=' + JSON.stringify(scenes)
    })
  }
})