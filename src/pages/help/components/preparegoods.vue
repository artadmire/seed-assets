<template lang='pug'>
  div.prepare-goods
    p {{ '配送方式>配送服务' }}
    div
      h2 {{ '配送方式' }}
      span {{ '爆好货与多家快递公司合作配送商品，爆好货目前不提供自选物流的服务，我们会根据订单中的收货地址和商品种类选择最合适的物流公司为会员配送。' }}
    div
      h2 {{ '配送范围' }}
      span {{ '爆好货配送范围覆盖全国大部分地区（港澳台地区除外）。' }}
    div
      h2 {{ '配送费用' }}
      span {{ '全场包邮：爆好货特卖全场在售商品，中国大陆地区（新疆、西藏、内蒙古地区除外）订单首次发货免运费。' }}
    div
      h2 {{ '发货时间' }}
      span {{ '下单成功后除特殊商品外，商家将在48小时内发货。以下情况除外：' }}
      p {{ '1.预售及其他特殊情形商品，商品会在约定发货时间内安排发货，发货时间以商家商品描述页面为准。' }}
      p {{ '2.抽奖类目产品，系统会在抽奖日自动抽取获奖用户，一等奖用户将会安排发货，二等奖用户系统将会全额退款并赠送代金券，具体活动规则请查看抽奖活动详情页。' }}
    div
      h2 {{ '配送时间' }}
      p {{ '配送时间以各地区预计配送时间为准，订单发货当天不计算在配送时间内。如：天津地区配送服务预计送货时间为商品发出后2-4天送达。会员订单10日发货，则预计到货时间为12日-14日。有特别说明的送货时间，配送将按照实际情况顺延。' }}
      p {{ '此外，如果会员已成功订购爆好货的商品，在商品送出后，可以登陆“我的交易—订单管理—订单跟踪”中查询到购买商品的配送情况。' }}
    div
      h2 {{ '配送追踪' }}
      p {{ '如会员已成功订购爆好货的商品，可以登陆：我的交易—订单管理，找到相应的订单号，查看订单状态，在订单状态中查询到订单的配送情况，或者到相应的配送物流公司，输入配送物流单号，便可查询到商品的配送详情。' }}

</template>
<script>
export default {
  name: 'Preparegoods',
  data () {
    return {
      msg: 'Welcome to Your Vue.js footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import "~@/lib/reset.scss";
 .prepare-goods {
    min-height: 800px;
    p {
      @include rect(860px,55px);
      border-bottom: 1px solid #DEE1E7;
      color:#737373;
      font-size:20px;
      margin-bottom: 39px;
    }
    div {
      margin-bottom:40px;
      display: block;
      padding:0 10px;
      h2 {
        font-weight: normal;
        font-size: 18px;
        color:#333234;
        line-height: 26px;
      }
      span,p {
        font-size: 16px;
        color:#737373;
        line-height: 26px;
        @include rect(840px,auto);
        border:0;
        margin:0;
        padding:0;

      }
     
    }
   
 }
 
</style> 
