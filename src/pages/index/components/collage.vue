<template lang='pug'>
  div.collage
    h1
      span {{ typeName }}
    div.collage-content
      div.collage-list
        Collageblock(v-for='(item,index) in itemInfo' :key='index',:type='type',:collageInfo='item')
        
</template>

<script scoped>
import Collageblock from './collageblock'
export default {
  name: 'Collage',
  components: { Collageblock },
  props:{
    itemInfo:{
      type:Array,
      default:[]
    },
    type:{
      type:String,
      default:''
    }
  },
  computed:{
     typeName(){
       if(this.type == 'creditList'){
         return '分期专题'
       }else if(this.type == 'sessionList'){
         return '专场特卖'
       }else if(this.type == 'tuanList'){
         return '拼团专题'
       }
     }
  },
  data () {
    return {
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
.collage-list {
  list-style-type: none;
  padding: 0;
  width:1200px;
  height:100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
  
}
.collage {
  margin:0 auto;
  width:1200px;
  min-height:300px;
  margin-bottom: 20px;
}
h1 {
  height:60px;
  border-bottom: 1px solid #dee1e6;
  margin-bottom: -3px;
  font-weight: normal;
  margin-bottom: 37px;
}
h1 span {
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #333234;
  line-height: 60px;
}
</style>
