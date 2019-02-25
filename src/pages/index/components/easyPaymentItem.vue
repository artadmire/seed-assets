<template lang='pug'>
  li
    div.collage-goods
      img(v-lazy='pic')
    p 
      span {{ easyPaymentInfo.title }}
    div.collage-price
      i {{ "每期¥"+minEasyPaymentCent+"起" }}
      span {{ "¥"+salePriceCent}}
</template>

<script scoped>
export default {
  name: 'Item',
  props:{
      easyPaymentInfo:{
          type:Object,
          default:{}
      }
  },
  data () {
    return {
    }
  },
  computed:{
      salePriceCent(){
          return (this.easyPaymentInfo.salePriceCent/100).toFixed(2)
      },
      minEasyPaymentCent(){
          return (this.easyPaymentInfo.minEasyPaymentCent/100).toFixed(2)
      },
      pic(){
        return this.easyPaymentInfo.pic+'@!400'
      }
  },
  mounted () {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/utils/reset.scss';
li {
      width:132px;
      height:198px;
      /* margin-left:16px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: content-box;
      text-align: center;
      box-sizing: content-box;
      /* display: flex;
      flex-direction: column;
      align-items: center */
      .collage-goods{
        width: 132px;
        height: 132px;
        box-sizing: border-box;
        border: 1px solid #f4f4f4;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      p {
        width:133px;
        height:34px;
        margin-bottom: 3px;
        margin-top:5px;
        padding:0 15px;
        span{
          width:133px;
          height:34px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          line-height: 17px;
          color: #333234;
          overflow: hidden; 
          word-break:break-all;
          display:-webkit-box;
          display: -webkit-inline-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          text-align: center;
        }
        span::after {
          content:"...";
          font-weight:bold;
        }
      }
      .collage-price {
         width: 100%;
         height:16px;
         line-height: 25px;
         box-sizing: border-box;
         display: flex;
         justify-content: space-between;
         & >span {
          font-family: PingFangSC-Regular;
          font-size: 10px;
          color: #B2B2B2;
          text-align: center;
          text-decoration: line-through;
        
         }
        & >i {
        font-family: PingFangSC-Regular;
        font-weight: bold;
        font-size: 12px;
        color: #FF3766;
        text-align: center;
        }

      }
    }
</style>
