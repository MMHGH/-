import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	// 获取 this.$store.state.page;
    state: {
		page:'index'
	},
	// 同步设置,用这样的方式去调用 this.$store.commit('xxx');
    mutations: {
		setPageSyn(state,res){
			state.page = res.page;
		}
	},
	// 取值： this.$store.getters.page
	getters:{
		page(state){
			return state.page;
		}
	},
	// 异步设置 用这样的方式去调用 this.$store.dispatch('xxx');
    actions: {
		setPage(context,res){
			context.state.page = res;
		}
	}
})
export default store