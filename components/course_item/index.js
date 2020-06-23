// components/course_item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mark: { type: String, value: '' },
    title: { type: String, value: '' },
    level: { type: String, value: '' },
    study_num: { type: String, value: '' },
    comment_num: { type: String, value: '' },
    price: { type: String, value: '' },
    cover_src: { type: String, value: '' }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mark_class: 'mark_class1',
    display_price: ''
  },

  lifetimes: {
    attached: function created() {
      switch (this.data.mark) {
        case "新" :
          this.setData({
            mark_class: 'mark_class1'
          })
          break
        case "热" :
          this.setData({
            mark_class: 'mark_class2'
          })
          break
        case "升" :
          this.setData({
            mark_class: 'mark_class3'
          })
          break
        default:
          this.setData({
            mark_class: 'mark_class4'
          })
          break
      }
      this.data.price === '0' ? this.setData({display_price: '免费'}) : this.setData({display_price: `￥${this.data.price}`})
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
