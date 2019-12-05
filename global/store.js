import Vue from 'vue'
import Vuex from 'vuex'
import index from '../pages/home/vuex.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		index
	},
})
export default store
export const modulesMap = {} // 存储异步加载的模块名，为了防止多次加载
