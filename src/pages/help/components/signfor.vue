<template lang='pug'>
  div.sign-for
    p {{ '配送方式>商品验货与签收' }}
    div
      h2 {{ '请在配送人员还在场的情况下，当面验收您的商品。' }}
      p {{ '(1）快递员送货上门时，请您务必当面对照发货单核对商品，如果出现商品缺少、配送错误、包装破损问题等，请直接联系客服中心，待客服确认后，可将整单商品由快递公司退回。' }}
      p {{ '(2）爆好货指定的特殊商品，如：贴身衣物（内衣、袜子、文胸、泳衣等）不允许试穿，美妆商品（化妆品、化妆工具）不允许试用，以及特定需通电的电器目前也不允许插电试用，如您签收货物后，发现质量问题，可以联系爆好货客服中心为您办理退货业务。' }}
      p {{ '(3）如您在订购时选择了"需要发票"，请仔细检查发票是否随商品一起送到，如未收到发票，请与爆好货客服中心联系为您安排补开发票。' }}
      p {{ '(4）签收后爆好货视为您已经认可并接受本公司商品。非订货人本人签收的产品，爆好货视代收人等同于订购人进行验货。一旦您确认签字，爆好货将视为您已经核对并验收包裹。发现上述请及时联系爆好货，爆好货客服会主动负责地与快递公司进行交涉，妥善处理，维护会员利益。' }}
      p {{ '爆好货客服热线：010-6298-1200' }}
    div
      h2 {{ '修改配送要求' }}
      p {{ '1、改寄：发货前改变邮寄地址不收费，发货后恕不受理。'}}
      p {{ '2、签收：请检查包裹有无破损，如无问题，请在物流公司指定单据上签收，物流公司会将签收信息返回爆好货。'}}
      p {{ '3、拒收：请检查包裹，如有明显损坏迹象，您可以拒收该包裹，我们会与物流公司协商赔偿事项，并承担由此而产生的配送费用。'}}
    div
      h2 {{ '长时间未收到货品可能出现的问题' }} 
      p {{ '(1） 请您确保订单中的收货地址、邮编、电话、地址等各项信息的准确性，以便商品及时、准确地发出。' }}
      p {{ '(2） 配送过程中如果我们联络您的时间超过7天未得到回复，此订单将被默认为您已经放弃订购。' }}

</template>
<script>
export default {
  name: 'Signfor',
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
 .sign-for {
    min-height: 736px;
    p {
      @include rect(860px,55px);
      border-bottom: 1px solid #DEE1E7;
      color:#737373;
      font-size:20px;
      margin-bottom: 39px;
    }
    div {
      padding:0 10px;
      margin-bottom: 40px;
      h2 {
        font-weight: normal;
        font-size: 18px;
        color:#333234;
        line-height: 26px;
      }
      p {
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
