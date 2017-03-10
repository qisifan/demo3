const GET_DATA = 'GET_DATA'
//const 

export default{
//	state:{
//		getData:''
//	},
	mutations: {
		changeTab (state,index) {
			state.NavNum =  index;
		},
		[GET_DATA] (state, HomeData){
			state.getData = HomeData;
		}
	},
	actions: {
		changeTab ({commit, state},index) {
			commit('changeTab',index);
		}
	},
}
	
	