// pages/study/book.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_active: 0,
    readList: [],
    wordList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // app.globalData.bookInfo = {
    //   'grade': _this.data.gradeRadio,
    //   'bid': _this.data.textbookRadio,
    //   'chapter': _this.data.unitRadio
    // }
    this.initWord()
    this.initRead()
  },

  initWord: function () {
    const _this = this
    app.tools.request({
      url: 'word/getWithGBC?grade=' + app.globalData.bookInfo.grade + '&bid=' + app.globalData.bookInfo.bid + '&chapter=' + app.globalData.bookInfo.chapter,
      method: "POST",
      success: function (r3) {
        _this.setData({
          wordList: r3.data.content.result
        });
      }
    });
  },
  initRead: function(){
    const _this = this
    app.tools.request({
      url: 'artical/getWithGBC?grade=' + app.globalData.bookInfo.grade + '&type=QUESTION_TYPE_2',
      method: "POST",
      success: function (r3) {
        _this.setData({
          readList: r3.data.content.result
        });
      }
    });
  },
  openWords: function (e) {
    const _this = this
    let id = e.currentTarget.dataset.word;
    app.tools.request({
      url: 'artical/checPayed?aid=' + id,
      method: "POST",
      success: function (r1) {
        var cont = r1.data.content.result;
        console.log(cont)
        // if (!cont) {
        //   //2、没有支付过的，需要先支付（弹框询问是否支付）
        //   wx.showModal({
        //     content: '该阅读尚未支付学币，是否支付？',
        //     showCancel: true,
        //     confirmText: '确定',
        //     confirmColor: '#72B9C3',
        //     success: function (res) {
        //       if (res.confirm) {
        //         //3、去支付
        //         that.sureZhifuYuedu(id);
        //       }
        //     }
        //   })
        // } else {
          //已经支付
          wx.navigateTo({
            url: '/pages/book/words?word=' + id,
          })
        // }
        wx.hideLoading();
      }
    });
  },
  openReads: function(e){
    // /pages/book / reads ? id = {{ item.id }}
    // TODO 准备支付然后跳转
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