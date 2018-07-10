var touchTime
Page({
  data: {
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
 
  touchStart: function (e) {
    let that = this;
    that.setData({
      touch_start: e.timeStamp
    })
    //console.log(e.timeStamp/1000 + 's- 开始时间')
  },
  //按下事件结束  
  touchEnd: function (e) {
    let that = this;
    that.setData({
      touch_end: e.timeStamp
    })
    //console.log(e.timeStamp/1000 + 's- 结束时间')
    
  }, 
  longTap: function (e) {
      let that = this;
      touchTime = (that.data.touch_end - that.data.touch_start)/1000;
      that.setData({
        bttitle: '用时'+touchTime+'s'
      });
      // if(touchTime>1200){
      //   wx.showToast({
      //     title: '成功',
      //     icon: 'success',
      //     duration: 2000//持续的时间
      //   });
      //console.log('您按下 '+touchTime/1000+' s')
      // }
      // if(touchTime>300){
      //   console.log("hahh")
      // }
  },
})

