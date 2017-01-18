var util = require('../../utils/util.js')
Page({
  data: {
    newsList:[],
    logs: [],
    //轮播图数据
     imgUrls: [      'http://oss.yrey.me/image/link/201612/02/532b6f0c-a667-4248-96ff-deb05ec39953.png',
'http://oss.yrey.me/image/link/201612/02/c505b5c4-b87f-44a9-8faa-a3a5b2125bbe.png',
'http://oss.yrey.me/image/link/201612/02/c919b016-7cd1-4c17-9ef4-49b2f20f7bc0.png',
'http://oss.yrey.me/image/link/201612/02/ec61c5b5-d43c-4dc5-9071-2d110a59a270.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
   loadData: function (){
      var that = this
      wx.request({
          url: 'http://www.yrey.me/do/designers?&pageNo=1&pageSize=20',
          data: {},
          header: {
              'Content-Type': 'application/json'
          },
          success: function(res) {
            console.log(res.data);
               if(!res.data){
                    return false                
               }
                var dataArr = that.data.newsList
                var newData = dataArr.concat(res.data);
                that.setData({ newsList:newData })
          },
          fail: function(res){
                    
          },
          complete: function(){
                 
          }
      })
  },
  onLoad: function () {
     this.loadData();
  }
})
