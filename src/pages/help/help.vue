<template lang='pug'>
	div#help
		Header
		div.help-center
			div.nav-list
				ul
					li(:class='{ activeList: isActive == 0 }' @click='changeStyle(0)') {{ '新手指南' }}
					li(:class='{ activeList: isActive == 1 }' @click='changeStyle(1)') {{ '常见问题' }}
					li(:class='{ activeList: isActive == 2 }' @click='changeStyle(2)') {{ '支付方式' }}	
					li(@click='changeMenu1(3)' :class='{ activeList: isActive == 3 }') {{ '配送方式' }}
						img(src='../../../static/images/help_sidebar_icon_default@3x.png' :class="[{active:flag1}]")
					ul(:style="{height:height1+'px'}" )
						li(:class='{ activeList: isActive == 4 }' @click='changeStyle(4)') {{ '配送服务' }}
						li(:class='{ activeList: isActive == 5 }' @click='changeStyle(5)') {{ '商品验货与签收' }}
					li(@click='changeMenu2(6)' :class='{ activeList: isActive == 6}') {{ '售后服务' }}
						img(src='../../../static/images/help_sidebar_icon_default@3x.png' :class="[{active:flag2}]")
					ul(:style="{height:height2+'px'}" )
						li(:class='{ activeList: isActive == 7 }' @click='changeStyle(7)') {{ '退货政策' }}
						li(:class='{ activeList: isActive == 8 }' @click='changeStyle(8)') {{ '退款和时效' }}
					li(:class='{ activeList: isActive == 9 }' @click='changeStyle(9)') {{ '物流承诺' }}
			aside
				keep-alive
					component(:is='currentComponent[tab]')
		Footer
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import Newperson from './components/newperson.vue'
import Question from './components/question.vue'
import Payment from './components/payment.vue'
import Preparegoods from './components/preparegoods.vue'
import Signfor from './components/signfor.vue'
import Return from './components/return.vue'
import Promises from './components/promise.vue'
import Refunds from './components/refunds.vue'
import Vue from 'vue'
import { Icon } from 'element-ui'
Vue.component(Icon.name, Icon)
export default {
	name:'Help',
	data () {
		return {
			height1:'0',
			height2:'0',
			flag1:false,
			flag2:false,
			currentComponent:[Newperson,Question,Payment,'',Preparegoods,Signfor,'',Return,Refunds,Promises],
			isActive:0,
			tab:0
		}
	},
	components:{
		Header,
		Newperson,
		Footer	
	},
	
	mounted(){
	},
	methods:{
		changeMenu1 (index) {
			this.tab = index+1
			this.flag1 = !this.flag1
			this.isActive = index+1;
			if(this.flag1 == true) {
				this.height1='140'
			}else {
				this.height1='0'
			}
		},
		changeMenu2 (index) {
			this.tab = index+1
			this.flag2 = !this.flag2
			this.isActive = index+1
			if(this.flag2 == true) {
				this.height2='140'
			}else {
				this.height2='0'
				
			}
		},
		changeStyle (index) {
			this.isActive = index
			this.tab = index
		}
		
	}
}
</script>

<style type="text/css"  lang='scss'>
@import "~@/lib/reset.scss";
	* {
		margin:0;
		padding: 0;
	}
	body,html {
		@include overflow(auto);
	}
	#help {
		@include background-color(#f7f8fa);
		font-family: 'Avenir', Helvetica, Arial, sans-serif, PingFangSC-Regular;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		@include overflow();
	}
	.help-center {
		@include rect(1200px,auto);
		margin:60px auto;
		@include overflow();
		@include flexbox();
		.nav-list {
			@include rect(280px,800px);
			@include background-color(#ffffff);
			ul {
				// @include rect(100%,100%);
				li {
					@include rect(280px,77px);
					line-height: 77px;
					border-bottom:1px solid #DEE1E7;
					text-indent:59px;
					@include font-size(22px);
					color:#4A4A4A;
					
					img {
						height:16px;
						margin-left:20px
					}
					.active {
						// transition:transform 1s;
						// -moz-transition:transform 1s; /* Firefox 4 */
						// -webkit-transition:transform 1s; /* Safari and Chrome */
						// -o-transition:transform 1s; /* Opera */
						transform: rotate(90deg);
						-ms-transform: rotate(90deg); /* IE 9 */
						-webkit-transform: rotate(90deg); /* Safari and Chrome */
					}
				}
				.activeList {
						color:#FF3766;
				}
				ul {
					@include overflow();
					transition:height 1s;
					 -moz-transition:height 1s; /* Firefox 4 */
					 -webkit-transition:height 1s; /* Safari and Chrome */
				 	 -o-transition:height 1s; /* Opera */
					li {
						height:70px;
						@include background-color(#F7F7F7);
						font-size:20px;
						color:#737373;
						border:0;
					}
					.activeList {
						color:#FF3766;
						background: #FFDAE3;
					}
				}
			}
		}
		aside {
			min-height:774px;
			height:auto !important; /*兼容FF,IE7也支持 !important标签*/
			width:900px;
			margin-left: 20px;
			@include background-color(#ffffff);
			padding:26px 20px 0 20px;
		}
	}
</style>