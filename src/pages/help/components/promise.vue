<template lang='pug'>
  div.promise
    p {{ '购物承诺' }}
    div
      ul
        li
          a(href='')
            img(:src='baseURL+"static/images/help_pinpaitemai_content_icon@3x.png"')
            span {{ '品牌特卖' }}
        li
          a(href='')
            img(:src='baseURL+"static/images/help_zhnegpin_content_icon@3x.png"')
            span {{ '100%正品' }}
        li
          a(href='')
            img(:src='baseURL+"static/images/help_quanchangbaoyou_content_icon@3x.png"')
            span {{ '全场包邮' }}
        li
          a(href='')
            img(:src='baseURL+"static/images/help_48hour_content_icon@3x.png"')
            span {{ '48小时发货' }}
        li
          a(href='')
            img(:src='baseURL+"static/images/help_7tian_content_icon@3x.png"')
            span {{ '7天退货保障' }}
</template>
<script>
import baseURL from '@/baseURL'
export default {
  name: 'Promise',
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
 .promise {
    min-height: 800px;
    p {
      @include rect(860px,55px);
      border-bottom: 1px solid #DEE1E7;
      color:#737373;
      font-size:20px;
      margin-bottom: 38px;
    }
    div {
      padding:0 10px;
      ul {
        @include flexbox();
        li {
          a {
            display: block;
            @include rect(120px,120px);
            @include flexbox();
            @include flex-direction(column);
            @include align-items(center);
            @include justify-content(space-between);
            img {
              @include rect(80px,80px);
              
            }
            span {
              line-height: 25px;
              color:#4A4A4A;
              font-size:18px;
            }
          }
        }

      }
    }
 }
 
</style> 
