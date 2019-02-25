<template lang='pug'>
  li
    div.collage-goods
        img(v-lazy='banner')
    p 
        span {{ brandInfo.title }}
    span {{ minDiscountPercent }}
    i {{ "折起" }}
</template>

<script scoped>
// import {getImgUrlPrefix} from '@/utils'
export default {
  name: 'Item',
  props:{
      brandInfo:{
          type:Object,
          default:{}
      }
  },
  data () {
    return {
    //   imgUrlPrefix:''
    }
  },
  computed:{
      banner(){
          return this.brandInfo.brandLogo+'@!400'
      },
      minDiscountPercent(){
          return (this.brandInfo.minDiscountPercent/10).toFixed(1)
      }
  },
  created(){
    //获取图片前缀
    // getImgUrlPrefix().then(()=>{
    //     this.imgUrlPrefix = localStorage.imgUrlPrefix;
    // });
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
  padding:0 15px;
  text-align: center;
  box-sizing: content-box;
  .collage-goods{
      width: 132px;
      height: 132px;
      box-sizing: border-box;
      border: 1px solid  #f7f8fa;
      img{
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
  }
  p span{
    display: inline-block;
    width:112px;
    height:22px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333234;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 22px;
    margin:8px 0 8px 0;
  }
  >span {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #FF3766;
    text-align: center;
    display: inline-block;
    font-weight: multiple;
    line-height: 16px;
    margin:0;
    padding:0;
  }
  >i {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #B2B2B2;
    text-align: center;
    line-height: 12px;
    font-style: normal;
    display: inline-block;
  }
}
</style>
