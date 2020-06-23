// components/column_item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: { type: String, value: '' },
    introduction: { type: String, value: '' },
    author: { type: String, value: '' },
    position: { type: String, value: '' },
    price: { type: String, value: '' },
    subscribe: { type: String, value: '' },
    cover_src: { type: String, value: '' }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  lifetimes: {
    attached: function created() {
      
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
