<template lang='pug'>
  div.newperson
    p {{ '新手指南>购物流程' }}
    div
      h2 {{ '特卖购物流程:' }}
      ul
        li
          img(:src='baseURL+"static/images/help_zhucedenglu_content_icon@3x.png"')
          span {{ '注册/登录' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_qianggoushangpin_content_icon@3x.png"')
          span {{ '抢购商品' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_gouwuchecaozuo_content_icon@3x.png"')
          span {{ '购物车操作' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_xiadanzhifu_content_icon@3x.png"')
          span {{ '下单支付' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_shouhuotuihuo_content_icon@3x.png"')
          span {{ '收货/退货' }}
    div
      h2 {{ '拼团购物流程:' }}
      ul
        li
          img(:src='baseURL+"static/images/help_zhucedenglu_content_icon@3x.png"')
          span {{ '注册/登录' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_qianggoushangpin_content_icon@3x.png"')
          span {{ '抢购商品' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_chenggongkaituan_content_icon@3x.png"')
          span {{ '成功开团/参团' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_yaoqingzhuli_content_icon@3x.png"')
          span {{ '邀请助理' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_renshudaidao_content_icon@3x.png"')
          span {{ '人数达到成团' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_shouhuotuihuo_content_icon@3x.png"')
          span {{ '收货/退款' }}
    div
      h2 {{ '一份抽购物流程:' }}
      ul
        li
          img(:src='baseURL+"static/images/help_zhucedenglu_content_icon@3x.png"')
          span {{ '注册/登录' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_qianggoushangpin_content_icon@3x.png"')
          span {{ '抢购商品' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_1fenqiankaituan_content_icon@3x.png"')
          span {{ '1分钱成功开团' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_yaoqingzhuli_content_icon@3x.png"')
          span {{ '邀请助理' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_renshudaidao_content_icon@3x.png"')
          span {{ '人数达到成团' }}
        li 
          img(:src='baseURL+"static/images/help_jiantou_content_icon@3x.png"')
        li
          img(:src='baseURL+"static/images/help_kaijiang_content_icon@3x.png"')
          span {{ '开奖' }}
</template>

<script>
import baseURL from '@/baseURL'
export default {
  name: 'Newperson',
  data () {
    return {
      msg: 'Welcome to Your Vue.js footer',
      baseURL:''
    }
  },
  created(){
    this.baseURL= baseURL;
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import "~@/lib/reset.scss";
  .newperson {
    p {
      @include rect(860px,55px);
      border-bottom: 1px solid #DEE1E7;
      color:#737373;
      font-size:20px;
      margin-bottom: 35px;
    }
    div {
      margin-bottom: 50px;
      padding:0 10px;
      h2 {
        font-weight: normal;
        color:#737373;
        font-size:18px;
        margin-bottom: 37px;
      }
      ul {
        @include flexbox();
        
        li:nth-of-type(n) {
          @include rect(96px,86px);
          @include justify-content();
          @include align-items();
          @include flexbox();
          @include flex-direction(column);
          img {
            @include rect(50px,50px);
            margin-bottom: 13px;
          }
          span {
            color:#4D4D4D;
            font-size: 14px;
          }
        }

        li:nth-of-type(2n) {
          @include rect(30px,86px);
          img {
            @include rect(30px,5px);
        }
      }
    }
  }
}
 
</style> 
