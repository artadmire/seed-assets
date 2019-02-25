<template lang='pug'>
  div.return
    p {{ '售后服务>退款和时效' }}
    div
      span {{ '问：退款退到哪里，什么时候到账?' }}
      div
        span {{ '答：' }}
        p {{ '爆好货将在签收您回寄退货商品的三天内办理退款。所有支付方式均原路径退回至原支付方式。办理退款后，储蓄卡3-5个工作日到账，信用卡7-15个工作日到账。' }} 
    div
      span {{ '问：订单参加了优惠活动如何计算退款？' }}
      div
        span {{ '答：' }}
        p {{ '参加满减、打折、支付优惠等活动的订单，优惠金额按比例（商品单价/订单金额）分摊到每个商品上。如产生退货，按商品金额扣除活动优惠后的小计金额退回。【举例说明】订单参加了某品牌专场满500元减100元的活动，订单中有A商品200元，B商品300元，订单金额500元，满减优惠100元，则A商品享受的优惠是100*(200/500）=40（元），小计金额：160元；B商品享受的优惠是100 *（300/500）=60（元），小计金额：240元。小计金额可在自助退货页面查询。' }} 
    div
      span {{ '温馨提示：' }}
      p {{ '1、若订单遇退款情况，仅按照实际支付金额进行结算，优惠金额将被收回作废。' }}
      p {{ '2、订单如使用优惠券或参加打折满减活动，退货后按照商品小计金额处理退款。' }}
      p {{ '4、退款周期仅供您参考，具体退款周期可能会受银行、支付机构等相关因素影响。' }}
      p {{ '如有疑问请与爆好货售后服务中心联系。' }}
    div
      p {{ '服务热线：010-6298-1200' }}
      p {{ '受理时间：工作日9:00～19:00' }}
</template>
<script>
export default {
  name: 'Return',
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
 .return {
    min-height: 776px;
    &>p {
      @include rect(860px,55px);
      border-bottom: 1px solid #DEE1E7;
      color:#737373;
      font-size:20px;
    }
    &>div {
      padding:0 10px;
      margin-top:40px;
      &>span {
        color:#4A4A4A;
        font-size: 18px;
        line-height: 26px;
        
      }
      p {
          color:#737373;
          font-size: 16px;
          line-height: 26px;
        }
      div {
        display: flex;
        span,p{
          color:#737373;
          font-size: 16px;
          line-height: 26px;
        }
      }
      
    }
 }
 
</style> 
