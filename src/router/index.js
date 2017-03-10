import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = function (resolve) {require(['../components/Home.vue'],resolve)};
const Section = function (resolve) {require(['../components/Section.vue'],resolve)};
const Private = function (resolve) {require(['../components/Private.vue'],resolve)};
//Section 子路由
const Share = function (resolve) {require(['../components/sectionChild/share.vue'],resolve)};
const Transmit = function (resolve) {require(['../components/sectionChild/transmit.vue'],resolve)};
const Movie = function (resolve) {require(['../components/sectionChild/movie.vue'],resolve)};
const Watch = function (resolve) {require(['../components/sectionChild/watch.vue'],resolve)};
const Fantastic = function (resolve) {require(['../components/sectionChild/fantastic.vue'],resolve)};

// mine
const nologin = function (resolve){require(['../components/mineComponent/nologin.vue'],resolve)};
const login = function (resolve){require(['../components/mineComponent/login.vue'],resolve)};
const registered = function (resolve){require(['../components/mineComponent/registered.vue'],resolve)};
const logged = function (resolve){require(['../components/mineComponent/logged.vue'],resolve)};
const mycollect = function (resolve){require(['../components/mineComponent/logged/mycollect.vue'],resolve)};
const mymsg = function (resolve) {require(['../components/mineComponent/logged/mymsg.vue'],resolve)};

//直播详情页
const zhibDtail = function (resolve) {require(['../components/sectionChild/subpage/zhibDtails.vue'],resolve)};
const activity = function (resolve) {require(['../components/sectionChild/subpage/activity.vue'],resolve)};
//商品详情
const goods = function (resolve) {require(['../components/GoodsDetails/goods.vue'], resolve)};
const banner1 = function (resolve) {require(['../components/GoodsDetails/classify1.vue'], resolve)};
const banner2 = function (resolve) {require(['../components/GoodsDetails/classify2.vue'], resolve)};

const details = function (resolve) {require (['../components/sectionChild/subpage/shareCont.vue'],resolve)};
const router = new Router({
	mode: 'history',
	base: __dirname,
	saveScrollPosition:true,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{
      	title:'秀贝'
      },
      component: Home
    },{
    	path: '/Section',
    	name: 'Section',
    	meta:{
    		title:'栏目'
    	},
    	component:Section,
    	children:[
    		{
    			path:'Share/',
    			name:'Share',
    			meta:{
    				title:'分享志'
    			},
    			component:Share,
    		},{
    			path:'Movie/',
    			name:'Movie',
    			meta:{
    				title:'影游纪'
    			},
    			component:Movie
    		},{
    			path:'Fantastic/',
    			name:'Fantastic',
    			meta:{
    				title:'开脑洞'
    			},
    			component:Fantastic
    		},{
    			path:'Watch/',
    			name:'Watch',
    			meta:{
    				title:'直播GO'
    			},
    			component:Watch,
    		},{
    			path:'Transmit/',
    			name:'Transmit',
    			meta:{
    				title:'视界观'
    			},
    			component:Transmit
    		},
			{
				path:'zhibDtail/',
				name:'zhibDtail',
				meta:{
					title:'视频详情'
				},
				component:zhibDtail,
			},
			{
				path:'details/',
				name:'details',
				meta:{
					title:'详情'
				},
				component:details
			}
    	]
    },{
		path:'/Private',
		name:'Private',
		meta:{
			title:'我的',
		},
		component:Private,
        children:[
            {
                path:"nologin/",
                name:'nologin',
                meta:{
                title:'登录'
                },
                component:nologin
            },
            {
                path:'login/',
                name:'login',
                meta:{
                title:'登录'
                },
                component:login
            },
            {
                path:"registered/",
                name:'registered',
                meta:{
                title:'注册'
                },
                component:registered
            },
            {
                path:'logged/',
                name:'logged',
                meta:{
                title:'登录'
                },
                component:logged
            },
            {
                path:"logged/mycollect",
                name:'mycollect',
                meta:{
                title:'登录'
                },
                component:mycollect
            },
            {
                path:"logged/mymsg",
                name:'mymsg',
                meta:{
                title:'登录'
                },
                component:mymsg
            }
        ]
    },{
    	path:'/activity',
    	name:'activity',
    	meta:{
    		title:'活动'
    	},
    	component:activity
    },
	{
		path: '/goods',
		name:'goods',
		meta:{
			title:'商品详情'
		},
		component: goods,
		children:[
			{
				path:'bannero/',
				name:'banner1',
				meta:{
					title:'商品详情'
				},
				component:banner1,
			},
			{
				path:'bannert/',
				name:'banner2',
				meta:{
					title:'商品详情'
				},
				component:banner2,
			},
		]
	},{
    	path:'*',
    	name:'UnKnow',
    	redirect:'/'
    }
  ]
})
export {router}
