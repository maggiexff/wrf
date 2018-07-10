//index.js
//获取应用实例
const app = getApp()
var pro=0
var timer=null
Page({
  data: {
    motto: 'Hello,我的第一个小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mvalue: pro,
    bttitle:"click me",
    swiperCurrent: 0,

    indicatorDots: true,

    autoplay: true,

    interval: 3000,

    duration: 800,

    circular: true,

    imgUrls: [
      '../../img/1.jpg',

      '../../img/2.jpg',

      '../../img/3.jpg',

      '../../img/4.jpg',

    ],

    links: [

      '../user/user',

      '../user/user',

      '../user/user'

    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scrprogress:function(){
    var that = this;
    if(timer==null){
      that.setData({
        bttitle:"stop me"
        });
      timer = setInterval(function () {
        pro++;
        that.setData({
          mvalue: pro
        });
        if (pro >= 80) {
          clearInterval(timer);
        }
      }, 200)
    }else{
      that.setData({
        bttitle: "click me"
      });
      clearInterval(timer);
      timer=null;
    }
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //轮播图的切换事件

  swiperChange: function (e) {

    this.setData({

      swiperCurrent: e.detail.current

    })

  },

  //点击指示点切换

  chuangEvent: function (e) {

    this.setData({

      swiperCurrent: e.currentTarget.id

    })

  },

  //点击图片触发事件

  swipclick: function (e) {

    console.log(this.data.swiperCurrent);

    wx.switchTab({

      url: this.data.links[this.data.swiperCurrent]

    })

  },
  
})
