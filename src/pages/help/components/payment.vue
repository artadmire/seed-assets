<template lang='pug'>
  div.payment
    p {{ '支付方式' }}
    div
      a(src='') 
        img(:src='baseURL+"static/images/help_weixinzhifu_content_icon@3x.png"')
      a(src='')
        img(:src='baseURL+"static/images/help_zhifubao_content_icon@3x.png"')
      a(src='')
        img(:src='baseURL+"static/images/help_yizhifu_content_icon@3x.png"')
      a(src='')
        img(:src='baseURL+"static/images/help_huabeifenqi_content_icon@3x.png"')
</template>
<script>
import baseURL from '@/baseURL'
export default {
  name: 'Payment',
  data () {
    return {
      msg: 'Welcome to Your Vue.js footer',
      baseURL:''
    }
  },
  created(){
    this.baseURL = baseURL;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import "~@/lib/reset.scss";
 .payment {
    min-height: 800px;
    p {
      @include rect(860px,55px);
      border-bottom: 1px solid #DEE1E7;
      color:#737373;
      font-size:20px;
      margin-bottom: 40px;
    }
    div {
      padding:0 10px;
      img {
        @include rect(96px,96px);
        margin-right: 20px;
      }
    }
 }
 
</style> 
