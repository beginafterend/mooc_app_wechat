// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const titles = ['推荐', '关注']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
    const res = wx.getSystemInfoSync()
    const weui_tabs_swiper_height = res.windowHeight - 40
    this.setData({weui_tabs_swiper_height})
  },

  /**
   * 点击 tab 时触发
   * @param {*} e 
   */
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  /**
   * 内容区域滚动导致 tab 变化时触发
   * @param {*} e 
   */
  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})