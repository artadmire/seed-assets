<template lang='pug'>
	div#about
		Header
		div.about-content
			p {{ '关于我们' }}
			div.about-info
				div
					span {{ '爆好货科技（天津）有限公司旗下的爆好货生活，是国内领先的个性化推荐引擎产品，由爆好货团队和中国电信团队联合运营，基于数据挖掘，根据用户兴趣、偏好等多个维度为用户推荐有价值的、个性化的商品，提供连接人与商品的新型服务；并与翼支付、花呗分期强强联合，为用户提供专享、分期等服务；' }}
					span {{ '主要为用户推荐服饰、鞋类、箱包、运动、美妆、百货、母婴、食品、3C数码、等品类商品或服务。' }}
				img(:src='baseURL+"static/images/guanyuwomenpage_brands_img_content@3x.png"')
				span {{ '品牌入驻请咨询：010-62981200' }}
		Footer
		       
      
</template>
<script>
import baseURL  from '@/baseURL'
import Vue from 'vue'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
export default {
	name:'About',
	computed:{
	},
	components:{
		Header,
		Footer
	},
	data () {
		return {
			baseURL:''
		}
	},
	created(){
		this.baseURL= baseURL;
	}
}
</script>	
<style lang='scss'>

	body {
		background: #f7f8fa;
		font-family: PingFangSC-Regular;
		min-width: 1200px;
	}
	p {
		padding:0;
		margin:0;
	}
	.about-content {
		width:1200px;
		background: #ffffff;
		margin:0 auto;
		height:1113px;
		padding-top:60px;
		margin-top:59px;
		margin-bottom: 60px;
		p {
		height:65px;
		width:192px;
		background: url('../../../static/images/Path 2.png');
		margin-left: -20px;
		line-height: 56px;
		font-size: 28px;
		color:#ffffff;
		text-indent: 48px;
		margin-bottom: 50px;
		}
		.about-info {
			width:1100px;
			margin:0 auto;
			div {
				width:1080px;
				margin:0 auto;
				span {
				display: block;
				color:#4A4A4A;
				font-size:20px;
				line-height: 36px;
				text-indent:40px;
				}
			}
			img {
				width:1100px;
				margin:40px 0 48px 0;
			}
			span {
				font-size:18px;
				color:#4A4A4A;
				line-height:32px;
				margin-left:10px;
			}
			
		}
	}
	
	

</style>