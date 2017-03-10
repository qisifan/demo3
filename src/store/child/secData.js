export default{
	mutations:{
		changesecTab (state,index) {
			state.sctNav =  index;
		}
	},
	actions:{
		changesecTab (context,index) {
			context.commit('changesecTab',index);
		}
	}
}
	
	