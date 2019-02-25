<template lang='pug'>
    a.classfy-goods(@mouseenter='codeShow',@mouseleave='codeHide')
        div.goods-images
            img(v-lazy="itemInfo.pic+'@!400'")
            div.goods-code(v-show='codeState')
                img.code(:src='baseURL+"static/images/download.png"')
                p {{'扫码有惊喜!'}}
        p {{ itemInfo.title }}
        div.goods-price
            span {{ '¥ ' +salePriceCent}}
            i {{ '原价:¥ '+originalPriceCent }}
            p {{ itemInfo.desc }}
        
</template>
<script scoped>
import baseURL  from '@/baseURL'
export default {
  name: 'Ccontent',
  props:{
      itemInfo:{
          type:Object,
          default:{}
      }
  },
  data(){
      return {
          codeState:false,
          baseURL: '',
      }
  },
  created(){
      this.baseURL = baseURL;
  },
  computed:{
      originalPriceCent(){
          return (this.itemInfo.originalPriceCent/100).toFixed(2)
      },
      salePriceCent(){
          return (this.itemInfo.salePriceCent/100).toFixed(2)
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

.classfy-goods {
    width:218px;
    height:354px;
    background: #FFFFFF;
    padding: 26px 27px 0 25px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-content: center;
    position: relative;
    /* justify-content: center; */
}
.classfy-goods a {
    display: block;
    width:100%;
    height: 100%;
}
.classfy-goods >p {
    width:100%;
    height:52px;
    overflow: hidden;
    font-size: 16px;
    color: #333234;
    
    line-height: 26px;
    margin:21px 0 16px 0;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
    word-break:break-all;
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
.goods-price >span:nth-child(1) {
    font-family: PingFangSC-Semibold;
    font-size: 19px;
    color: #FF3766;
    line-height: 26px;

}
.goods-price i {
    font-style: normal;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #B2B2B2;
    margin-left: 7px;
    text-decoration: line-through;
    line-height: 20px;
}
.goods-price p {
    background: #FF3766;
    border-radius: 13px 0 0 13px;
    width:59px;
    height:26px;
    font-size: 14px;
    line-height: 26px;
    color: #FFFFFF;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 20px;
}
</style>

