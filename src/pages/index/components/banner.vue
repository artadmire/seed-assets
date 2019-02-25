<template>
<div class="banner-w">
    <div class="banner">
      <Carousel >
        <CarouselItem v-for="(item,index) in bannerList" :key="index" >
          <a :href="item.link" >
            <img  class="banner-images" v-lazy="imgUrlPrefix+item.img+'@!2200'" alt="">
          </a>
        </CarouselItem>
      </Carousel>
			
    </div>  
  </div>
</template>
<script>
import Vue from 'vue'
import {getImgUrlPrefix} from '@/utils'
import { Carousel ,CarouselItem  } from 'element-ui'
import api from '../api.js'
export default {
  data () {
    return {
      bannerList:[],
      imgUrlPrefix:'',
			value5:null
    }
  },
  components:{
    Carousel,CarouselItem,Rate
  },
  created () {
    //获取图片前缀
		getImgUrlPrefix().then(()=>{
			this.imgUrlPrefix = localStorage.imgUrlPrefix;
		});
    this.getBanner()
  },
  methods:{
    async getBanner(){	
			const wip = await api.getBanner();
      wip.values.forEach((item,index)=>{
        this.bannerList.push(JSON.parse(item.data))
      })
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
@import '@/utils/reset.scss';
html, body {
    // overflow: hidden !important;
    min-width: 1200px;
}
.banner-w {
  min-width: 1200px;
}
.banner {
  height:500px;
  margin-bottom: 50px;
  width: 1920px;
  overflow: hidden;
  position: relative;
  left: 50%;
  margin-left:-960px;
  a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}
// 左右按钮处理
.el-carousel__arrow--left {
  left:360px;
}
.el-carousel__arrow--right {
  right:360px;
}
.el-carousel__arrow {
  border-radius: 0;
  width:31px;
  height:46px;
  font-size:38px;

}
.el-carousel__indicators {
  bottom:20px;
  padding:0;
  margin:0;
}
.el-carousel__indicator {
  width:18px;
  height:18px;
  background: url(../assets/tuoyuanxing.png) no-repeat center ;
  background-size: 10px 10px;
}
.el-carousel__indicator.is-active {
  background: url(../assets/tuoyuanxing-selected.png) no-repeat center;
  background-size: 18px 18px;
}
/* 轮播图组建样式 */
.el-carousel,.el-carousel__container,.el-carousel_item {
  width:100%;
  height:500px;
}
  /* 修改小圆点 */
  .el-carousel__button {
     width:0;
     height:0;
 
  }
</style>
