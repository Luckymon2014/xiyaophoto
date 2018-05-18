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

function mtData() {
	var arr = {
		// 照片列表
		"photoList": [
			{
				"title": "《想对你说的话 都在星星里》",
				"description":
					"摄，后期：李肖遥\n" +
					"出镜：@温柔少女鹿\n" +
					"服装：@栗2011 \n" +
					"棚：@NEKORA猫罗万象摄影工作室​​",
				"descriptionDetail": "",
				"photo": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpdpk90fyxj22kw3vcqvd.jpg",
				"grid1": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpdpde8vabj20qo140wkc.jpg",
				"grid2": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fpdpdf4t9xj21400qotdn.jpg",
				"grid3": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpdpdfvizrj20qo1400ym.jpg",
				"grid4": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpdpdcszl4j20qo140agy.jpg",
				"grid5": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpdpk90fyxj22kw3vcqvd.jpg",
				"grid6": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpdpejg3h8j20qo140afj.jpg",
				"grid7": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpdpekckg6j20qo140wjs.jpg",
				"grid8": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fpdpdgmdl9j20qo140q8m.jpg",
				"grid9": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpdpel9qs7j20qo140n2i.jpg"
			}, {
				"title": "《谷雨》",
				"description":
					"出镜：@邢静雨- \n" +
					"摄：李肖遥",
				"descriptionDetail":
					"管你是床前明月光\n" +
					"还是胸口朱砂痣\n" +
					"明天\n" +
					"自然未知\n",
				"photo": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fqjk3xhu2nj21e00xc41o.jpg",
				"grid1": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fqjk3xyf1qj20xc1e076u.jpg",
				"grid2": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fqjk40lxosj21e00xctd8.jpg",
				"grid3": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fqjk3z2c9fj20xb1e0q4w.jpg",
				"grid4": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fqjk416rw1j20xc1e0td2.jpg",
				"grid5": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fqjk3xhu2nj21e00xc41o.jpg",
				"grid6": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fqjk42dmqlj20xc1e0juy.jpg",
				"grid7": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fqjk3zl69yj21e00xc7a8.jpg",
				"grid8": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fqjk43iqc6j20xc1e0q6y.jpg",
				"grid9": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fqjk3ykk02j20xc1e0tc6.jpg"
			}, {
				"title": "《“瞎子”Lolita》",
				"description":
					"摄，后期：李肖遥\n" +
					"出镜：@温柔少女鹿\n" +
					"裙：@This-time洋装\n" +
					"棚：@NEKORA猫罗万象摄影工作室​​",
				"descriptionDetail":
					"这是一组闭（xia）眼（zi）lolita\n" +
					"小鹿姐姐表示哭笑不得哈哈哈哈哈哈\n",
				"photo": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpkp8y5olsj22kw3vcnpl.jpg",
				"grid1": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fpkozdwj42j20qo140tdv.jpg",
				"grid2": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpkp6fa0u8j228e3ck1l0.jpg",
				"grid3": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpkozy96d0j20qo140q8z.jpg",
				"grid4": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpkp8y5olsj22kw3vcnpl.jpg",
				"grid5": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpkp6814vfj22kw3vc1l4.jpg",
				"grid6": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fpkp8k48pmj22kw3vcb2h.jpg",
				"grid7": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fpkp9a574kj22kw3vc7wo.jpg",
				"grid8": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fpkp9bamslj20qo140grk.jpg"
			}, {
				"title": "《那些你们喜欢的不喜欢的我都喜欢的女孩——（一）》",
				"description":
					"出镜：@仙璃璃回归哥特\n" +
					"摄：削爷 & 李肖遥\n" +
					"妆造、后期：李肖遥\n" +
					"裙：@长耳朵与尖耳朵\n" +
					"鞋：@仙太郎Sentaro\n" +
					"披肩，手套，花丸：@仙璃璃回归哥特",
				"descriptionDetail": "",
				"photo": "../../resources/photos/photo1.jpg",
				"grid1": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fr0gy8pi26j21n662ru10.jpg",
				"grid2": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fr0gzntvo3j21n662r4qs.jpg",
				"grid3": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fr0gywa9gvj20qn2qmtqn.jpg",
				"grid4": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fr0h3botb4j21n662r4qs.jpg",
				"grid5": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fr0gyg99e3j21n662ru10.jpg",
				"grid6": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fr0gyts3fwj21n662rnpf.jpg",
				"grid7": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fr0gynhux4j21n662r7wk.jpg",
				"grid8": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fr0h3tbnmgj20qn2qm1dd.jpg",
				"grid9": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fr0h349d43j21n662rkjo.jpg"
			}, {
				"title": "《小鹿@外滩》",
				"description":
					"摄，后期：李肖遥\n" +
					"出镜：@温柔少女鹿\n",
				"descriptionDetail": "",
				"photo": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpsefrjymjj22kw3vc4qr.jpg",
				"grid1": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fpsedf2qc7j22kw3vcu0z.jpg",
				"grid2": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fpsed840d8j22kw3vckjo.jpg",
				"grid3": "https://wx1.sinaimg.cn/mw690/6029e1d2gy1fpseedpaw8j22ka3ufqv7.jpg",
				"grid4": "https://wx2.sinaimg.cn/mw690/6029e1d2gy1fpsee6h14aj22kw3vc4qs.jpg",
				"grid5": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fpseeu9d94j22kw3vcu0z.jpg",
				"grid6": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fpseemp9acj22kw3vc7wk.jpg",
				"grid7": "https://wx3.sinaimg.cn/mw690/6029e1d2gy1fpsef29gfdj22kw3vcu0z.jpg",
				"grid8": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpseg01lpdj23vc2kwqv7.jpg",
				"grid9": "https://wx4.sinaimg.cn/mw690/6029e1d2gy1fpsefrjymjj22kw3vc4qr.jpg"
			}
		],
		// 预约列表
		"appointments": [
			{
				"year": "2018",
				"month": "5",
				"day": "13",
			}, {
				"year": "2018",
				"month": "6",
				"day": "9",
			}, {
				"year": "2018",
				"month": "6",
				"day": "24",
			}
		]
	}
	return arr
}  