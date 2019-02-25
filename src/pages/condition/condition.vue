<template lang='pug'>
	div#condition
		Header
		div.entryinfo-content
			p {{ '入驻信息' }}
			div.entryinfo1
				form( method="post")
					div
						label {{ '*品牌名：' }}
						input(type='text' v-model='brandname' name='brand' @input='changecolor') 
					div
						label {{ '*联系人：' }}
						input(type='text' v-model='contact' name='name' @input='changecolor')  
					div
						label {{ '*联系电话：' }}
						input(type='text' v-model='phone' name='phone' @input='changeColor')  
					div.choseCategory
						label {{ '*经营类目：' }}
						input(type='text' placeholder='暂无选择类目' v-model='checkCategory' name='categoryId' @input='changecolors')
						span(@click='showCategory') {{ '更改类目' }}
					div.tabs(v-show='seen')
						p {{ '选择类目' }}
						div
							div.left
								ul
									li( v-for='(item,index) in categoryQuestList' :key='index'   @click='changeStyle(index, item.id, item.name)' :class='{active:isActive == index}' ) {{ item.name }}
							div.right
								div(v-for='item in levelList' :key='item.id')
									input(type='radio' id='' name='level' :value='item.name' v-model='picked')
									label(for='') {{ item.name }}
						div.conform 
							span(@click='deselection') {{ '取消' }}
							i(@click='checkSuccess') {{ '确定' }}
					input(type='submit' value='提交审核' @click.prevent='submitVerify' :style='{background:disabledcolor}' )
					
		Footer
		div(class='shadow' v-show = 'seen')
		div(class='submitSucess' v-show='submitTab')
			img(src='../../../static/images/zhaoshangpage_tijiao_pop_icon_selected@3x.png')
			p {{ '您已提交成功！' }}
			span {{ '工作人员将会在2个工作日内专员和你联系' }}
			a(href='/')
				i(@click='submitSucess') {{ '确定' }}
</template>
<script>
import Vue from 'vue'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import api from './api.js'
import { checkMobile } from '@/utils'
export default {
	name:'condition',
	computed:{
	},
	components:{
		Header,
		Footer
	},
	data () {
		return {
			//点中类目索引
			isActive:-1,
			//一级类目列表
			categoryQuestList: [],
			//当前选中类目内容
			checkCategory:'',
			//点击到的二级类目内容
			picked:'',
			//更改类目弹框
			seen:false,
			//当前选中的一级类目数据
			levelDate:'',
			//相应的二级类目列表
			levelList:[],
			//提交审核弹框
			submitTab:false,
			//品牌名
			brandname:'',
			//联系人
			contact:'',
			//联系方式
			phone:'',
			//目前选中的一级类目id
			checkCategoryId:-1,
			//目前选中类目索引
			checkCategoryIndex:-1,
			//一级类目
			firstCategoryId:'',
			disabledcolor:'#FF9DB4',
			flag:false,
			//默认的二级类目id
			// currentId:'',
			//默认的二级类目名称
			// currentName:''


		}
	},
	created () {
		//获取全部类目
		this.getCategory(-1)
	},
	mounted () {
		// console.log(sessionStorage.getItem('defaultId'))
		// console.log(sessionStorage.getItem('defaultName'))
		// this.currentId = sessionStorage.getItem('defaultId')
		// this.currentName = sessionStorage.getItem('defaultName')
		// console.log(this.categoryQuestList)
		
	},
	methods: {
		//点击左边一级类目，改变点中样式，存储选中类目,请求二级类目
		changeStyle (index, id, name) {
			this.isActive = index
			this.levelDate = name + '/' 
			this.getCategory(id)
			// this.checkCategoryId = id
		},
		//更改过类目以后，点击确定按钮
		checkSuccess () {
			//更新相应类目数据
			// let index = this.checkCategory.indexOf('/')
			// console.log(index)
			// this.checkCategory = this.checkCategory.slice(0,index+1)
			this.checkCategory = this.levelDate + this.picked
			this.seen = false
			//获取选中类目对应的id
			let Categoryindex = this.checkCategory.indexOf('/')
			let oneLevelCategor = this.checkCategory.slice(0,Categoryindex)
			for(let i=0;i<this.categoryQuestList.length;i++){
				if(this.categoryQuestList[i].name == oneLevelCategor){
					this.checkCategoryId = this.categoryQuestList[i].id
					this.checkCategoryIndex = i
					
				}
			}
			if(this.brandname != '' && this.contact!='' && this.flag && this.checkCategory!= ''){
                    this.disabledcolor = '#FF3766'
            }else {
                this.disabledcolor = '#FF9DB4'
            }
		},
		//点击更改类目
		showCategory () {
			this.seen = true
			//首次点击更改类目，默认选中索引为0的类目
			if(this.checkCategory == '') {
				this.isActive = 0
				//默认显示相应的二级类目
				this.getCategory(this.firstCategoryId)
				this.checkCategoryIndex = 0;
			}else {
				this.isActive = this.checkCategoryIndex
			}
			
			
			
		},
		//取消选择
		deselection () {
			this.seen = false
		},
		changeColor () {
			if(checkMobile (this.phone)) {
					this.flag = true
				}else {
					this.flag = false
				}
			if(this.brandname != '' && this.contact!='' && this.flag && this.checkCategory!= ''){
					this.disabledcolor = '#FF3766'
			}else {
				this.disabledcolor = '#FF9DB4'
			}
		},
		changecolor () {
			if(this.brandname != '' && this.contact!='' && this.flag && this.checkCategory!= ''){
				this.disabledcolor = '#FF3766'
			}else {
				this.disabledcolor = '#FF9DB4'
			}
		},
		//提交审核按钮
		submitVerify () {
			if(this.disabledcolor == '#FF3766') {
				this.submitTab = true
				this.seen = true
				console.log(this.brandname,this.contact,this.phone)
				this.postBusinessData({
					url:"/pc/settled/info?brand="+this.brandname+'&name='+this.contact+'&phone='+this.phone+'&categoryId='+this.checkCategoryId,
					// ?brand="+this.brandname+'&name='+this.contact+'&phone='+this.phone+'&categoryId='+this.checkCategoryId,
					// data: {
					// 	brand:this.brandname,
					// 	name:this.contact,
					// 	phone:this.phone,
					// 	categoryId:this.checkCategoryId
					// }
				})
			}
		},
		//提交成功点击确认
		submitSucess () {
			this.submitTab = false
			this.seen = false
		},
		//获取一级类目数据
 		async getCategory(id){	
			const wip = await api.getCategory(id);
			console.log(wip)
			if(id == -1) {
				this.categoryQuestList = wip.values
				this.levelDate = this.categoryQuestList[0].name+'/'
				
			}else {
				this.levelList = wip.values
			}
				
		},
		// async getSecondCategory(id){	
		// 	const wip = await api.getSecondCategory(id);
		// 	this.levelList = wip.values
		// 	console.log(wip,443545)
		// 	for (let i=0;i<this.categoryQuestList.length;i++){
		// 	this.getSecondCategory(this.categoryQuestList[i].id);
			
		// }

		// },
		//提交审核请求数据
		async postBusinessData(obj){	
			const wip = await api.postBusinessData(obj);
			console.log(wip, 4444)
		},
		changecolors(){
			if(this.brandname != '' && this.contact!='' && this.flag && this.checkCategory!= ''){
				if(this.checkCategory.split('/')[1]){
					this.checkCategory.split('/')[1]!=''
					this.disabledcolor = '#FF3766'
				}else {
				this.disabledcolor = '#FF9DB4'
			}
				
			}
		},
        
		
	}

}
</script>	
<style lang='scss' scoped>
@import '@/utils/reset.scss';
	#condition {
		
		background: #F7F7F7;
		position: relative;
		.shadow {
			width:100%;
			height:100%;
			background: rgba(51,50,52,0.3);
			position: absolute;
			left:0;
			top:0;
		}
	}
	.entryinfo-content {
		width:1200px;
		background: #ffffff;
		margin:0 auto;
		height:625px;
		padding-top:60px;
		margin-top:67px;
		margin-bottom: 60px;  	
		
	}
	p {
		padding:0;
		margin:0;
	}
	body {
		background: #f7f8fa;
		font-family: PingFangSC-Regular;
		min-width: 1200px;
	}
	.entryinfo-content>p {
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
	form {
		width:830px;
		padding-left: 370px;
		&>input {
			display: block;
			// background:#FF9DB4;
			border-radius:8px;
			width:184px;
			height:42px;
			line-height: 42px;
			text-align: center;
			color:#ffffff;
			font-size:18px;
			font-weight: normal;
			margin-left: 202px;
		}
		&>div {
			margin-bottom: 40px;
			height:42px;
			label {
				width:100px;
				text-align: right;
				display: inline-block;
				color:#333234;
				font-size:18px;
				height: 40px;
			}
			&>input {
				height:38px;
				width:314px;
				border-radius: 8px; 
				border:1px solid #979797;
				margin-left: 27px;
				background: #F4F4F4;
				padding-left: 15px;
				color: #4d4d4d;
				font-size:18px;
				line-height: 25px;
				background-image: none;
			}
		}
		.choseCategory {
			margin-bottom: 60px;
			input {
				width:152px;
				height:40px;
				padding:0 10px 0 20px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				&::-webkit-input-placeholder{
					font-size: 18px;
					color:#B2B2B2;
				}    /* 使用webkit内核的浏览器 */
				&::-moz-placeholder{
					font-size: 18px;
					color:#B2B2B2;
				}                  /* Firefox版本4-18 */
				&::-moz-placeholder{
					font-size: 18px;
					color:#B2B2B2;
					line-height: 40px;
				}                  /* Firefox版本19+ */
				&::-ms-input-placeholder{
					font-size: 18px;
					color:#B2B2B2;
					line-height: 40px;
				}           /* IE浏览器 */

			}
			
			span {
				width:129px;
				height:42px;
				display: inline-block;
				background: #FF3766;
				border-radius: 8px;
				text-align: center;
				line-height: 42px;
				color:#ffffff;
				margin-left: 20px;
			}
		}
		//弹出框
		.tabs {
			width: 540px;
			height:403px;
			background: #ffffff;
			position: fixed;
			left:50%;
			top:50%;
			margin-top:-200px;
			margin-left:-290px;
			padding:0 20px;
			z-index:100;
			&>p {
				font-size:18px;
				color:#333234;
				font-weight: medium;
				line-height: 25px;
				padding:19px 0 15px 0;
				
			}
			&>div {
				padding:19px 0;
				height:auto;
				border-top: 1px solid #DEE1E7;
				border-bottom: 1px solid #DEE1E7;
				display: flex;
				justify-content: space-between;
				.left,.right {
					width:260px;
					height:240px;
					box-shadow: 0 0 5px 0 #DEE1E7;
					overflow: scroll;
				}
				.left {
					
						li {
							color:#737373;
							font-size:16px;
							font-weight: medium;
							text-indent: 13px;
							width:240px;
							height:30px;
							line-height: 30px;
						}
						.active {
							color:#ffffff;
							background: #FF3766;
							
						}
					

				}
				.right {
						
					div {
						margin-left: 13px;
						line-height: 22px;
						height:22px;
						display: flex;
						margin-bottom: 8px;
						input {
						width:16px;
						height:16px;
						border:1px solid #DEE1E7;
						border-radius: 8px;
						margin-right: 7px;
						appearance: radio;
						-webkit-appearance: radio; 
						-moz-appearance: radio; 
						position: relative;
							&:checked::after {
								position: absolute;
								content: "";
								width: 17px;
								height: 17px;
								border-radius: 8px;
								border:0;
								top: 0px;
								left: -2px;
								background: url('../index/assets/zhaoshangpage_pop_icon_selected@3x.png') no-repeat center,#ffffff;
								background-size: 16px 16px;
							}
						}

						label {
							color:#737373;
							font-size: 16px;
							width:auto;
							height:auto;
						}
					}
					&>div:first-child {
						margin-top:4px;
					}
					
				}
			}
			&>div:after {
				width:0
			}
			.conform {
				display: block;
				float: right;
				margin:0;
				padding:0;
				border:0;
				margin-top:8px;
				span {
					color:#737373;
					font-size:18px;
					line-height: 45px;
					display: inline-block;
					width:87px;
					height:45px;
					text-align: center;
				}
				i {
					width:87px;
					height:45px;
					background: #FF3766;
					display: inline-block;
					border-radius: 8px;
					text-align: center;
					line-height: 45px;
					color:#ffffff;
					
				}
			}
			
		}
	}
	.submitSucess {
		width:580px;
		height:403px;
		position: fixed;
		background: #ffffff;	
		left:50%;
		top:50%;
		margin-left:-290px;
		margin-top:-200px;
		z-index:100;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		img {
			height:70px;
			width:70px;
			margin-bottom: 33px;
		}
		p {
			color:#333234;
			font-size:26px;
			line-height: 37px;
		}
		span {
			color:#737373;
			font-size:20px;
			line-height: 28px;
			margin:31px 0 53px 0;
		}
		i {
			width:130px;
			height:42px;
			background: #FF3766;
			display: inline-block;
			border-radius: 8px;
			text-align: center;
			line-height: 42px;
			color:#ffffff;
		}
	
	}
</style>