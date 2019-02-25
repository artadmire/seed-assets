<template lang='pug'>
	div#credential
		Header
		div.credentials-content
			div 
				p {{ '爆好货招商标准' }}
				article
					span {{ '1.  爆好货商城暂不接受个体工商户的入驻申请，商家须为正式注册企业，也不接受非中国大陆企业的入驻申请。 ' }}
					span {{ '2.  商家必须给消费者提供正规发票，发票盖章的公司名称必须与商家与爆好货合作的公司名称一致。'}}
					span {{ '3.  商家必须为所经营商品的品牌方，或提供品牌销售授权证明、代理授权书。' }}
					span {{ '4.  拥有基本电商运营团队，具备完善的能力和售后服务能力。' }}
					span {{ '5.  爆好货商城有权根据包括但不仅限于品牌需求、公司经营状况、服务水平等其他因素退回商家申请；同时爆好货商城有权在申请入驻及后续经营阶段要求商家提供其他资质；爆好货商城将结合各行业发展动态、国家相关规定及消费者购买需求，不定期更新招商标准。' }}
					span {{ '6.  商家必须如实提供资料和信息。' }}
					span {{ '（一） 请务必确保申请入驻及后续经营阶段提供的相关资质和信息的真实性（若商家提供的相关资质为第三方提供，包括但不限于商标证、授权书等，请务必先行核实文件的真实有效性），一旦发现虚假资质或信息的，您的公司将被列入非诚信客家名单，爆好货商城将不再与您进行合作；' }}
					span {{ '（二） 商家应如实提供其店铺运营的主体及相关信息，包括但不限于代理运营商、实际店铺经营主体等信息；' }}
			div
				p {{ '入驻所需材料' }}
				article
					span {{ '1.  营业执照副本：需完成有效年检且所售商品属于经营范围内' }}
					span {{ '2.  税务登记证副本：国税、地税均可，优先上传盖有国税局印章的税务登记证' }}
					span {{ '3.  组织机构代码证副本：织机构代码证必须要年检，年检要求同营业执照年检要求一致，如果出现当地政策规定不定期（非正常年度）年检的情况，需出具政府发文文件的复印件并加盖供应商公章。' }}
					span {{ '4.  法人身份证：正反面扫描件' }}
					span {{ '5.  品牌资质需在有效期内。' }}
					span {{ '（一）自有品牌：上传商标注册证或者注册申请受理通知书。（若办理过变更、转让、续展，请一并提供商标总局颁发的变更、转让、续展证明）' }}
					span {{ '（二）代理品牌：需同时具备下面两个条件：' }}
					span {{ 'a.商标注册证或商标注册申请受理通知书复印件；' }}
					span {{ 'b.各级的正规品牌授权文件，若上一级的授权方或供货商为自然人，则需同时提供其亲笔签名的身份证复印件；' }}
			div 
				p {{ '类目特殊需求' }}
				article
					div.title
						span {{ '商品类目' }}
						span {{ '类目要求' }}
					div.requirements
						//- div.tabsBar(v-show='tabsBar')
						Tabs(tab-position="left" @tab-click = 'change($event)' :value='defalutId')
							TabPane(:label="item.name" v-for='(item,index) in list' :key='item.id' :name='item.id+""')
								//- span {{ CategoryRequest }}
								p(v-for='(item,index) in CategoryRequest',:key='index') {{item}}	
						div.tabs-page
							span(:style='{background: disabledColor}' @click='Pageup' )
								img(src='../../../static/images/zhanshangpage_sidebar_icon_disabled@3x.png')
							span(:style='{background: defaultColor}' @click='Pagedown')
								img(src='../../../static/images/zhanshangpage_sidebar_icon_default@3x.png')
					a(href='condition.html' target='_blank' @click='storageDate') {{ '申请入驻' }}

								
		Footer
</template>
<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import { Tabs, TabPane, ButtonGroup, Button } from 'element-ui'
import api from './api.js'
export default {
	name:'Credentials',
	data () {
		return {
			defaultColor:"#FF9DB4",
			disabledColor:'#FFDAE3',
			//二级类目数据
			list:[],
			//总的页面数
			pageNum: 0,
			//目前显示第几页
			currentPage: 1,
			//类目请求数据
			CategoryRequest:[],
			//目前选中状态的二级类目id
			currentId:'',
			//选中状态的一级类目id
			// currentID:'',
			//一级类目数据
			// levelData:[],
			//存储选中状态的二级类目数据
			currentName:'',
			defalutId:''
			
		}
	},
	computed:{
	},
	
	components:{
		Header,
		Footer,
		Tabs,
		TabPane

	},
	created () {
		//获取全部二级类目数据
		this.getCategory();
		// //获取全部一级类目数据
		// this.getLevelCategory (-1) 
		//获取默认状态下的类目入驻要求数据
		this.getCategoryRequest (8)
	},
	computed: {
		// currentId () {
		// 	return this.list[1].id
		// },
		// currentName () {
		// 	return this.list[1].name
		// }
		//获取当前选中状态下的一级类目名字
		// currentLevelName () {
		// 	for(let i=0;i<this.levelData.length;i++) {

		// 	}
		// }
	},
	mounted(){
		
		
	},
	methods: {
		//向上翻页
		Pageup () {
			var scroll = document.getElementsByClassName('el-tabs__nav')[0]
			this.currentPage = this.currentPage - 1;
			if(this.currentPage < 0) {
				this.currentPage = 0
			}
			scroll.style.transform = 'translateY('+ -this.currentPage * 840+'px)'
			if(this.currentPage == 0) {
				this.disabledColor = "#FFDAE3";
				this.defaultColor = "#FF9DB4";
			}else {
				this.disabledColor = "#FF9DB4";
				
			}
			// this.color1 = "#FF9DB4"
			// this.color2 = '#FFDAE3'
		},
		//向下翻页
		Pagedown () {
			var scroll = document.getElementsByClassName('el-tabs__nav')[0]
			this.currentPage = this.currentPage + 1;
			if(this.currentPage > this.pageNum) {
				this.currentPage = this.pageNum
			}
			scroll.style.transform = 'translateY('+ -this.currentPage * 840 +'px)'
			if(this.currentPage == this.pageNum) {
				this.defaultColor = "#FFDAE3";
				this.disabledColor = "#FF9DB4";
			}else {
				this.defaultColor = "#FF9DB4";
			}
			// this.color1 = '#FFDAE3'
			// this.color2 = "#FF9DB4"
		},
		//点击二级类目获取相应的类目入驻要求
		change (event) {
			this.getCategoryRequest (event.name)
			console.log(event)
			// this.tabsBar = false;
			this.currentId = event.name
			this.currentName = event.label
		},
		storageDate () {
			sessionStorage.setItem('defaultId',this.currentId)
			sessionStorage.setItem('defaultName',this.currentName)
		},
		// //请求一级类目
		// async getLevelCategory(id){	
		// 	const wip = await api.getLevelCategory(id);
		// 		//console.log(wip)
		// 		this.levelData = wip.values
		// },
		//请求二级类目
		async getCategory(){	
			const wip = await api.getCategory();
			//console.log(wip)
				this.list = wip.values
				this.defalutId = this.list[0].id+''
				let length = this.list.length
				this.pageNum = Math.floor(length/14)
				this.currentId = this.list[1].id
				console.log(this.currentId )
				this.currentName = this.list[1].name
				console.log(this.currentName)
		},
		//请求类目入驻要求
		async getCategoryRequest (id){
			this.CategoryRequest = [];
			const wip = await api.getCategoryRequest(id);
			// console.log(wip)
			if(wip){
				wip.condition.split('\n').forEach((item,index)=>{
					this.CategoryRequest.push(item);
				})
			}
			
		},
	}
}
</script>

<style  lang='scss' >
@import '@/utils/reset.scss';
	
	a {
		text-decoration:none;
	}
	p {
		margin:0;
		padding:0;
	}
	body {
		background: #f7f8fa;
		margin:0;
	}
	.credentials-content {
		width: 1200px;
		margin:60px auto;
		min-height: 500px;
		background: #ffffff;
	}
	.credentials-content>div {
		width:1200px;
		padding-top:60px;
	}
	.credentials-content>div>p {
		width:214px;
		height:65px;
		background:url('../../../static/images/Path 2.png');
		margin-left:-18px;
		color:#ffffff;
		font-size:28px;
		font-weight: normal;
		line-height: 56px;
		text-indent: 29px;
	}
	.credentials-content>div>article {
		width:1080px;
		padding:51px 0 58px 0;
		margin:0 auto;
		border-bottom: 1px solid #DEE1E7;
	}
	.credentials-content>div>article>span {
		display: block;
		font-size:18px;
		color:#4D4D4D;
		line-height: 36px;
	}
	.credentials-content>div:last-child article {
		border-bottom: 0;
	}
	
	article {
		overflow: hidden;
		a {
			width:130px;
			display: block;
			height:43px;
			background: #FF3766;
			margin:0 auto;
			border-radius: 8px;
			margin-top:60px;
			line-height: 43px;
			color:#ffffff;
			text-align: center;
			font-size: 18px;
		}
	}
	
	article>.title {
		width: 1080px;
		height:50px;
	}
	article>.title span {
		display: inline-block;
		line-height: 50px;
	}
	article>.title span:first-child {
		width:220px;
		background: #FF3766;
		text-align: center;
		font-size:24px;
		color:#ffffff;
	}
	article>.title span:last-child {
		width:860px;
		color:#4A4A4A;
		font-size:22px;
		text-indent: 39px;
		box-sizing: border-box;
		border:1px solid #DEE1E7;
		border-left:0; 
	}
	.requirements {
		height:882px;
		border:1px solid #DEE1E7;
		border-top:0;
		position: relative;
		
	}
	.el-tabs {
		display: flex;
		height:840px;
		overflow:hidden;
	}
	.el-tabs__header,.el-tabs__nav-wrap {
		width:220px;
		background: #FFF8FA;
		color:#333234;
		height:840px;
		overflow: hidden;
	}
	.el-tabs--left .el-tabs__active-bar.is-left {
		position: absolute;
		width:10px !important;
		height:60px !important;
		background: #FF3766;
		top:0 !important;
		left:0;
		transition: transform 0.5s;
		// transform: translateY(0px) !important;
		
	}
	.el-tabs--left .el-tabs__item.is-left {
		width:220px;
		height:60px;
		line-height: 60px;
		text-align: center;
		font-size:18px;
		color:#333234;
		font-weight: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-indent: 11px;
		&:focus {
			outline: -webkit-focus-ring-color auto 0px;
		}
		&:hover {
			color:#FF3766;
			// transform: translateX(-220px);
			// transition: transform 5s;
			// -moz-transition: transform 5s; /* Firefox 4 */
			// -webkit-transition: transform 5s; /* Safari 和 Chrome */
			// -o-transition: transform 5s; /* Opera */
		}
		
		
	}
	
	.el-tabs--left .el-tabs__header.is-left {
		margin:0;
	}
	.el-tabs__nav-wrap::after {
		background-color: #FFF8FA
	}
	.el-tabs--left .el-tabs__nav-next,.el-tabs--left .el-tabs__nav-prev, .el-tabs--right .el-tabs__nav-prev {
		display: none;
	}
	.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable {
		padding:0;
	}
	.el-tabs__item.is-left.is-active {
		background: #ffffff;
		color:#FF3766;
	}
	.el-tabs__content {
		width:780px;
		height:799px;
		padding:29px 22px 0 40px;
		margin-bottom: 54px;
		margin-right: 13px;
		overflow: auto;
		line-height: 25px;
		
	}
	.el-tabs__item:focus.is-active.is-focus:not(:active) {
		-webkit-box-shadow: none !important;
		box-shadow: none !important;
  	}

	.el-tabs--left .el-tabs__item.is-left {
		padding:0;
	}
	
	.el-tabs__content span {
		display: block;
		color:#737373;
		font-size:18px;
		line-height: 34px;
	}
	.tabs-page {
		position: absolute;
		left:0;
		bottom:0;
		width:220px;
		height:43px;
		display: flex;
		// &>span:first-child {
		// 	border-right:1px solid  #DEE1E7;
		// }
	}
	.tabs-page span {
		display: inline-block;
		width:50%;
		height:43px;
		line-height: 51px;
		text-align: center;

		
	}
	.tabs-page span img {
		height:18px;
		width:18px;
		

	}
	// .tabsBar {
	// 	width:11px;
	// 	height: 60px;
	// 	background: #FF3766;
	// 	position: absolute;
	// 	left:0;
	// 	top:0;
	// 	z-index: 200;
	// }
</style>