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
	// 点击日期事件
	dayClick: function (e) {
		console.log(e.detail);
	},
	// 点击日历标题日期选择器事件
	dateChange: function (e) {
		this.selectDays(this.data.appointments, e.detail.currentYear, e.detail.currentMonth);
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
	// 选择下个月事件
	toNextMonth: function () {
		const curYear = this.data.year;
		const curMonth = this.data.month;
		let newMonth = curMonth + 1;
		let newYear = curYear;
		if (newMonth > 12) {
			newYear = curYear + 1;
			newMonth = 1;
		}
		this.setData({
			'year': newYear,
			'month': newMonth,
		});
	},
	// 选择上个月事件
	toPrevMonth: function () {
		const curYear = this.data.year;
		const curMonth = this.data.month;
		let newMonth = curMonth - 1;
		let newYear = curYear;
		if (newMonth < 1) {
			newYear = curYear - 1;
			newMonth = 12;
		} this.setData({
			'year': newYear,
			'month': newMonth,
		});
	},
	// 滑动事件
	calendarTouchstart(e) {
		const t = e.touches[0];
		const startX = t.clientX;
		const startY = t.clientY;
		this.slideLock = true; // 滑动事件加锁
		this.setData({
			'gesture.startX': startX,
			'gesture.startY': startY
		});
	},
	calendarTouchmove(e) {
		if (this.isLeftSlide.call(this, e)) {
			this.toNextMonth();
			this.selectDays(this.data.appointments, this.data.year, this.data.month);
		}
		if (this.isRightSlide.call(this, e)) {
			this.toPrevMonth();
			this.selectDays(this.data.appointments, this.data.year, this.data.month);
		}
	},
	// 左滑
	isLeftSlide: function (e) {
		const { startX, startY } = this.data.gesture;
		if (this.slideLock) {
			const t = e.touches[0];
			const deltaX = t.clientX - startX;
			const deltaY = t.clientY - startY;
			if (deltaX < -60 && deltaY < 20 && deltaY > -20) {
				this.slideLock = false;
				return true;
			} else {
				return false;
			}
		}
	},
	// 右滑
	isRightSlide: function (e) {
		const { startX, startY } = this.data.gesture;
		if (this.slideLock) {
			const t = e.touches[0];
			const deltaX = t.clientX - startX;
			const deltaY = t.clientY - startY;
			if (deltaX > 60 && deltaY < 20 && deltaY > -20) {
				this.slideLock = false;
				return true;
			} else {
				return false;
			}
		}
	},
	// 点击已预约日期对象事件
	// clickAppoint: function (e) {
	// 	var appoint = e.currentTarget.dataset;
	// 	this.setData({
	// 		"year": appoint.year,
	// 		"month": appoint.month,
	// 	});
	// 	this.selectDays(this.data.appointments, this.data.year, this.data.month);
	// },
})