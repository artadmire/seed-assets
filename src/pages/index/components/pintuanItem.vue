<template lang='pug'>
  li
    div.collage-goods
      img(v-lazy="pintuanInfo.pic+'@!400'")
    p 
      span {{ pintuanInfo.title }}
    div.collage-price
      span {{ "¥"+pintuanPriceCent }}
      i {{ "原价¥"+originalPriceCent }}
</template>

<script scoped>
export default {
  name: 'Item',
  props:{
    pintuanInfo:{
      type:Object,
      default:{}
    }
  },
  computed:{
    pintuanPriceCent(){
      return (this.pintuanInfo.pintuanPriceCent/100).toFixed(2)
    },
    originalPriceCent(){
      return (this.pintuanInfo.originalPriceCent/100).toFixed(2)
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js collage'
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
      width:162px;
      height:198px;
      /* margin-left:16px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: content-box;
      /* display: flex;
      flex-direction: column;
      align-items: center */
      .collage-goods{
        width: 132px;
        height: 132px;
        box-sizing: border-box;
        border: 1px solid #f7f8fa;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      p {
        padding:0 15px;
        width:132px;
        height:34px;
        margin-bottom: 3px;
        margin-top:5px;
        span{
          width:132px;
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
         width:162px;
        //  display: flex;
        //  justify-content: space-between;
        //  align-items: center;
         & >i {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #B2B2B2;
        text-align: center;
        line-height: 12px;
        text-decoration: line-through;
        font-style: normal;
        display: inline-block;
      }
     & >span {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FF3766;
        text-align: center;
        line-height: 16px;
        margin-right: 6px;
        display: inline-block;
      }
      &>span:first-letter {
        font-size: 12px;
        color: #FF3766;
      }

       }
     
      
    }
</style>
