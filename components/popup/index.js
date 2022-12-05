// components/popup/index.js

// show 属性用于切换显示或隐藏弹框
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPopup:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close(){
      this.setData({
        showPopup:false
      })
    },
    toList(){
      this.setData({
        showPopup:false
      })
      wx.navigateTo({
        url: '/pages/list/list',
      })
    }
  },
  observers:{
    'show':function(val){
      this.setData({
        showPopup:val
      })
    }
  }
})
