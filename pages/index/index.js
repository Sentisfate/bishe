// index.js
// 获取应用实例
const app = getApp()
const noticeBehavior = require('./behaviors/showTopNotice')
const mapBehavior = require('./behaviors/mapBehavior')
const popupBehavior=require('./behaviors/popupBehavior')
const drawerBehavior=require('./behaviors/drawBehavior')
Page({
  behaviors: [noticeBehavior, mapBehavior,popupBehavior,drawerBehavior],
  data: {
    hesuanMarkers: [{
      id: 1,
      title: '核酸检测点1',
      longitude: 118.62876828299448,
      width: 30,
      height: 30,
      latitude: 32.05891230233881,
      iconPath: '/images/hospital.png',
      info: [{
        key: '场所类型',
        value: '免费检测点'
      }, {
        key: '营业时间',
        value: '12:00-23:00'
      }, {
        key: '详细地址',
        value: '浦口区宁六路219号南京信息工程大学沁园34栋东侧核酸检测点'
      }, ],
    }],
    riskMarkers: [{
      id: 10001,
      title: '风险区1',
      longitude: 118.62966808298438,
      width: 30,
      height: 30,
      latitude: 32.05891230233881,
      iconPath: '/images/infection.png',
      info: [{
        key: '场所类型',
        value: '免费检测点'
      }, {
        key: '营业时间',
        value: '12:00-23:00'
      }, {
        key: '详细地址',
        value: '浦口区宁六路219号南京信息工程大学沁园34栋东侧核酸检测点'
      }, ],
    }],
    allMarkers: [],
  },
  onReady() {
    this.mapCtx = wx.createMapContext('map')
    this.getLocation()
    this.setData({
      allMarkers: [...this.data.hesuanMarkers, ...this.data.riskMarkers]
    })
  },
  navigate(e) {
    const {
      longitude,
      latitude
    } = e.currentTarget.dataset.location
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
    })
  }
})