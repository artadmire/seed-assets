<template lang='pug'>
    a.session(@mouseenter='codeShow',@mouseleave='codeHide')
        div.goods-images
            img(v-lazy="itemInfo.brandLogo+'@!400'")
            div.goods-code(v-show='codeState')
                img.code(:src='baseURL+"static/images/download.png"')
                p {{'扫码有惊喜!'}}
        p.session-title {{ itemInfo.title }}
        div.session-discount {{minDiscountPercent +'折起'}}
        
</template>
<script scoped>
import baseURL  from '@/baseURL'
export default {
  name: 'Ccontent',
  props:{
      itemInfo:{
          type:Object,
          default:{}
      },
  },
  data(){
      return {
          codeState:false,
          baseURL:''
      }
  },
  created(){
      this.baseURL = baseURL;
  },
  computed:{
      minDiscountPercent(){
          return (this.itemInfo.minDiscountPercent/10).toFixed(1)
      }
  },
  methods:{
      codeShow(){
          this.codeState = true;
      },
      codeHide(){
          this.codeState = false;
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
  list-style: none;
  display: inline-block
}

.session {
    width:270px;
    height:360px;
    background: #FFFFFF;
    box-sizing: border-box;
    padding: 26px 27px 0 25px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-content: center;
    position: relative;
    /* justify-content: center; */
}
.session a {
    display: block;
    width:100%;
    height: 100%;
}
.session >p {
    width:100%;
    height:26px;
    overflow: hidden;
    font-size: 20px;
    color: #333234;
    line-height: 26px;
    margin:23px 0 16px 0;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
    word-break:break-all;
    text-align: center;
    font-weight: medium;
}
.session-discount{
    width: 78px;
    height: 26px;
    margin: 0 auto;
    font-size: 14px;
    background: #ff3766;
    color: white;
    text-align: center;
    line-height: 26px;
    border-radius: 13px;
}
.goods-images {
    width:218px;
    height:218px;
    position: relative;
    object-fit: cover;
    border: 1px solid #f7f8fa;
    >img {
        width:218px;
        height:218px;
        display: block;
        object-fit: cover;
    }
    >div{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >img{
            width: 141px;
            height: 141px;
            object-fit: contain;
        }
        >p{
            font-weight: normal;
            text-align: center;
            color: white;
            margin: 10px auto 0;
            font-size: 26px;
        }
    }

}
</style>

