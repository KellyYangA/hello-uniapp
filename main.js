import Vue from 'vue'
import App from './App'
import './static/css/base.scss'

// 等官方修复
// import { uniBadge } from '@dcloudio/uni-ui';
// Vue.component('uniBadge',uniBadge)

import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue' 
import uniSwiperDot from "@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot"
Vue.component('uniSearchBar', uniSearchBar)
Vue.component('uniSwiperDot', uniSwiperDot)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
