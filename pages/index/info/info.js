// pages/index/info/info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: '核酸检测点信息'
    },
    showInfo:{
      type:Boolean,
      value:true
    },
    info: {
      type: Array,
      value: [{
        key: '场所类型',
        value: '免费检测点'
      }, {
        key: '营业时间',
        value: '12:00-23:00'
      }, {
        key: '详细地址',
        value: '浦口区宁六路219号南京信息工程大学沁园34栋东侧核酸检测点'
      }, ]
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
    navigate() {
      this.triggerEvent('navigate')
    }
  }
})