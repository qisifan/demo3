import Vue from 'vue'
import Vuex from 'vuex'
import HomeData from './child/HomeData'
import secData from './child/secData'

const GET_HOMEDATA = 'GET_HOMEDATA'
const GET_FXZDATA = 'GET_FXZDATA'
const GET_YYDATA = 'GET_YYDATA'
const GET_KNDDATA = 'GET_KNDDATA'
const GET_ZBDATA = 'GET_ZBDATA'
const GET_SJGDATA = 'GET_SJGDATA'
const USER_DATA = 'USER_DATA'
Vue.use(Vuex);

const store =  new Vuex.Store({
	state:{
	// 首页Nav 导航显示
		NavNum: 0,
	// section Nav,
		sctNav: 0,
	//首页数据
		smallLData:null,
		smallRData:null,
		bigData:null,
		infTData:null,
		infCData:null,
		infLData:null,
		infComData:null,
	//分页数据
	//分享志
		secFxData:null,
	//影游纪
		secYYData:null,
	//开脑洞
		secKndData:null,
	//直播
		secZbTitle: null,
		secZbTitlename: null,
		secZbTitleC: null,
		secZbcontN: null,
		secZbcontC: null,
		secZbcomC:null,
	//世界观
		secsjgData:null,
	//video 详情
		aroundleft:null,
	//goods 详情
		goodsSize:null,
		goodspic:null,
	// path
		tabs: '/',
	//USER
		regData: [],
	},
	modules: {
		HomeData,
		secData
	  },
	
	mutations: {
	//首页数据	
		[GET_HOMEDATA] (state, HomeData){
			state.smallLData = HomeData.data.array[2].msgData[2];
			state.smallRData = HomeData.data.array[1].bannerText;
			state.bigData = HomeData.data.array[4].videosData[4];
			state.infTData = HomeData.data.array[3].detailData[2];
			state.infCData = HomeData.data.array[3].detailData[3];
			state.infLData = HomeData.data.array[3].detailData[4];
			state.infComData = HomeData.data.array[3].detailData[5];
		},
	//栏目数据
	//分享志
		[GET_FXZDATA] (state, shareDt) {
			state.secFxData = shareDt.data.array[0].fxData[1];
		},
	//影游纪
		[GET_YYDATA] (state, moviedt) {
			state.secYYData = moviedt.data.array[0].yyjData[1];
		},
	//开脑洞
		[GET_KNDDATA] (state, fantdt) {
			state.secKndData = fantdt.data.array[0].kndData[1];
		},
	//直播
		[GET_ZBDATA] (state, zhibdt) {
			state.secZbTitle = zhibdt.data.array[0].portraitImg[1];
			state.secZbTitlename = zhibdt.data.array[0].portraitImg[2];
			state.secZbTitleC = zhibdt.data.array[0].portraitImg[3];
			state.secZbcontN = zhibdt.data.array[1].zbmsgImg[2];
			state.secZbcontC = zhibdt.data.array[1].zbmsgImg[3];
			state.secZbcomC = zhibdt.data.array[2].zbcomment[2];
		},
	//世界观
		[GET_SJGDATA] (state, woddt) {
			state.secsjgData = woddt.data.array[0].sjgData[1];
		},
	//视频详情swip
		actswip (state,index) {
			state.aroundleft = index;
		},
		goodsSize (state,num) {
			state.goodsSize = num;
		},
		goodspic (state,num) {
			state.goodspic = num;
		},
	// path
		tabpath (state, path){
			state.tabs = path;
		},
		[USER_DATA] (state, arr) {
			state.regData.push(arr);
		}
	},
	actions: {
	//首页数据
		homedt ({commit, state},res){
			commit('GET_HOMEDATA',res);
		},
	//分享志
		sharedt ({commit, state},res) {
			commit('GET_FXZDATA',res);
		},
	//影游纪
		moviedt ({commit, state},res) {
			commit('GET_YYDATA',res);
		},
	//开脑洞
		fantdt ({commit, state},res) {
			commit('GET_KNDDATA',res);
		},
	//视界观
		worlddt ({commit, state},res) {
			commit('GET_SJGDATA',res);
		},
	//直播
		watchdt ({commit, state},res) {
			commit('GET_ZBDATA',res);
		},
		regData ({commit, state},arr) {
			commit('USER_DATA',arr);
		}
	}
})

export {store}