// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import baseURL  from '@/baseURL'
console.log(baseURL)
import { Carousel, CarouselItem,Rate, Icon} from 'element-ui'
Vue.use(VueLazyLoad,{
  error:baseURL+'static/images/homepage_placeholder_mini@3x.png',
  loading:baseURL+'static/images/loading.gif',
  attempt: 1
})
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Rate.name, Rate)
Vue.component(Icon.name, Icon)
// Vue.component(Cascader.name, Cascader)
// Vue.component(Tabs.name, Tabs)
// Vue.component(TabPane.name, TabPane)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
