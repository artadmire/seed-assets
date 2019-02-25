<template lang='pug'>
  div.question
    p {{ '常见问题' }}
    div
      h2 {{ '问：我拍下的订单怎么自动取消了？' }}
      div
        span {{ '答：' }}
        div
          p {{ '当商品全部被拍下便是“已售罄”状态无法购买，所以为了让更多用户能抢到心仪商品，当您将喜欢的商品拍下时，  商品保留时间只有30分钟。超过30分钟还没有支付，订单将被自动取消，商品释放并重新上架，供其他用户抢购。如果你想要购买到自己喜欢的商品，一定要及时完成订单支付喔！' }}
    div
      h2 {{ '问：取消订单，怎么所使用现金券没有退回？' }}
      div
        span {{ '答：' }}
        div
          p {{ '订单取消现金券退回会有所延迟，建议您30分钟后可以重新登录“我的-卡券包”进行查看。' }}  
    div
      h2 {{ '问：订单支付成功后，商品什么时候发货？' }}
      div
        span {{ '答：' }}
        div
          p {{ '订单支付成功后除特殊商品外，将在48小时内发货。以下情况除外：' }}
            span {{ '1.预售及其他特殊情形商品，商品会在约定发货时间内安排发货，发货时间以商品描述页面为准。' }}
            span {{ '2.抽奖类目产品，系统会在抽奖日自动抽取获奖用户，一等奖用户将会安排发货，二等奖用户系统将会全额退款并赠送代金券，具体活动规则请查看抽奖活动详情页。' }}
    div
      h2 {{ '问：订单支付成功后，不想要了怎么办？' }}
      div
        span {{ '答：' }}
        div
          p {{ '1.未收到货：可对包裹进行拒签，订单申请退款即可。' }}
          p {{ '2.已收到货：可走正常的七天无理由退货流程。' }} 
    div
      h2 {{ '问：我订单申请了退款，怎么还发货了呀？' }}
      div
        span {{ '答：' }}
        div
          p {{ '由于仓库都是统一打包发货的，订单同步会有所延迟，发货后您若不想要的话，可对包裹进行拒签哦！' }}
    div
      h2 {{ '问：没有收到货/商家发错地址了怎么办？' }}
      div
        span {{ '答：' }}
        div
          p {{ '您可在“待收货”订单里查看“物流单号”，并点击“查看物流”，查看发货信息。物流信息不准确可以联系客服核实并要求处理。' }}
    div
      h2 {{ '问：收到商品有问题怎么办？' }}
      div
        span {{ '答：' }}
        div
          p {{ '您可以联系客服，并提供实物图片确认问题是否属实。如果确认商品问题，或无法说明商品是否合格，将与您协商解决。' }}   
</template>
<script>
export default {
  name: 'Question',
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
  .question {
    min-height: 800px;
    p {
      @include rect(860px,55px);
      border-bottom: 1px solid #DEE1E7;
      color:#737373;
      font-size:20px;
      margin-bottom: 35px;
    }
    div {
      margin-bottom: 35px;
      padding:0 10px;
      
      h2 {
        color:#4A4A4A;
        font-size:18px;
        line-height: 30px;
        height:30px;
        margin-bottom: 5px;
      }
      div {
        @include flexbox();
         padding:0;
        div {
            display: block;
            margin-bottom: 0;
           
            p {
              color:#737373;
              font-size:16px;
              border:0;
              line-height: 30px;
              @include rect(auto,auto);
              margin-bottom: 0;
            }
        }
        span {
          color:#737373;
          font-size:16px;
          line-height: 30px;
          display: block;
          
          }       
      }
    }
    
}
 
</style> 
