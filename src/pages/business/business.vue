<template lang='pug'>
	div#businesses
		Header
		div.banner-ws
			div.bussiness-banner
				img(:src='baseURL+"static/images/zhaoshang.jpg"')
		div.bussiness-info
			div.check
				p {{ '爆好货优势' }}
				div.check-info
					img(:src='baseURL+"static/images/zhaoshangpage_liucheng_img_content_disabled@3x.png"')
			div.goodness
				p {{ '申请入驻' }}
				div.goodness-img 
					img(:src='baseURL+"static/images/ruzhuliucheng.png"')
					div.credentials
						span {{ '您可以在入驻前，按照将要开通店铺的经营类目、是否进口，查看资质要求。' }}
						a(href='credentials.html' target='_self') {{ '资质查询' }}
			div.cooperation
				p {{ '品质合作' }}
				div.cooperation-brand
					img(:src='baseURL+"static/images/zhaoshangpage_brands_img_content_disabled@3x.png"')
		Footer
</template>

<script>
import baseURL  from '@/baseURL'
import Vue from 'vue'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export default {
	name:'Bussiness',
	computed:{
	},
	components:{
		Header,
		Footer
	},
	created(){
		this.baseURL= baseURL;
	},
	data () {
		return {
			isActive: false,
			baseURL:''
		}
	},
	mounted(){

	}
	
}
</script>

<style type="text/css"   lang='scss'>
@import '@/utils/reset.scss';
 * {
	 margin:0;
	 padding:0
 }
	body {
		min-width: 1200px;
		height:100%;
	}
	#businesses,#business{
		background: #f7f8fa;
		overflow: auto;
	}
	.banner-ws {
		min-width: 1200px;
	}
	.bussiness-banner {
		height:500px;
		width:1920px;
		overflow: hidden;
		position: relative;
		left:50%;
		margin-left:-960px;
	}
	.bussiness-banner img {
		object-fit: cover;
		max-width: 1920px;
	}
	.bussiness-info {
		width:1200px;
		min-height:500px;
		background: #ffffff;
		margin:60px auto;
		p {
		width:190px;
		height:65px;
		font-family: PingFangSC-Medium;
		font-size: 28px;
		color: #FFFFFF;
		line-height: 55.8px;
		text-indent: 49px;
		margin:0px 0 0 -19px;
		overflow: auto;
		background: url('../../../static/images/Path 2.png')
		}
	
	}

	.bussiness-info>div {
		padding-top:60px;
	}
	/* .check {
		width:1200px;
		height:460px;
	} */

	.check-info {
		width:100%;
		margin:0 auto;
		border-bottom:1px solid #DEE1E7;
		object-fit: contain;
	}
	.check-info img {
		height:388px;
		width: 1080px;
		margin:20px auto 59px;
		display: block;
		
	}
	
	.goodness p {
		margin-bottom: 0;
	}
	.goodness-img {
		width:1080px;
		margin:0 auto;
		border-bottom:1px solid #DEE1E7;
	}
	/* .cooperation {
		height:472px;
		
	} */
	.credentials {
		height:42px;
		display: flex;
		/* justify-content: center; */
		align-items: center;
		margin-bottom:59px;
		padding-left: 20px;
	}
	.goodness-img img {
		height:306px;
		width: 1080px;
		margin:46px 0 25px 0;
	}
	.credentials span {
		font-size: 18px;
		color:#4A4A4A;
		display: block;
		width:652px;
	}
	.credentials a {
		height:42px;
		width:130px;
		background: #FF3766;
		border-radius: 8px;
		text-decoration: none;
		line-height: 42px;
		color:#FFFFFF;
		font-size:18px;
		text-align: center;
		
	}
	.cooperation {
		width:1200px;
	}
	.cooperation img { 
		width:1101px;
		height:298px;
		margin:60px auto 61px;
	}
	.cooperation-brand {
		padding:0 49px 0 50px;
	}
</style>