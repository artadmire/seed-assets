<template lang='pug'>
    div#active(class='page layout')
        div#page(class='page layout',:style="{background:value.backgroudColor}")
            section(v-for='(item,index) in value.blocks')
                div.block_banner(v-if="item.type == 'BIG_BANNER'")
                    a(target='_blank',:href='item.url',v-if='item.url')
                        img(v-lazy='imgUrlPrefix+item.img+"@!2200"')
                    img(v-lazy='imgUrlPrefix+item.img+"@!2200"',v-else)
                div.block_title(v-else-if="item.type=='BLOCK_TITLE'")
                    img(v-lazy="imgUrlPrefix+item.img+'@!1200'")
                div.small_banner(v-else-if="item.type=='SMALL_BANNER'")
                    a(v-if='item.url',:href='item.url',target='_blank')
                        img(v-lazy="imgUrlPrefix+item.img+'@!1200'")
                div.item_list(v-else-if="item.type=='ITEM_LIST'")
                    div(v-for="(itit,v) in item.items")
                        a(v-if='itit.url&&itit.img',target='_blank',:href='itit.url')
                            img(v-lazy="imgUrlPrefix+itit.img+'@!400'")
                        img(v-else,v-lazy="imgUrlPrefix+itit.img+'@!400'")
                div#float_navi_icon(v-else-if="item.type='FLOAT_NAVI_ICON'",v-show='float_navi_icon_show')
                    a(v-if='item.url',target='_blank',:href='item.url')
                        img(v-lazy="imgUrlPrefix+item.img+'@!400'")
                    img(v-else,v-lazy="imgUrlPrefix+item.img+'@!400'")
</template>
<script>
import {getImgUrlPrefix} from '@/utils'
import api from './api'
import Vue from "vue";
export default {
  name: "Active",
  computed: {},
  components: {},
  data() {
    return {
        value:{},
        imgUrlPrefix :'',
        float_navi_icon_show:false,
        title:''
    }
       
  },
  created(){
    let id = location.search.split('id=')[1];
    if(id){
        this.getAdsDetail(id);
    }
    //获取图片前缀
    getImgUrlPrefix().then(()=>{
        this.imgUrlPrefix = localStorage.imgUrlPrefix;
    });
  },
  methods:{
      handleScroll(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.float_navi_icon_show = scrollTop>window.screen.height?true:false;
      },
      async getAdsDetail(id){
          const wip = await api.getAdsDetail(id);
          this.value = JSON.parse(wip.data);
          this.title =  wip.data.title ? wip.data.title : '爆好货';
          document.title = this.title;
      }
  },
  mounted(){
      
       window.addEventListener('scroll',this.handleScroll)
        if(document.body.clientWidth>1920 && document.getElementById('float_navi_icon')){
            var dis = document.body.clientWidth - document.getElementById('page').offsetWidth
            document.getElementById('float_navi_icon').style.right = dis/2+'px'
        }
  }
};
</script>	
<style lang='scss'>
@import '@/utils/reset.scss';
.page{
	max-width: 1920px;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}
.page .block_banner{
	width: 1920px;
	position: relative;
	left: 50%;
	margin-left: -960px;
	line-height: 0;
	overflow: hidden;
}
.page .block_banner img{
	width: 100%;
	height: 100%;
}
.page .block_title,.page .small_banner{
	width: 1200px;
	margin: 0 auto ;
	line-height: 0;
}
.page .block_title img,.page .small_banner img{
	width: 100%;
	height: 100%;
}
.page .item_list{
	width: 1200px;
	margin: 0 auto ;
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	line-height: 0;
}
.page .item_list>a{	
	-webkit-box-flex: 0;	
	   -moz-box-flex: 0;	
	    -ms-flex: none;	
	        flex: none;
	width: 300px;
	/*margin-right: 13px;*/
}

.page .item_list>a img{
	width: 100%;
}
.page #float_navi_icon{
	display: block;
	width: 180px;
	height: 180px;
	position: fixed;
	right: 0px;
	top: 50%;
	z-index: 99;
}
.page #float_navi_icon img{
	width: 100%;
	height: 100%;
}

</style>