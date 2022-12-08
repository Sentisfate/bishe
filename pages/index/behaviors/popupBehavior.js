module.exports=Behavior({
  data:{
        // popup弹出层
        showPopup: false,
  },
  methods:{
    showPopup(){
      this.setData({
        showPopup:true
      })
    },
    closePopup(){
      this.setData({
        showPopup:false
      })
    }
  }
})