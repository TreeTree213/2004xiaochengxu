// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
   is_shoucang:0,
    goods_info: { goods_id: 1, goods_title: "商品标题1", goods_price: '100', goods_yunfei: 0, goods_kucun: 100, goods_xiaoliang: 1, content:'商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情'},
    isLike: true,
    // banner
    
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

  },



  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    console.log(1);
    console.log(options);
    let goods_id = options.id;
  wx.request({
    url:"http://weixin.2004.com/api/goodsdetail",
    data:{
      goods_id:goods_id
    },
    success:function(res){
      console.log(res);
      
      _this.setData({
        // list:data
        list:res.data

        })
      }
    })
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