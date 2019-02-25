import Vue from 'Vue';
import Help from './help.vue';
import { Icon } from 'element-ui'
Vue.component(Icon.name, Icon)
new Vue ({
	el:'#help',
	render: h => h (Help)
})