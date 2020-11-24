//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "bnrUrl": [{
      "url": "image/discount-banner.jpg"
    }, {
      "url": "image/draw-banner.jpg"
    }, {
      "url": "image/nursing-banner.jpg"
    }],
     dataList:[
      {
        goods_id:1,
        goods_name:'商品标题1',
        shop_img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        goods_xiaoliang:'0',
        goods_price:'60'
      },{
        goods_id:1,
        goods_title:'商品标题2',
        goods_img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        goods_xiaoliang:'0',
        goods_price:'70'
      }, {
        goods_id: 1,
        goods_title: '商品标题3',
        goods_img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        goods_xiaoliang: '0',
        goods_price: '80'
      }, {
        goods_id: 1,
        goods_title: '商品标题4',
        goods_img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        goods_xiaoliang: '0',
        goods_price: '90'
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        goods_xiaoliang: '0',
        goods_price: '110'
      }
    ],

    list: [],
    page: 1,
    pagesize: 10



  },


  //页面上拉触底事件
  onReachBottom: function(){
    console.log(123456)
    this.data.page++;
    this.getGoodsList();

  },



  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 





    //发起网络请求
  getGoodsList: function(){   
    let _this = this;
  wx.request({
  url: 'http://weixin.2004.com/api/goodslist', //仅为示例，并非真实的接口地址
  data:{
      page:_this.data.page,    //分页 页号
      size:_this.data.pagesize
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    let new_list = _this.data.list.concat(res.data.data.list)

    _this.setData({
      list:res.data.data.list,
      list: new_list
    })
  }
})
 
},



  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      name2: '2222'
    });
  },

  //商品详情
  goodsDetail:function(e){
    console.log(e)
    //获取被点击的 商品id
    let goods_id = e.currentTarget.id;
    //切换至 详情页
    wx.redirectTo({
      url: '/pages/detail/detail?id='+goods_id
    });
  },

   onLoad: function () {
    this.getGoodsList();
  },
})
