// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    location:{
      lon:118.8,
      lat:32
    },
    //上滑抽屉的显示
    show:false,
    //通知栏
    showNotice:true,
    // popup弹出层
    showPopup:false,
    // map的设置
    setting:{
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: true,
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: true,
      enableSatellite: false,
      enableTraffic: true,
    },

  },
  onReady(){
    this.mapCtx=wx.createMapContext('map')
    this.getLocation()
  },
  getLocation(e){
    // const self=this
    const mapCtx=this.mapCtx
    wx.getLocation({
      type:'gcj02',
      altitude:true,
      success(res){
        const lon=res.longitude
        const lat=res.latitude
        // self.setData({
        //   location:{lon:lon,lat:lat}
        // })
        mapCtx.moveToLocation({
          longitude:lon,
          latitude:lat
        })
      },
      fail(err){
        console.log(err)
      }
    })
  },
  showDrawer(){
    this.setData({
      show:true
    })
  },
  show(e){
    const target=e.currentTarget.dataset.target
    const data={}
    data[target]=true
    this.setData(data)
  },
  close(e){
    const target=e.target.dataset.target
    const data={}
    data[target]=false
    this.setData(data)
  },
})