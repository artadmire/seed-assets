<template lang='pug'>
  div.collage-item(v-if='collageInfo.itemList||collageInfo.sessionList')
    a(:href='aHref',) 
      img(v-lazy='pic' alt='')
      ul(v-if='type=="tuanList"&&collageInfo.itemList.length>0')
        PintuanItem(v-for='(item,index) in collageInfo.itemList',:key='index',v-if='index<3',:pintuanInfo='item')
      ul(v-else-if='type=="sessionList"&&collageInfo.sessionList.length>0')
        BrandItem(v-for='(item,index) in collageInfo.sessionList',:key='index',v-if='index<3',:brandInfo='item')
      ul(v-else-if='type=="creditList"&&collageInfo.itemList.length>0')
        EasyPayment(v-for='(item,index) in collageInfo.itemList',:key='index',v-if='index<3',:easyPaymentInfo='item')
      div(v-else)
        Blank
</template>

<script scoped>
import PintuanItem from './pintuanItem'
import BrandItem from './brandItem'
import EasyPayment from './easyPaymentItem'
import Blank from './Blank'
export default {
  name: 'Collageblock',
  props:{
    collageInfo:{
      type:Object,
      default:{}
    },
    type:{
      type:String,
      default:''
    }
  },
  data () {
    return {
    }
  },
  computed:{
    aHref(){
      if(this.type == 'creditList'){
         return `/classification.html?type=credit&id=`+this.collageInfo.group.id
       }else if(this.type == 'sessionList'){
         return `/classification.html?type=session&id=`+this.collageInfo.group.id
       }else if(this.type == 'tuanList'){
         return `/classification.html?type=tuan&id=`+this.collageInfo.group.id
       }
    },
    pic(){
      return this.collageInfo.group.pic+"@!1200"
    }
  },
  components:{
    PintuanItem,BrandItem,EasyPayment,Blank
  },
  mounted () {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/utils/reset.scss';
p {
  margin:0;
  padding:0;
}
li {
  list-style: none;
  display: inline-block
}
.collage-item {
  display: inline-block;
  height:485px;
  width:550px;
  background: #ffffff;
  padding:10px;
  margin-bottom: 40px;
  box-sizing: content-box;
  >a {
    width:100%;
    height: 100%;
    display: inline-block;
    >img {
      height:277px;
      width:550px;
      display: block;
      object-fit: cover;
    }
  }
  ul {
    width:518px;
    height:188px;
    border:1px solid #F4F4F4;
    border-top:0;
    padding:10px 16px;
    box-sizing: content-box;
    display: flex;
    justify-content: space-between;

  }
} 
.collage-goods {
  height:132px;
  width:132px;
  /* background: papayawhip; */
  border: 1px solid #EDEDED;
}
</style>
