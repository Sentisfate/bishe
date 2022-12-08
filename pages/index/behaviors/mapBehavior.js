module.exports=Behavior({
  data:{
        // map的设置
        setting: {
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
        //地图初始中心点坐标
        location: {
          lon: 118.8,
          lat: 32
        },
  },
  methods:{
    getLocation(e) {
      // const self=this
      const mapCtx = this.mapCtx
      wx.getLocation({
        type: 'gcj02',
        altitude: true,
        success(res) {
          const lon = res.longitude
          const lat = res.latitude
          // self.setData({
          //   location:{lon:lon,lat:lat}
          // })
          mapCtx.moveToLocation({
            longitude: lon,
            latitude: lat
          })
        },
        fail(err) {
          console.log(err)
        }
      })
    },
  }
})