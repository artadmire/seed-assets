<!--<template lang='pug'>-->
  div.activities
    h1 {{ '精彩内容' }}
    div.ac-content
      div.left
        div.left-top
          a(:href='hrefList[0]' )
            Activeitem(:width='285',:height='220'  :imgURL = "ActiveList[0]" :imgUrlPrefix = 'imageUrlPrefix' )
        div.left-bottom
          a(:href='hrefList[3]' )
            Activeitem(:width='285',:height='220' :imgURL = "ActiveList[3]" :imgUrlPrefix = 'imageUrlPrefix' )
      div.middle
        div.middle-top
          div
            a(:href='hrefList[1]' )
              Activeitem(:width='285',:height='220' :imgURL = "ActiveList[1]" :imgUrlPrefix = 'imageUrlPrefix')
          div
            a(:href='hrefList[2]')
              Activeitem(:width='285',:height='220' :imgURL = "ActiveList[2]" :imgUrlPrefix = 'imageUrlPrefix')
        div.middle-bottom
          a(:href='hrefList[4]')
            Activeitem(:width='590',:height='220' :imgURL = "ActiveList[4]" :imgUrlPrefix = 'imageUrlPrefix' )
      div.right
        a(:href='hrefList[5]')
          Activeitem(:width='285',:height='460' :imgURL = "ActiveList[5]" :imgUrlPrefix = 'imageUrlPrefix')
</template>

<script>
import Activeitem from './activeitem.vue'
import { getImgUrlPrefix } from '@/utils'
import api from '../api.js'
import DownloadCode from '@/components/common/downloadcode'
export default {
  name: 'Activities',
  components: { Activeitem, DownloadCode },
  data () {
    return {
      imageUrlPrefix: '',
      ActiveList: [],
      hrefList:[]
      
    }
  },
  created () {
    //获取图片前缀
		getImgUrlPrefix().then(()=>{
			this.imageUrlPrefix = localStorage.imgUrlPrefix;
		})
    this.getActiveList ()
  },
  methods: {
     //获取精彩内容列表
    async getActiveList(){
        const wip  = await api.getActiveList();
        console.log(JSON.parse(wip.values[0].data).items,333);
        JSON.parse(wip.values[0].data).items.forEach((item,index) => {
          this.ActiveList.push(item.img);
          this.hrefList.push(item.url)
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang= 'scss'>
@import '@/utils/reset.scss';
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.activities {
   width:1200px;
   margin:0 auto;
   margin-bottom: 44px;
   background: #f7f8fa;
   /* position: relative; */
    h1 {
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #333234;
      border-bottom: 1px solid #dee1e6;
      line-height: 60px;
      height:60px;
    }
    .ac-content {
      width:1200px;
      height:460px;
      margin-top:50px;
      display: flex;
      justify-content: space-between;
      .left,.right {
        width:285px;
        height:460px;
      }
      .middle {
        width: 590px;
        height:460px;
        /* background: forestgreen; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &>div {
          width:100%;
          height:220px;
          /* background: chartreuse;   */
          
        }
        .middle-top {
            display: flex;
            justify-content: space-between;
            div {
              width:285px;
              height: 220px;
              /* background: palegoldenrod; */
            }
          }
        
      }
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          /* background: fuchsia; */
          width:100%;
          height:220px;
        }
      }


    }
}


</style>
