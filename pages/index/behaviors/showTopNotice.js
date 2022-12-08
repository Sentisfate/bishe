module.exports = Behavior({
  data: {
    showTopNotice: true
  },
  methods: {
    closeNotice() {
      console.log(this.data.showTopNotice)
      this.setData({
        showTopNotice: false
      })
    }
  }
})