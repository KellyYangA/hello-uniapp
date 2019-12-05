import Vue from 'vue'
import App from './App'
//引入vuex
import store from './global/store'
import './static/css/base.scss'

// 等官方修复
import { uniIcons } from '@dcloudio/uni-ui';
// Vue.component('uniBadge',uniBadge)
Vue.component('uniIcons',uniIcons)
// Vue.component('uniSearchBar',uniSearchBar)

import ccHeaderBar from './colorui/components/ccHeaderBar.vue'
Vue.component('ccHeaderBar',ccHeaderBar)
import ccSwiper from './colorui/components/ccSwiper.vue'
Vue.component('ccSwiper',ccSwiper)

// import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue' 
// import uniSwiperDot from "@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot"
// Vue.component('uniSearchBar', uniSearchBar)
// Vue.component('uniSwiperDot', uniSwiperDot)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
