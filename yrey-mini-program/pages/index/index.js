//index.js
//获取应用实例
var app = getApp()
app.globalData.data++
console.log(app)
//var common = require('common.js')
Page({
  data: {
    src: 'https://pan.baidu.com/s/1N0aRkmosmxCVk5jiDeN4Dg',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    userInfo: {},
    postsList: [
      { id: 1, title: '世界那么大，最值得去的18个全球旅行地在此', category: '景点', views: '0', comments: '8', thumbses:'12', url: 'http://img.saihuitong.com/4029/img/3396427/165e54fc0c9.png-w480h320'}
    ],
    backgrounds: [{url:'http://img.saihuitong.com/4029/img/3396427/165e54fc0c9.png-w480h320',text:'坡峰岭的金秋'},
                 {url:'http://img.saihuitong.com/4029/img/3396427/1669ea13b6e.png-w480h320',text:'雪乡雪谷一生必去的地方'},                                           {url:'http://img.saihuitong.com/4029/img/3396427/large/1669e6d3331.jpg-w480h320',text:'婺源最美乡村'},                      
                 {url:'http://img.saihuitong.com/4029/img/3396427/1650a11d920.jpg?imageView2/1/w/1080/h/300/q/100/format/png',text:'趁年轻，51旅行'} 
                ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  error(e) {
    console.log(e.detail)
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  
  detail:function(){
    wx.navigateTo({
      url:'../detail/detail'
    })
  },
  onLoad: function () {
    this.ctx = wx.createCameraContext();
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      console.log(res); 
      }
    })
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  }
})
