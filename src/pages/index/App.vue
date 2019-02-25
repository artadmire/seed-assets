<template lang='pug'>
  div#app
    //- a(href='about.html') {{'to about'}}
    Header
    Banner
    Activities
    Collage(v-for='(item,index) in homeGroupListData',:key='index',:itemInfo='item',:type='index')
    Footer
    DownloadCode
</template>

<script>
import api from './api'
import Header from '@/components/common/header'
import Banner from './components/banner'
import Activities from './components/activities'
import Collage from './components/collage'
import Footer from '@/components/common/footer'
import DownloadCode from '@/components/common/downloadcode'
export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Activities,
    Collage,
    Footer,
    DownloadCode
    
  },
  data(){
    return {
      homeGroupListData:{}
    }
  },
  created(){
     this.getHomeGroupList();
  },
  computed:{
  },
  methods:{
      async getHomeGroupList(){
        const wip  = await api.getHomeGroupList();
        console.log(wip);
        this.homeGroupListData = wip;
      }
  }
}
</script>

<style lang='scss'>
@import '@/utils/reset.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  
}
body {
  background: #f7f8fa;
  font-family: PingFangSC-Regular;
  min-width: 1200px;
}
* {
  margin:0;
  padding:0
}

</style>
