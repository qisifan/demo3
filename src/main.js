// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import axios from 'axios'
import Swiper from 'swiper'
import {store} from './store/store'
import Mint from 'mint-ui'
import Validator from 'vue-validator'

//外部CSS
import './common/css/animate.css'
import './common/css/swiper-3.4.1.min.css'

Vue.use(Mint);
Vue.use(Validator);
// Vue.use(Loadmore);

//外部JS 
require('./common/js/mock-min.js');
require('./common/js/rem.js');
require('./common/js/public.js');
require('./common/js/mockJson.js');

//router
const title = '秀贝';
router.beforeEach((to,from,next)=>{
	let titleStr = '';
	let paths = to.matched[0];
	let secpaths = to.matched[1];
	if(to.name !== 'Home'){
		for(let i = to.matched.length - 1;i>=0;i--){
			titleStr += `${to.matched[i].meta.title} - `;
//			paths += `${to.matched[i].path}`
		}
	}
//首页一级路由
	titleStr += title
	document.title = titleStr
	if(paths.name == "Home"){
		store.state.NavNum = 0;
	}else if(paths.name == 'Section'){
		store.state.NavNum = 1;
	}else if(paths.name == 'Private'){
		store.state.NavNum = 2;
	}
//section 路由
	if(secpaths){
		if(secpaths.name == 'Share'){
			store.state.sctNav = 0;
		}else if(secpaths.name == 'Movie'){
			store.state.sctNav = 1;
		}else if(secpaths.name == 'Fantastic'){
			store.state.sctNav = 2;
		}else if(secpaths.name == 'Watch'){
			store.state.sctNav = 3;
		}else if(secpaths.name == 'Transmit'){
			store.state.sctNav = 4;
		}	
	}
	next();
})

//全局引用
window.Swiper = Swiper;
window.axios = axios;

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: { App }
})
