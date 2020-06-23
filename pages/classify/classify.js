// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vtabs: [],
    activeTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const titles = ['前端开发', '后端开发', '移动开发',
    '计算机基础', '前沿技术', '云计算&大\r\n数据', 
    '运维&测试', '数据库', 'UI设计&多\r\n媒体', 
    '游戏', '全栈工程师']
    const vtabs = titles.map(item => ({title: item}))
    this.setData({vtabs})
  },

  /**
   * 点击tabs触发
   */
  onTabCLick(e) {
    const activeTab = e.detail.index
    this.setData({activeTab})
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