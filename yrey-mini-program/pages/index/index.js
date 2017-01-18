//index.js
//获取应用实例
var app = getApp()
app.globalData.data++
console.log(app)
//var common = require('common.js')
Page({
  onShareAppMessage: function () {
    return {
      title: '你的人生',
      desc: '一键get好机会，从此到巅峰。。。',
      path: '/pages/index?id=123'
    }
  },
  data: {
    motto: 'Welcome to YREY',
    name: 'zhangdong',
    userInfo: {},
    imgList:['http://www.yrey.me/userguide/img/page1.png','http://www.yrey.me/userguide/img/page2.png','http://www.yrey.me/userguide/img/page3.png','http://www.yrey.me/userguide/img/page4.png','http://www.yrey.me/userguide/img/page5.png','http://www.yrey.me/userguide/img/page6.png',]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  detail:function(){
    wx.navigateTo({
      url:'../detail/detail'
    })
  },
  onLoad: function () {
    
    console.log('onLoad')
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
