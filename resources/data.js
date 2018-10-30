var mtUrl = "https://xiyao-1256731092.file.myqcloud.com/";
// var mtUrl = "https://xiyao-1256731092.cos.ap-shanghai.myqcloud.com/"

module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata,
}
var mt_data = mtData()
function searchmtdata(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt
    }
  }
  return result || {}
}

/**
 * 单个照片构造函数
 */
function Photo(name) {
  var photoUrl = mtUrl + "作品/" + name + "/";
  // 首图
  this.photo = photoUrl + name + " (0).jpg";
  // 九宫格
  this.photos = [
    photoUrl + name + " (0).jpg",
    photoUrl + name + " (1).jpg",
    photoUrl + name + " (2).jpg",
    photoUrl + name + " (3).jpg",
    photoUrl + name + " (4).jpg",
    photoUrl + name + " (5).jpg",
    photoUrl + name + " (6).jpg",
    photoUrl + name + " (7).jpg",
    photoUrl + name + " (8).jpg",
  ];
}

/**
 * 单个服装构造函数
 */
function Dress(dressType, dressId) {
  this.dress = mtUrl + "服装/" + dressType + "/" + dressType + " (" + dressId + ").jpg";
}

/**
 * 单个场景构造函数
 */
function Scene(name) {
  var sceneName = name.name;
  var sceneNum = name.num;
  var sceneUrl = mtUrl + "场景/" + sceneName + "/";
  // 首图
  this.scene = sceneUrl + sceneName + "0.jpg";
  // 细节
  this.scenes = new Array();
  for (var i = 0; i < sceneNum; i++) {
    this.scenes[i] = sceneUrl + sceneName + i + ".jpg";
  }
}

/**
 * 资源数据
 */
function mtData() {

  // 照片列表
  var photoNameList = [
    "白白", "百合",
    "乐瑶", "梦花源",
    "旗袍", "双人jk",
    "乌冬面", "小鹿",
    "小鹿lo", "小鹿汉服",
    "长安百合", "长安",
    "闺秀", "纪夏",
    "蓝隐", "四季",
    "杨奥兰", "小扬",
    "小雨", "无忧",
    ];
  var photoList1 = new Array(); // 照片列表(左侧)
  var photoList2 = new Array(); // 照片列表(右侧)
  for (var i = 0; i < photoNameList.length; i++) {
    if (i % 2 == 0)
      photoList1[i / 2] = new Photo(photoNameList[i]);
    else
      photoList2[(i - 1) / 2] = new Photo(photoNameList[i]);
  }

  // 服装列表
  // lolita 24
  var dressListLolita1 = new Array();
  var dressListLolita2 = new Array();
  for (var i = 0; i < 24; i++) {
    if (i % 2 == 0)
      dressListLolita1[i / 2] = new Dress("lolita", i + 1);
    else
      dressListLolita2[(i - 1) / 2] = new Dress("lolita", i + 1);
  }
  // 古风 9
  var dressListGufeng1 = new Array();
  var dressListGufeng2 = new Array();
  for (var i = 0; i < 9; i++) {
    if (i % 2 == 0)
      dressListGufeng1[i / 2] = new Dress("古风", i + 1);
    else
      dressListGufeng2[(i - 1) / 2] = new Dress("古风", i + 1);
  }
  // 汉服 19
  var dressListHanfu1 = new Array();
  var dressListHanfu2 = new Array();
  for (var i = 0; i < 19; i++) {
    if (i % 2 == 0)
      dressListHanfu1[i / 2] = new Dress("汉服", i + 1);
    else
      dressListHanfu2[(i - 1) / 2] = new Dress("汉服", i + 1);
  }
  // 日常 9
  var dressListRichang1 = new Array();
  var dressListRichang2 = new Array();
  for (var i = 0; i < 9; i++) {
    if (i % 2 == 0)
      dressListRichang1[i / 2] = new Dress("日常", i + 1);
    else
      dressListRichang2[(i - 1) / 2] = new Dress("日常", i + 1);
  }

  // 场景列表
  var sceneNameList = [
    { "name": "吊椅", "num": 7 }, { "name": "房间", "num": 16 },
    { "name": "古风", "num": 20 }, { "name": "夜景", "num": 4 },
    { "name": "钢琴", "num": 8 }, { "name": "居家", "num": 7 },
  ];
  var sceneList1 = new Array(); // 场景列表(左侧)
  var sceneList2 = new Array(); // 场景列表(右侧)
  for (var i = 0; i < sceneNameList.length; i++) {
    if (i % 2 == 0)
      sceneList1[i / 2] = new Scene(sceneNameList[i]);
    else
      sceneList2[(i - 1) / 2] = new Scene(sceneNameList[i]);
  }

  // 资源数据列表
  var mtData = {
    "mtUrl": mtUrl,
    "homeImgUrl": mtUrl + "首页/background.jpg",
    "campaignImgUrl": mtUrl + "活动/campaign.jpg",
    "photoList1": photoList1,
    "photoList2": photoList2,
    "dressListLolita1": dressListLolita1,
    "dressListLolita2": dressListLolita2,
    "dressListHanfu1": dressListHanfu1,
    "dressListHanfu2": dressListHanfu2,
    "dressListGufeng1": dressListGufeng1,
    "dressListGufeng2": dressListGufeng2,
    "dressListRichang1": dressListRichang1,
    "dressListRichang2": dressListRichang2,
    "sceneList1": sceneList1,
    "sceneList2": sceneList2,
  }
  return mtData
}  