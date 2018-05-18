var fileData = require('../../resources/data.js'); 

const today = new Date();
Page({
	data: {
		"year": today.getFullYear(),
		"month": today.getMonth() + 1,
		"day": today.getDate(),
		"selectedDays": [],
		"appointments": fileData.mtData().appointments,
	},
	onLoad() {
		this.selectDays(this.data.appointments, this.data.year, this.data.month);
	},
	// 渲染当前年月已选择日期
	selectDays: function (appointments, year, month) {
		var selectedDays = new Array();
		for (var i in appointments) {
			var appoint = appointments[i];
			if (appoint.year == year
				&& appoint.month == month) {
				selectedDays.push({
					"month": "current",
					"day": appoint.day,
					"color": "white",
					"background": "red"
				});
			}
		}
		this.setData({
			selectedDays: selectedDays,
		})
		if (year == today.getFullYear()
			&& month == today.getMonth() + 1) {
			this.selectToday()
		}
	},
	// 渲染今天的日期
	selectToday: function () {
		var selectedDays = this.data.selectedDays;
		selectedDays.push({
			"month": "current",
			"day": this.data.day,
			"color": "white",
			"background": "blue"
		})
		this.setData({
			selectedDays: selectedDays,
		})
	},
	// 返回今天事件
	returnToday: function () {
		this.setData({
			"year": today.getFullYear(),
			"month": today.getMonth() + 1,
		}),
			this.selectDays(this.data.appointments, this.data.year, this.data.month);
	},
	// 点击下个月事件
	next: function (e) {
		this.selectDays(this.data.appointments, e.detail.currentYear, e.detail.currentMonth);
	},
	// 点击上个月事件
	prev: function (e) {
		this.selectDays(this.data.appointments, e.detail.currentYear, e.detail.currentMonth);
	},
	// 点击已预约日期对象事件
	// clickAppoint: function (e) {
	// 	var appoint = e.currentTarget.dataset;
	// 	this.setData({
	// 		"year": appoint.year,
	// 		"month": appoint.month,
	// 	});
	// 	this.selectDays(this.data.appointments, this.data.year, this.data.month);
	// }
})