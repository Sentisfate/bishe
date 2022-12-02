// components/drawer/index.js
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //是否显示抽屉
    show:{
      type:Boolean,
      value:'false'
    },
    // 设置弹出层的高度
    height:{
      type:String,
      value:'500rpx'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    close(e){
      const detail={
        e:e,
        msg:'点击了mask遮盖层，关闭drawer',
      }
      this.triggerEvent('close',detail)
    }
  }
})
