// pages/home/home.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeTab: 0,
    weui_tabs_swiper_height: 520,
    tuijian_banner_height: 120,
    indicatorDots: true,
    previousMargin_xin: 0,
    nextMargin_xin: 20,
    previousMargin_shi: 0,
    nextMargin_shi: 20,
    previousMargin_mian: 0,
    nextMargin_mian: 20,
    xinshangCourse1: [],
    xinshangCourse2: [],
    remenCourse1: [],
    remenCourse2: [],
    mianfeiCourse1: [],
    mianfeiCourse2: [],
    learn_line_tab_active: 1,
    learnLines: [],
    columns: [],
    mianfei_tab_active: 1,
    free_list: [],
    shizhan_banners: [],
    shizhan_banner_height: 150,
    shizhan_tab_active: 1,
    shizhan_list: [],
    zhuanlan_tab_active: 1
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const titles = ['推荐', '免费课', '实战课', '金职位', '专栏']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
    const res = wx.getSystemInfoSync()
    try {
      const weui_tabs_swiper_height = res.windowHeight - 90
      const tuijian_banner_height = (res.windowWidth - 50)/3
      this.setData({weui_tabs_swiper_height, tuijian_banner_height})
    } catch (e) {
      console(e)
      const weui_tabs_swiper_height = 520
      this.setData({weui_tabs_swiper_height})
    }

    const xinshangCourse = [
      {
        mark: "新",
        title:"javascript实现数据结构与算法javascript实现数据结构与算法javascript实现数据结构与算法",
        level:"中级",
        study_num:"240",
        comment_num:"13",
        price:"288",
        cover_src:"../../static/images/xin1.png"
      },
      {
        mark: "新",
        title:"体系课-数据可视化入门到精通-打造前端差异化竞争力",
        level:"中级",
        study_num:"257",
        comment_num:"13",
        price:"999",
        cover_src:"../../static/images/xin2.jpg"
      },
      {
        mark: "新",
        title:"从零开始学调优-Java 全技术栈 性能调优",
        level:"中级",
        study_num:"75",
        comment_num:"2",
        price:"488",
        cover_src:"../../static/images/xin3.png"
      },
      {
        mark: "升",
        title:"快速搞定前端技术一面 匹配大厂面试要求",
        level:"初级",
        study_num:"1135",
        comment_num:"586",
        price:"299",
        cover_src:"../../static/images/xin4.png"
      },
      {
        mark: "新",
        title:"Java企业级支付全家桶设计与实战",
        level:"初级",
        study_num:"124",
        comment_num:"3",
        price:"388",
        cover_src:"../../static/images/xin5.png"
      },
      {
        mark: "新",
        title:"再学JavaScript ES(6-11)全版本语法大全",
        level:"初级",
        study_num:"129",
        comment_num:"6",
        price:"299",
        cover_src:"../../static/images/xin6.png"
      },
      {
        mark: "热",
        title:"(毕设项目)Vue+Go前端后端一体化 企业级微服务网关项目",
        level:"中级",
        study_num:"240",
        comment_num:"13",
        price:"348",
        cover_src:"../../static/images/xin7.png"
      },
      {
        mark: "升",
        title:"全流程开发 TP6.0实战高并发电商服务系统",
        level:"中级",
        study_num:"659",
        comment_num:"394",
        price:"448",
        cover_src:"../../static/images/xin8.png"
      }
    ]
    const xinshangCourse1 = xinshangCourse.slice(0, 4)
    const xinshangCourse2 = xinshangCourse.slice(4, 8)
    this.setData({xinshangCourse1, xinshangCourse2})

    const remenCourse = [
      {
        mark: "升",
        title:"全面系统Python3.8入门+进阶 (程序员必备第二语言)",
        level:"初级",
        study_num:"11472",
        comment_num:"5210",
        price:"366",
        cover_src:"../../static/images/re1.jpg"
      },
      {
        mark: "升",
        title:"编程必备基础 计算机组成原理+操作系统+计算机网络",
        level:"中级",
        study_num:"4369",
        comment_num:"1994",
        price:"236",
        cover_src:"../../static/images/re2.jpg"
      },
      {
        mark: "升",
        title:"Vue2.5-2.6-3.0 开发去哪儿网App 从零基础入门到实战项目开发",
        level:"中级",
        study_num:"8019",
        comment_num:"4551",
        price:"266",
        cover_src:"../../static/images/re3.jpg"
      },
      {
        mark: "",
        title:"前端框架及项目面试 聚焦Vue/React/Webpack",
        level:"中级",
        study_num:"1072",
        comment_num:"412",
        price:"399",
        cover_src:"../../static/images/re4.jpg"
      },
      {
        mark: "",
        title:"uni-app入门到实战 以项目为导向 掌握完整开发流程",
        level:"入门",
        study_num:"317",
        comment_num:"12",
        price:"348",
        cover_src:"../../static/images/re5.png"
      },
      {
        mark: "",
        title:"玩转算法系列--数据结构精讲 更适合0算法基础入门到进阶（java版）",
        level:"中级",
        study_num:"6041",
        comment_num:"2857",
        price:"299",
        cover_src:"../../static/images/re6.jpg"
      },
      {
        mark: "",
        title:"Vue Element+Node.js开发企业通用管理后台系统",
        level:"高级",
        study_num:"1396",
        comment_num:"745",
        price:"348",
        cover_src:"../../static/images/re7.png"
      },
      {
        mark: "",
        title:"React开发简书项目 从零基础入门到实战",
        level:"中级",
        study_num:"3655",
        comment_num:"2094",
        price:"299",
        cover_src:"../../static/images/re8.jpg"
      }
    ]
    const remenCourse1 = remenCourse.slice(0, 4)
    const remenCourse2 = remenCourse.slice(4, 8)
    this.setData({remenCourse1, remenCourse2})

    const mianfeiCourse = [
      {
        mark: "",
        title:"初识Python",
        level:"初级",
        study_num:"11472",
        comment_num:"5210",
        price:"0",
        cover_src:"../../static/images/mianfei1.jpg"
      },
      {
        mark: "",
        title:"Java入门第一季",
        level:"中级",
        study_num:"4369",
        comment_num:"1994",
        price:"0",
        cover_src:"../../static/images/mianfei2.jpg"
      },
      {
        mark: "",
        title:"3小时速成 Vue2.x 核心技术",
        level:"中级",
        study_num:"8019",
        comment_num:"4551",
        price:"0",
        cover_src:"../../static/images/mianfei3.jpg"
      },
      {
        mark: "",
        title:"Java高并发之魂：synchronized深度解析",
        level:"中级",
        study_num:"1072",
        comment_num:"412",
        price:"0",
        cover_src:"../../static/images/mianfei4.jpg"
      },
      {
        mark: "",
        title:"PS大神通关教程",
        level:"入门",
        study_num:"317",
        comment_num:"12",
        price:"0",
        cover_src:"../../static/images/mianfei5.jpg"
      },
      {
        mark: "",
        title:"学习软件测试的进阶之路",
        level:"中级",
        study_num:"6041",
        comment_num:"2857",
        price:"0",
        cover_src:"../../static/images/mianfei6.png"
      },
      {
        mark: "",
        title:"入门微信小程序开发",
        level:"高级",
        study_num:"1396",
        comment_num:"745",
        price:"0",
        cover_src:"../../static/images/mianfei7.jpg"
      },
      {
        mark: "",
        title:"PS入门教程——新手过招",
        level:"中级",
        study_num:"3655",
        comment_num:"2094",
        price:"0",
        cover_src:"../../static/images/mianfei8.jpg"
      }
    ]
    const mianfeiCourse1 = mianfeiCourse.slice(0, 4)
    const mianfeiCourse2 = mianfeiCourse.slice(4, 8)
    this.setData({mianfeiCourse1, mianfeiCourse2})
    
    const learnLines = [
      {
        title:"计算机基础学习路线",
        courses:"4",
        introduction:"本路线精选程序员必修的计算机基础核心知识，有序打基础职场走更远。",
        comment_num:"10152",
        step:"4",
        cover_src:"https://img1.mukewang.com/szimg/5d8b2a0608bd096301400140-140-140.jpg"
      },
      {
        title:"MySQL数据库直通车：从入门到面试",
        courses:"4",
        introduction:"一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
        comment_num:"5238",
        step:"4",
        cover_src:"https://img1.mukewang.com/szimg/5da05bd40878ad7301400140-140-140.jpg"
      },
      {
        title:"前端面试求职跳槽通关路线",
        courses:"4",
        introduction:"路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
        comment_num:"9371",
        step:"3",
        cover_src:"https://img2.mukewang.com/szimg/5da92726082156e501400140-140-140.jpg"
      },
      {
        title:"Go语言从入门到达人之路",
        courses:"8",
        introduction:"零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
        comment_num:"4959",
        step:"5",
        cover_src:"https://img1.mukewang.com/szimg/5d919e87087c044201400140-140-140.jpg"
      }
    ]
    this.setData({learnLines})

    const columns = [
      {
        title:"Python 源码深度剖析",
        introduction:"45节 · 突破技术瓶颈，迈向更高岗位",
        author:" fasionchan",
        position:"资深 Python 研发工程师 ",
        price:"49.00",
        subscribe: "193",
        cover_src:"https://img2.mukewang.com/5eb68ac10001029202940333.jpg"
      },
      {
        title:"零基础学透网络编程",
        introduction:"32节 · 学好通用知识，提升技术竞争力",
        author:"  慕用5381213",
        position:"资深软件架构师",
        price:"42.00",
        subscribe: "19",
        cover_src:"https://img.mukewang.com/5ed8c19b000108e602940333.jpg"
      },
      {
        title:"趣味剖析Spring5核心原理",
        introduction:"48节 · Java工程师提升必修课 ",
        author:"  David",
        position:"资深架构师",
        price:"49.00",
        subscribe: "71",
        cover_src:"https://img4.mukewang.com/5ec1f3910001893402940333.jpg"
      }
    ]
    this.setData({columns})

    const free_list = [
      {
        mark: "",
        title:"初识Python",
        level:"初级",
        study_num:"11472",
        comment_num:"5210",
        price:"0",
        cover_src:"../../static/images/mianfei1.jpg"
      },
      {
        mark: "",
        title:"Java入门第一季",
        level:"中级",
        study_num:"4369",
        comment_num:"1994",
        price:"0",
        cover_src:"../../static/images/mianfei2.jpg"
      },
      {
        mark: "",
        title:"3小时速成 Vue2.x 核心技术",
        level:"中级",
        study_num:"8019",
        comment_num:"4551",
        price:"0",
        cover_src:"../../static/images/mianfei3.jpg"
      },
      {
        mark: "",
        title:"Java高并发之魂：synchronized深度解析",
        level:"中级",
        study_num:"1072",
        comment_num:"412",
        price:"0",
        cover_src:"../../static/images/mianfei4.jpg"
      },
      {
        mark: "",
        title:"PS大神通关教程",
        level:"入门",
        study_num:"317",
        comment_num:"12",
        price:"0",
        cover_src:"../../static/images/mianfei5.jpg"
      },
      {
        mark: "",
        title:"学习软件测试的进阶之路",
        level:"中级",
        study_num:"6041",
        comment_num:"2857",
        price:"0",
        cover_src:"../../static/images/mianfei6.png"
      },
      {
        mark: "",
        title:"入门微信小程序开发",
        level:"高级",
        study_num:"1396",
        comment_num:"745",
        price:"0",
        cover_src:"../../static/images/mianfei7.jpg"
      },
      {
        mark: "",
        title:"PS入门教程——新手过招",
        level:"中级",
        study_num:"3655",
        comment_num:"2094",
        price:"0",
        cover_src:"../../static/images/mianfei8.jpg"
      }
    ]
    this.setData({free_list})

    const shizhan_banners = [
      {
        title: 1,
        src: "https://img.mukewang.com/5ee24f3000017d0218720764.jpg"
      },
      {
        title: 2,
        src: "https://img.mukewang.com/5ee6d591000182e418720764.jpg"
      },{
        title: 3,
        src: "https://img.mukewang.com/5ee0af4b0001fbda18720764.jpg"
      },
    ]
    const shizhan_banner_height = (res.windowWidth - 50)/2.8
    this.setData({shizhan_banners, shizhan_banner_height})

    const shizhan_list = [
      {
        mark: "新",
        title:"大前端：前端全栈加强版！前端全栈+全周期+多端（升级Vue3.0）",
        level:"初级",
        study_num:"11472",
        comment_num:"5210",
        price:"2680.00",
        cover_src:"https://img.mukewang.com/climg/5dbbdc8a0994688d06000338.jpg"
      },
      {
        mark: "新",
        title:"Java全栈工程师：从Java后端到全栈，高级电商全栈系统大课",
        level:"中级",
        study_num:"4369",
        comment_num:"1994",
        price:"3680.00",
        cover_src:"https://img.mukewang.com/szimg/5ddba58609d9d01c06000338.jpg"
      },
      {
        mark: "新",
        title:"大前端：前端全栈加强版！前端全栈+全周期+多端（升级Vue3.0）",
        level:"初级",
        study_num:"11472",
        comment_num:"5210",
        price:"2680.00",
        cover_src:"https://img.mukewang.com/climg/5dbbdc8a0994688d06000338.jpg"
      },
      {
        mark: "新",
        title:"Java全栈工程师：从Java后端到全栈，高级电商全栈系统大课",
        level:"中级",
        study_num:"4369",
        comment_num:"1994",
        price:"3680.00",
        cover_src:"https://img.mukewang.com/szimg/5ddba58609d9d01c06000338.jpg"
      },
      {
        mark: "新",
        title:"大前端：前端全栈加强版！前端全栈+全周期+多端（升级Vue3.0）",
        level:"初级",
        study_num:"11472",
        comment_num:"5210",
        price:"2680.00",
        cover_src:"https://img.mukewang.com/climg/5dbbdc8a0994688d06000338.jpg"
      },
      {
        mark: "新",
        title:"Java全栈工程师：从Java后端到全栈，高级电商全栈系统大课",
        level:"中级",
        study_num:"4369",
        comment_num:"1994",
        price:"3680.00",
        cover_src:"https://img.mukewang.com/szimg/5ddba58609d9d01c06000338.jpg"
      },
      {
        mark: "新",
        title:"大前端：前端全栈加强版！前端全栈+全周期+多端（升级Vue3.0）",
        level:"初级",
        study_num:"11472",
        comment_num:"5210",
        price:"2680.00",
        cover_src:"https://img.mukewang.com/climg/5dbbdc8a0994688d06000338.jpg"
      },
      {
        mark: "新",
        title:"Java全栈工程师：从Java后端到全栈，高级电商全栈系统大课",
        level:"中级",
        study_num:"4369",
        comment_num:"1994",
        price:"3680.00",
        cover_src:"https://img.mukewang.com/szimg/5ddba58609d9d01c06000338.jpg"
      },
    ]
    this.setData({shizhan_list})
  },

  /**
   * 点击学习路线tab时触发
   * @param {*} e 
   */

  learn_line_tab_click(e) {
    const learn_line_tab_active = e.currentTarget.dataset['index']
    this.setData({learn_line_tab_active})
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
   * 新上好课swiper滚动时触发
   * @param {*} e 
   */
  changeSwiper: function (e) {
    switch (e.currentTarget.dataset['index']) {
      case "xin" :
        e.detail.current === 0 && this.setData({
          previousMargin_xin: 0,
          nextMargin_xin: 20
        })
        e.detail.current === 1 && this.setData({
          previousMargin_xin: 20,
          nextMargin_xin: 0
        })
        break
      case "shi" :
        e.detail.current === 0 && this.setData({
          previousMargin_shi: 0,
          nextMargin_shi: 20
        })
        e.detail.current === 1 && this.setData({
          previousMargin_shi: 20,
          nextMargin_shi: 0
        })
        break
      case "mian" :
        e.detail.current === 0 && this.setData({
          previousMargin_mian: 0,
          nextMargin_mian: 20
        })
        e.detail.current === 1 && this.setData({
          previousMargin_mian: 20,
          nextMargin_mian: 0
        })
        break
      default: 
        break
    }
    
  },

  /**
   * 点击免费课tab时触发
   * @param {*} e 
   */

  mianfei_tab_click(e) {
    const mianfei_tab_active = e.currentTarget.dataset['index']
    this.setData({mianfei_tab_active})
  },

  /**
   * 点击实战课tab时触发
   * @param {*} e 
   */

  shizhan_tab_click(e) {
    const shizhan_tab_active = e.currentTarget.dataset['index']
    this.setData({shizhan_tab_active})
  },

  /**
   * 点击专栏tab时触发
   * @param {*} e 
   */

  zhuanlan_tab_click(e) {
    const zhuanlan_tab_active = e.currentTarget.dataset['index']
    this.setData({zhuanlan_tab_active})
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