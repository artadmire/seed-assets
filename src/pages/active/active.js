import Vue from 'vue';
import Active from './active.vue';
import VueLazyLoad from 'vue-lazyload'
import baseURL  from '@/baseURL'
Vue.use(VueLazyLoad,{
	error:baseURL+'static/images/homepage_placeholder_mini@3x.png',
  loading:baseURL+'static/images/loading.gif',
	attempt: 1
  })
new Vue ({
	el:'#active',
	render: h => h (Active)
})