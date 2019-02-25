<template lang='pug'>
	div.return
		p {{ '售后服务>退货政策' }}
		div.return-detail
			div 
				h2(@click='changeState(0)')
					div
						span {{ '7天无理由退货' }}
						span {{ '条例总则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[0]}' )
				article(:class='{active:isActive[0]}')
					div
						i {{ '问： 订单退货时效是多久？' }}
						div
							span {{ '答：' }}
							div
								p {{ '自订单签收次日起7日内。' }}
					div
						i {{ '问： 出现哪些情形时，消费者可在签收7天内无理由退货？' }}
						div
							span {{ '答：' }}
							div
								p {{ '1、商品质量问题2、商品非质量问题：商品及商品本身包装保持爆好货出售时原装且配件赠品资料齐全，不影响二次销售的。' }}				
					div
						i {{ '问： 哪些商品不支持7天无理由退货？' }}
						div
							span {{ '答：' }}
							div
								p {{ '在爆好货商城售卖的所有商品支持7天无理由退货，除以下品类外：' }}
								p {{ '1、虚拟商品（如充值卡、流量包等）' }}
								p {{ '2、消费者定制商品（个性定制、设计服务等）' }}
								p {{ '3、鲜活易腐（鲜花绿植、水产肉类、新鲜蔬果等）' }}
								p {{ '4、在线下载或消费者拆封的音像制品、计算机软件等数字化商品' }}
								p {{ '5、交付的报纸、期刊' }}
								p {{ '6、服务类（教育培训、装修设计/施工、监理等）' }}
								p {{ '7、拆封后影响人身安全或者生命健康的商品，或者拆封后易导致商品品质发生改变的商品；（如电动牙刷、食品、酒水、内裤、短袜/打底袜/丝袜/美腿袜、塑身裤、塑身连体衣、乳贴、插片/胸垫等贴身用品、耳机  等）' }}
								p {{ '8、一经激活或者试用后价值贬损较大的商品；或非省会消费所需的商品（如智能设备、商用厨具、工业品、办公耗材、相机、音响、黄金、铂金、电动车整车等）' }}
								p {{ '9、婴儿特殊用品类（如奶嘴等）' }}
								p {{ '10、部分美妆商品（如彩妆/个人护理/护肤）' }}
								p {{ '11、其他根据商品性质并经消费者在购买时确认不宜退货的商品' }}
					div
						i {{ '问： 出现哪些情形时不予退货？' }}
						div
							span {{ '答：' }}
							div
								p {{ '1、任何非爆好货出售的商品（序列号不符）；' }}
								p {{ '2、已经超过三包期限的商品；' }}
								p {{ '3、未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装所造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记；' }}
								p {{ '无法提供商品的发票（如已索要发票）、保修卡等三包凭证或者三包凭证信息与商品不符及被涂改的；礼包或套装中的商品不可以部分退货。' }}
					div
						i {{ '问：退货运费由谁承担？' }}
						div
							span {{ '答：' }}
							div
								p {{ '1、因商品质量问题产生的退货，退货运费由商家承担；' }}
								p {{ '2、因您个人原因产生的退货，退货运费由您个人承担。' }}
			div 
				h2(@click='changeState(1)')
					div
						span {{ '服饰箱包及鞋类商品' }}
						span {{ '退货细则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[1]}')
						
				article(:class='{active:isActive[1]}')
					div
						p {{ '1 、退货成立条件' }}
						span {{ '   1.1 商品质量问题' }}
						span {{ '   1.2 非质量问题：商品及商品本身包装保持爆好货出售时原装且配件赠品资料齐全，不影响二次销售，可以在签收次日起7天内退货。' }}
					div
						p {{ '2、 注意事项' }}
						span {{ '   2.1 任何因非正常使用、保管或个人原因造成的商品损坏（如自行修改尺寸，洗涤，皮具表面刮花、变形、打油、刺绣、水洗、碰酸、碱、油或者触碰硬物，雨天穿着，长时间穿着，五金配件缺少等），不予退货。' }}
						span {{ '   2.2 商品吊牌、发货单、商品配件（如配饰挂坠、肩带、小卡包等）、说明书、保修单、标签等丢失，不予退货；如您购买时索要发票，一经退货请将发票随商品一同寄回，如发票丢失将无法办理退货；' }}
						span {{ '  2.3 遇过敏问题产生退货需要提供医院的相关证明；' }}
						span {{ '  2.4 订单含有礼包或套装的商品不可以部分退货，如有赠品等需同商品一起退回。' }}
					div
						p {{ '温馨提示：服饰、鞋类商品的穿着效果会因人而异，与个人体型、搭配风格有所关联，因此，商品描述页面介绍的尺码及穿戴效果仅供参考，如果您对商品细节有任何疑问，请在订购前与客服联系并详细确认。' }}
			div 
				h2(@click='changeState(2)')
					div
						span {{ '美容化妆类商品' }}
						span {{ '退货细则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[2]}')
				article(:class='{active:isActive[2]}')
					div
						p {{ '1 、退货成立条件' }}
						span {{ '   1.1 商品质量问题' }}
						span {{ '   1.2 非质量问题：商品及商品本身包装保持爆好货出售时原装且配件赠品资料齐全，不影响二次销售，可以在签收次日起7天内退货。' }}
					div
						p {{ '2、 注意事项' }}
						span {{ '  2.1出于安全和卫生考虑，已使用的化妆品不予退货，经权威部门检测商品存在内在质量问题者除外。' }}
						span {{ '  2.2如商品包装破损，商品过期或离过期不到2个月可以申请退货。' }}
						span {{ '  2.3商品销售页面明确标示商品保质期将到期、外包装有损坏或产品有瑕疵的，不得再以此为由要求退货。' }}
						span {{ '  2.4因过敏问题而产生退货需要提供医院的相关证明。' }}
						span {{ '  2.5爆好货保证商品的进货渠道和质量，如果您在使用时对商品质量表示质疑，请出具书面鉴定，爆好货会按照国家法律规定予以处理。' }}
					div
						p {{ '温馨提示：化妆品的使用效果会因肤质、年龄、季节、气候、使用方法以及配套产品等的不同而效果不一，如皮肤发生过敏情况可能与饮食、生活作息及情绪有关，因此，介绍的功能及使用效果仅供参考，如果您对商品细节有任何疑问，请在订购前与客服联系并详细确认。' }}
			div 
				h2(@click='changeState(3)')
					div
						span {{ '食品类商品' }}
						span {{ '退货细则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[3]}')
				article(:class='{active:isActive[3]}')
					div
						p {{ '1 、退货成立条件' }}
						span {{ '   1.1 商品质量问题' }}
						span {{ '   1.2 非质量问题：商品及商品本身包装保持爆好货出售时原装且配件赠品资料齐全，不影响二次销售，可以在签收次日起7天内退货。' }}
					div
						p {{ '2、 注意事项' }}
						span {{ '从爆好货网站订购的食品类商品，为了保证食品安全，请在收货时务必仔细查验商品及保质期，如发现商品存在包装破损，或保质期问题，请您当场向配送人员指出后拒收整个包裹。' }}
					div
						p {{ '温馨提示：保健品的服用效果会因人而异，与个人体质、肠道吸收、使用方法以及是否科学实现合理膳食有关联。介绍的功能及使用效果仅供参考，如果您对商品细节有任何疑问，请在订购前与客服联系并详细确认。' }}
			div 
				h2(@click='changeState(4)')
					div
						span {{ '家居家纺类商品' }}
						span {{ '退货细则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[4]}')
				article(:class='{active:isActive[4]}')
					div
						p {{ '1 、退货成立条件' }}
						span {{ '   1.1 商品质量问题' }}
						span {{ '   1.2 非质量问题：商品及商品本身包装保持爆好货出售时原装且配件齐全，不影响二次销售，可以在签收次日起7天内退货。' }}
					div
						p {{ '2、 注意事项' }}
						span {{ '   2.1 因个人原因造成商品损坏（如自行修改尺寸、洗涤）的则不予退货；' }}
						span {{ '   2.2 商品吊牌、商品配件、说明书、保修单及标签等丢失的或包装破损，不予退货。' }}
			div 
				h2(@click='changeState(5)')
					div
						span {{ '小家电类商品' }}
						span {{ '退货细则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[5]}')
				article(:class='{active:isActive[5]}')
					div
						p {{ '1 、退货成立条件' }}
						span {{ '   1.1 商品质量问题' }}
						span {{ '   1.2 非质量问题： 商品及商品本身包装保持爆好货出售时原状且配件赠品资料齐全(注：商品完好无损或未撕开开箱即损贴纸)，不影响二次销售，可在签收次日起7日内退货；' }}
					div
						p {{ '注意事项' }}
						span {{ '  2.1 退货时，请您务必将商品的外包装、内带附件、保修卡、说明书、发票等随同商品一起退回；' }}
						span {{ '  2.2 若商品在购买时附带赠品，办理退货时需将赠品一起退回；' }}
						span {{ '  2.2 若商品在购买时附带赠品，办理退货时需将赠品一起退回；  2.3 因厂商会在没有任何提前通知的情况下更改商品包装、产地或者一些附件，因此您收到的商品有可能与爆好货提供的图片、产地、附件说明不完全一致，请您以收到商品实物中标示的包装清单为准；爆好货会尽量做到及时更新，同时确保商品为原装正品；' }}
						span {{ '  2.3 因厂商会在没有任何提前通知的情况下更改商品包装、产地或者一些附件，因此您收到的商品有可能与爆好货提供的图片、产地、附件说明不完全一致，请您以收到商品实物中标示的包装清单为准；爆好货会尽量做到及时更新，同时确保商品为原装正品；' }}
						span {{ '  2.4 从爆好货网站订购的个人护理类商品，如：剃须刀、女士剃/脱毛器、美容器、卷发器、理发器、电动牙刷、鼻毛器等，请您当场验收，若商品有破损、渗漏、缺少配件、配送错误等问题，请当即与爆好货客服人员联系。' }}
			div 
				h2(@click='changeState(6)')
					div
						span {{ '手表首饰礼品类商品' }}
						span {{ '退货细则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[6]}')
				article(:class='{active:isActive[6]}')
					div
						p {{ '1 、退货成立条件' }}
						span {{ '   1.1 商品质量问题' }}
						span {{ '   1.2 非质量问题：商品及商品本身包装保持爆好货出售时原装且配件赠品资料齐全，不影响二次销售，可以在签收次日起7天内退货。' }}
					div
						p {{ '2、注意事项' }}
						span {{ '   2.1非人为损坏，且产品有质量问题的，将附件、说明书、保修卡、发票、购物凭证、原包装、商品一并返回爆好货办理退货手续' }}
						span {{ '   2.2对于高档首饰都附带国家级宝玉石鉴定中心出具的鉴定证书，如果您对此有任何质疑，请到出具该证书的鉴定机构进行复检；' }}
						span {{ '   2.3不符合退货的情况' }}
						span {{ '    （1）商品自身携带的产品序列号与爆好货所售出的不符；' }}
						span {{ '    （2）已佩戴过的商品和受损、污染的商品；' }}
						span {{ '    （3）任何因非正常使用及保管导致出现质量问题的商品；' }}
						span {{ '    （4）缺少随商品附带的保修卡、发票、配件等；' }}
						span {{ '    （5）商品已打开塑封包装或撕开开箱即损贴纸者，但有质量问题除外；' }}
						span {{ '    （6）将商品存储、暴露在超出商品适宜的环境中；' }}
						span {{ '    （7）未经授权的修理、误用、疏忽、滥用、事故、改动、不正确的安装；' }}
						span {{ '    （8）食物或液体溅落造成损坏；' }}
						span {{ '    （9）商品使用中出现的磨损，非质量问题；' }}
						span {{ '    （10）手表表带经过调整，但有质量问题除外；' }}
						span {{ '   2.4为了保证您的利益，请您在收到商品时，仔细检查，如果您发现有任何问题，请您当时指出，并办理退货或拒收。' }}
			div 
				h2(@click='changeState(7)')
					div
						span {{ '运动健身器械、玩具类商品' }}
						span {{ '退货细则' }}
					div
						i {{ meg }}
						img(:src='baseURL+"static/images/helppage_tabbar_icon_lower@3x.png"' :class='{imageActive:isActive[7]}')
				article(:class='{active:isActive[7]}')
					div
						p {{ '1 、退货成立条件' }}
						span {{ '   1.1 商品质量问题' }}
						span {{ '   1.2商品及商品本身包装保持爆好货出售时原状且配件齐全(注：商品完好无损或未撕开开箱即损贴纸)，不影响二次销售，在签收次日起7日内办理退货。' }}
					div
						p {{ '2、注意事项' }}
						span {{ '   2.1出现以下任一情形时，均不予退货：' }}
						span {{ '  （1）产品有明显使用痕迹；' }}
						span {{ '  （2）非正常条件下存储、暴露在潮湿环境中、暴露在温度过高或过低环境中；' }}
						span {{ '  （3）未经授权的修理、误用、疏忽、滥用、事故、改动；' }}
						span {{ '  （4）不正确的安装、不可抗力、食物或液体溅落、产品的正常磨损等；' }}
						span {{ '  （5）退回的商品已打开塑封包装或撕开开箱即损贴纸、包装不完整、所附配件及资料不全、赠品不齐全。' }}
</template>
<script>
import baseURL from '@/baseURL'
export default {
	name: 'Return',
	data () {
		return {
			meg:'展开',
			isActive:[false,false,false,false,false,false,false,false],
			baseURL:''
		}
	},
	
	methods:{
		changeState(index){
			console.log(this.isActive[index])
			this.isActive[index] = !this.isActive[index]
			this.isActive = this.isActive.slice()
			
		}
	},
	created(){
		this.baseURL = baseURL;
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	@import "~@/lib/reset.scss";
 .return {
		&>p {
			@include rect(860px,55px);
			border-bottom: 1px solid #DEE1E7;
			color:#737373;
			font-size:20px;
			margin-bottom: 40px;
		}
		.return-detail {
			width:840px;
			margin:0 auto;
			&>div:last-child {
				margin-bottom: 60px;
			}
			div {
				margin-bottom: 20px;
				.active {
						display: block;
					}
				h2 {
					height:60px;
					border:1px solid #DEE1E7;
					line-height: 60px;
					padding:0 20px;
					display: flex;
					justify-content: space-between;
					&>div:first-child {
						span {
						line-height: 60px;
						font-weight: medium;
						color:#ff3766;
						font-size:20px;
						}
						&>span:last-child {
							line-height: 60px;
							font-weight: medium;
							color:black;
							font-size:20px;
						}
						
					}
						
					}
					div {
						i {
						color:#737373;
						font-size:16px;
						margin-right:8px;
						}
						img {
							width:13px;
							line-height: 60px;
						}
						.imageActive {
							transform: rotate(180deg);
							-ms-transform: rotate(180deg); /* IE 9 */
							-webkit-transform: rotate(180deg); /* Safari and Chrome */
						}
					}
					
				}
				article {
					padding:21px 21px 34px 21px;
					border:1px solid #DEE1E7;
					border-top:0;
					display: none;
					&>div:last-child {
						margin-bottom: 0
					}
					&>div {
						margin-bottom: 40px;
						&>p {
							color:#4A4A4A;
							font-size:16px;
							line-height: 26px;
						}
						&>span {
							color:#737373;
							font-size:16px;
							line-height: 26px;
							display: block;
						}
						&>i {
							color:#4A4A4A;
							font-size:16px;
							line-height: 26px;
							display: block;
						}
						div {
								display: flex;
								color:#737373;
								font-size:16px;
								line-height: 26px;
								margin-bottom: 0;
								div {
									display: block;
								}
							}
					}
					&>div {
						display: block;
					}
				}
			}
		}

 
</style> 
