module.exports = Behavior({
  data: {
    // marker信息是否显示，false为显示图层
    showInfo: false,
    // drawer 是否显示
    showDrawer: false,
    drawerTitle: '',
    info: [],
    // 标记中心点坐标
    markerLocation: {
      lon: 118,
      lat: 32,
    },
  },
  methods: {
    showDrawer() {
      this.setData({
        showDrawer: true
      })
    },
    closeDrawer() {
      this.setData({
        showDrawer: false
      })
    },
    tapMapMarker(e) {
      const id = e.detail.markerId
      let markers = this.data.allMarkers
      let {
        longitude,
        latitude,
        info,
        title
      } = markers.find(item => item.id == id)
      this.mapCtx.moveToLocation({
        longitude: longitude,
        latitude: latitude
      })
      this.setData({
        info: info,
        markerLocation: {
          longitude: longitude,
          latitude: latitude
        },
        drawerTitle: title,
        showInfo: true,
        showDrawer: true
      })
    },
    showLayersControl() {
      this.setData({
        showDrawer: true,
        showInfo: false
      })
      console.log(this.data.showDrawer, this.data)
    }
  }
})