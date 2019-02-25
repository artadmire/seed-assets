<template lang='pug'>
  div.activeitem
      img(v-lazy='imgUrlPrefix+imgURL+"@!800"' :style='{width:imgWidth+"px",height:imgHeight+"px"}',)
        
</template>

<script >

import { parse } from 'babylon';
export default {
  name: 'Activeitem',
  
  props:{
    width: {
      type:Number,
      default:10
    },
    height: {
      type:Number,
      default:10
    },
    imgURL: {
      type:String,
      default: ''
    },
    imgUrlPrefix: {
      type:String,
      default: ''
    },
  },
  computed:{
     
     
  },
  data () {
    return {
      imgWidth: this.width,
      imgHeight: this.height
    }
  },
  
  mounted () {
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' >
  img {
    object-fit: cover;
  }
</style>
