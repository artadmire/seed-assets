<template lang='pug'>
      div.draw_ad(v-if="type!='centDrawList'")
        img(:src="imgHref+'@!1200'")
        div.ad-info
          h1 {{ classficationadData.name }}
          div.introduce 
            p
            span {{ classficationadData.description }}
          div.servers
            ul
              li(v-for="(item,index) in classficationadData.marks",:key='index')
                img(:src="item.logo+'@!200'")
                span {{ item.name }}
      div.ad(v-else)
        a(:href='centDrawHref')
          img(v-lazy='centDrawImg')
</template>

<script scoped>
export default {
  name: 'Classificationad',
  props:{
    classficationadData:{
      type:Object,
      default:null
    },
    imgUrlPrefix:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      imgHref:''
    }
  },
  watch:{
    classficationadData(values){
      this.$set(this,'imgHref',values.pic);
    }
  },
  computed:{
    centDrawHref(){
      if(this.classficationadData.values){
        return JSON.parse(this.classficationadData.values[0].data).link
      }
    },
    centDrawImg(){
      if(this.classficationadData.values){
        console.log(this.imgUrlPrefix+JSON.parse(this.classficationadData.values[0].data).img+'@!1200')
        return this.imgUrlPrefix+JSON.parse(this.classficationadData.values[0].data).img+'@!1200'
      }
    }
  },
  created(){
  },
  mounted () {
    console.log(this.classficationadData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/utils/reset.scss';
h1 {
  font-weight: normal;
  font-size: 30px;
  color: #AD4A21;
  font-family: PingFangSC-Medium;
  margin:38px auto 10px; 
}
li {
  list-style: none;
  display: inline-block
}
.draw_ad {
  width: 1168px;
  height:284px;
  padding:16px;
  background: #ffffff;
  /* border:1px solid palegreen; */
  margin:0 auto;
}
.introduce {
  height:25px;
  line-height: 25px;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom:1px solid #DEE1E7;
  width:524px;
  >p {
    width:18px;
    height:18px;
    box-sizing: border-box;
    border:3px solid #F0B49A;
    border-radius: 9px;
    margin-right: 9px;
  }
}
.draw_ad>img {
  width:562px;
  height:284px;
  /* border:1px solid paleturquoise; */
  float: left;
  object-fit: cover;
  
}
.ad-info {
  padding:0 40px;
  height:283px;
  float: left;
  border: 1px solid #DEE1E7;
  border-left: 0;
}

.introduce>span {
  font-size: 18px;
  color: #333234;
}
.servers ul {
  padding:0;
  margin:19px 0;
  height:85px;
  display: flex;
}
.servers ul span {
  font-size: 14px;
  color: #737373;
  margin-top:9px;
}
.servers li {
  margin-right: 40px;
  height:85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:last-child{
    margin-right: 0;
  }

}
.servers li img {
  height: 56px;
  width:56px;
}
.ad{
  margin: 0 auto;
  width:1200px;
  height: 316px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

