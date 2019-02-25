<template lang='pug'>
    div.empty
        img(:src='baseURL+"static/images/h2_wushangpinshuju_icon_msg@3x.png"')
        p {{ '商品正在努力上架中，请耐心等待...' }}
</template>
<script >
import baseURL from '@/baseURL'
export default {
  name: 'Emptycontent',
  data(){
      return {
          baseURL:''
      }
  },
  created () {
      this.baseURL = baseURL
  },
  mounted () {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/utils/reset.scss';
    .empty {
        width:1200px;
        margin:0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:509px;
        background: #F7F7F7;
        p {
            font-size: 20px;
            color:#737373;
            line-height: 28px;
            margin-top:20px;
        }
        img {
           width:105px;
           height:112px; 
        }
    }

</style>

