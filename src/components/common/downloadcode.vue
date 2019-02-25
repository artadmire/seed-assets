<template lang='pug'>
  p
    img(:src='baseURL+"static/images/homepage_column_img_download@3x.png"')
</template>

<script>
import baseURL from '@/baseURL'
export default {
  name: 'DownloadCode',
  data () {
    return {
      baseURL:''
    }
  },
  computed: {
    left: function () {
      var clientWidth = document.body.clientWidth || document.documentElement.clientWidth
      return (clientWidth-1200)/2
    }
  },
  //- (:style='{left:left+"px"}')
  watch: {
    left () {
      
    }
  },
  created(){
    this.baseURL = baseURL;
  },
  mounted () {
    console.log(this.left)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '@/utils/reset.scss';
p {
  width:185px;
  height:225px;
  position: fixed;
  bottom:40px;
  left:120px;
  z-index:300;
  img {
    width:185px;
    height:225px;
  }
}

</style> 
