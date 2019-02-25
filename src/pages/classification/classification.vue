<template lang='pug'>
	div#classification
		Header
		div(@mouseleave='hoverNavListLeave')
			nav
				div.nav-list
					ul
						li(v-for='(item,index) in navList',:key='index',:class='{navListActive:navListActiveIndex==index,navListHover:navListHoverIndex==index}',@click='changeNavList(index)',@mouseenter='hoverNavListEnter(index)') {{item.name}}
			div.second-level(:class="{'second-level-active':type=='centDrawList'}")
				ul(:class="{'second-level-active':type=='centDrawList'}")
					li(v-for='(item,index) in secondLevel',:key='index',@click='changeSecondLevel(index)',:class='{secondActive:secondActiveIndex==index}') 
						span {{ item.name }}	
		Classficationad(:classficationadData='classficationadData',:imgUrlPrefix='imgUrlPrefix',:type='type')
		div.content(v-if="type=='tuanList'&&itemListData.length!=0")
			pintuanItem(v-for='(item,index) in itemListData',:key='index',:itemInfo='item')
		div.content(v-else-if="type=='centDrawList'&&itemListData.length!=0")
			centDrawItem(v-for='(item,index) in itemListData',:key='index',:itemInfo='item')
		div.content(v-else-if="type=='sessionList'&&itemListData.length!=0")
			specil(v-for='(item,index) in itemListData',:key='index',:itemInfo='item',:imgUrlPrefix='imgUrlPrefix')
		div.content(v-else-if="type=='creditList'&&itemListData.length!=0")
			easyPaymentItem(v-for='(item,index) in itemListData',:key='index',:itemInfo='item')
		div.content(v-else-if="itemListData.length==0")
			Emptycontent
		Footer
</template>

<script>
import api from './api.js'
import {getImgUrlPrefix} from '@/utils'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import Classficationad from './components/classificationad'
import pintuanItem from '@/components/common/pintuanItem.vue'
import centDrawItem from '@/components/common/centDrawItem.vue'
import easyPaymentItem from '@/components/common/easyPaymentItem.vue'
import specil from '@/components/common/specil.vue'
import DownloadCode from '@/components/common/downloadcode'
import Emptycontent from '@/components/common/emptycontent.vue'
export default {
	name:'Classification',
	data(){
		return {
			locationRoot:'',
			// 一级展示类目数据，这里规定死了type
			navList:[
				{
					type:'centDrawList',
					name:'一分抽'
				},
				{
					type:'tuanList',
					name:'爆好货拼团'
				},
				{
					type:'sessionList',
					name:'爆好货特卖'
				},
				{
					type:'creditList',
					name:'花呗分期'
				},
			],
			// 二级展示类目数据
			secondLevel:[],
			// 一级类目点击状态
			navListActiveIndex:0,
			// 一级类目hover状态
			navListHoverIndex:-1,
			// 二级类目状态
			secondActiveIndex:0,
			// 所有二级类目
			navigationData:[],
			// 一级类目类型
			type:'',
			// 图片前缀
			imgUrlPrefix:'',
			// 广告位数据
			classficationadData:{},
			itemListData:[],
			// 在鼠标移入一级目录的时候，临时存储二级目录的状态
			wipSecondActiveIndex:0,
			currentPage:1,
			confirmCurrenPage:1,
			pageCount:1
		}
	},
	computed:{
	},
	created(){
		this.locationRoot = location.href.split('?')[0];
		//获取图片前缀
		getImgUrlPrefix().then(()=>{
			this.imgUrlPrefix = localStorage.imgUrlPrefix;
		});
		this.getNavigation()
	},
	components:{
		Header,
		Classficationad,
		Footer,
		pintuanItem,
		centDrawItem,
		easyPaymentItem,
		specil,
		DownloadCode,
		Emptycontent
	},
	methods:{
		// 点击切换一级菜单
		changeNavList(index){
			this.navListActiveIndex = index;
			//重置二级列表
			this.secondActiveIndex = 0;
			// 改变临时存储二级菜单的状态值
			this.wipSecondActiveIndex = this.secondActiveIndex;
			this.secondLevel = this.navigationData[this.navList[index].type];
			//重置navListHoverIndex = -1
			this.navListHoverIndex = -1;
			// 先判断类型，再请求数据
			// 清空列表
			this.itemListData = [];
			this.currentPage = 1 ;
			this.pageCount  =1 ;
			// 记录当前的type
			this.type = this.navList[index].type;
			this.resetData(this.navList[index].type);
			window.history.pushState(null,null,this.locationRoot+'?type='+this.type.split('List')[0]);
		},
		// 点击切换二级菜单
		changeSecondLevel(index){
			//改变二级菜单状态
			this.secondActiveIndex = index;
			// 改变临时存储二级菜单的状态值
			this.wipSecondActiveIndex = index;
			// 清空列表
			this.itemListData = [];
			this.currentPage = 1 ;
			this.pageCount  =1 ;
			// 若是navListHoverIndex == -1，说明点击的是当前一级目录下的二级目录，若不是，就直接用 hover 标记的 navListHoverIndex 序列号
			// 由于一分抽没有二级目录，这里不用做type是不是一分抽判断
			if(this.navListHoverIndex==-1){
				this.getSecondNavData(this.navList[this.navListActiveIndex].type,this.secondActiveIndex);
			}else{
				// 改变当前的一级目录状态
				this.navListActiveIndex = this.navListHoverIndex;
				this.navListHoverIndex  = -1;
				this.type = this.navList[this.navListActiveIndex].type;
				this.getSecondNavData(this.navList[this.navListActiveIndex].type,this.secondActiveIndex)
			}
			window.history.pushState(null,null,this.locationRoot+'?type='+this.type.split('List')[0]+'&id='+this.secondLevel[index].id)
			// 
		},
		// 鼠标移入事件
		hoverNavListEnter(index){
			// 改变鼠标hover标记navListHoverIndex，同时改变二级菜单内容，当前的navListHoverIndex不能等于navListActiveIndex,否则让navListHoverIndex置为-1；
			if(index != this.navListActiveIndex){
				this.navListHoverIndex = index;
				this.secondActiveIndex = -1;
			}else{
				this.navListHoverIndex = -1;
				this.secondActiveIndex = this.wipSecondActiveIndex;
			}
			this.secondLevel = this.navigationData[this.navList[index].type];
		},
		// 鼠标移除事件
		hoverNavListLeave(){
			// 把鼠标hover的标记变为-1
			this.navListHoverIndex = -1;
			// 因为之前的this.navListActiveIndex 点击状态已经记录了之前的状态，鼠标移除的时候直接恢复二级菜单即可
			this.secondLevel = this.navigationData[this.navList[this.navListActiveIndex].type]
		},
		// 二级导航列表
		async getNavigation(){
			//判断location.href的type值
			this.type = location.search.split('&')[0]?(location.search.split('&')[0].split('type=')[1]+'List'):'centDrawList';
			let wipData = await api.getNavigation();
			//判断是不是一分抽，一分抽不用关心页面刚进来的二级类目id
			if(this.type != 'centDrawList' && location.search.split('&')[1]){
				let id = location.search.split('&')[1].split('id=')[1];
				wipData[this.type].forEach((item,index)=>{
					if(item.id == id){
						this.secondActiveIndex = index;
					}
				})
			}
			
			this.navigationData = wipData;
			this.secondLevel = this.navigationData[this.type];
			this.resetData(this.type)
		},
		resetData(type){
			// 找到navList中this.type的序列号
			this.navList.forEach((item,index)=>{
				if(item.type === type){
					this.navListActiveIndex = index;
				}
			})
			//一分抽商品列表
			if(type == 'centDrawList'){
				this.getDrawItemList(this.currentPage);
				this.getCentDrawQuery();
			}else{
				//请求二级类目
				this.secondLevel = type?this.navigationData[type]:this.navigationData['sessionList'];
				this.getSecondNavData(type,this.secondActiveIndex);
			}
		},
		// get二级类目数据及其列表数据
		getSecondNavData(type,secondLevelIndex){
			// 请求默认分类数据,为分类的第一个
			this.getGroupDetail(this.secondLevel[secondLevelIndex].id)
			// 默认请求第一页的数据
			this.getGoodsListData(type,secondLevelIndex,this.currentPage)
		},
		// get列表数据
		getGoodsListData(type,secondLevelIndex,currentPage){
			
			//拼团商品列表
			if(type == 'tuanList'){
				this.getPintuanItemList(this.secondLevel[secondLevelIndex].id,currentPage)
			//品牌特卖专场列表
			}else if(type == 'sessionList'){
				this.getSessionItemList(this.secondLevel[secondLevelIndex].id,currentPage)
			//分期购商品列表
			}else if(type == 'creditList'){
				this.getEasyPaymentItemList(this.secondLevel[secondLevelIndex].id,currentPage)
			}else if(type == 'centDrawList'){
				this.getDrawItemList(currentPage)
			}
		},
		// 分类数据
		async getGroupDetail(id){
			this.classficationadData  = await api.getGroupDetail(id);
		},
		// 一分抽商品列表
		async getDrawItemList(currentPage){
			let wipData = await api.getDrawItemList(currentPage);
			this.pushData(wipData);
		},
		// 分期购商品列表
		async getEasyPaymentItemList(groupId,currentPage){
			let wipData = await api.getEasyPaymentItemList(groupId,currentPage);
			this.pushData(wipData);
		},
		// 品牌特卖专场列表
		async getSessionItemList(groupId,currentPage){
			let wipData = await api.getSessionItemList(groupId,currentPage);
			this.pushData(wipData);
		},
		// 拼团商品列表
		async getPintuanItemList(groupId,currentPage){
			let wipData = await api.getPintuanItemList(groupId,currentPage);
			this.pushData(wipData);
		},
		//一分抽广告位
		async getCentDrawQuery(){
			this.classficationadData = await api.getCentDrawQuery();
			console.log(this.classficationadData)
		},
		pushData(data){
			if(data){
				this.itemListData.push(...data.values);
				this.currentPage++;
				this.confirmCurrenPage = this.currentPage;
				this.pageCount = data.pageCount;
			}
			
			
		},
		nextpage() {
			
			window.onload = window.onscroll = () => {
				let top = document.documentElement.scrollTop || document.body.scrollTop;
				//文本高度
				let textHeight = document.body.scrollHeight;
				//屏幕高度
				let clientHeight =
				document.documentElement.clientHeight || document.body.clientHeight;
				//热卖商品高度
				//去掉热卖商品后高度取消
				if (textHeight - top - clientHeight < clientHeight / 4) {
					
					if(this.confirmCurrenPage == this.currentPage &&this.currentPage<=this.pageCount){
						this.confirmCurrenPage = -1;
						this.getGoodsListData(this.type,this.secondActiveIndex,this.currentPage);
					}
				}
			};
		},
	},
	mounted(){
		this.nextpage();
	}
}
</script>

<style type="text/css" lang='scss' scoped >
	@import '@/utils/reset.scss';
	// @import '@/lib/reset.scss';
	body{
		margin: 0;
	}
	#classification {
		background: #f7f7f7;
	}
	li {
		list-style: none;
		display: inline-block;
	}
	/* 一级导航 */
	nav {
		width:100%;
		background: rgb(233,82,110);
		height:50px;
	}
	.nav-list {
		width:1200px;
		margin:0 auto;
		padding:0;
		li {
			line-height: 50px;
			height:50px;
			padding:0 25px;
			font-family: PingFangSC-Medium;
			font-size: 18px;
			color: #FFFFFF;
			
		}
		.navListActive{
			background: url('../../../static/images/h2_tab_button_selected@3x.png');
			background-size: 100% 100%;
		}
		.navListHover{
			background: pink;
		}
	}
	/* 二级导航 */
	.second-level {
		width:100%;
		height:40px;
		background: #FFFFFF;
		margin-bottom: 60px;
		ul {
			height:40px;
			width:1200px;
			margin:0 auto;
			li {
				height:40px;
				line-height: 40px;
				box-sizing: border-box;
				border-bottom: 4px solid #FFFFFF;
				border-radius: 1px;
				span{
					padding:0 20px;
					border-left: 1px solid #DEE1E7;
				}
			}
			.secondActive{
				border-color: #FF3766;
			}
		}
	}
	/* 分类页面商品内容 */
	.content {
		width:1200px;
		min-height: 500px;
		margin:0 auto 60px;
		display: flex;
		justify-content:flex-start;
		flex-wrap: wrap;
		// position: relative;
		>a{
			margin-right: 40px;
		}
		>a:nth-child(4n){
			margin-right: 0;
		}
	}
.second-level-active{
	background: #f6f6f6;
}
</style>