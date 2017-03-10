<template>
	<div class="watch">
	    <div class="loading" v-if="loading">
		      <loads></loads>
	    </div>
	    <div v-if="error" class="error" v-text="error">
	    </div>
		<zhbtop></zhbtop><!--v-if="zhibskip"-->
		<zhibcnt></zhibcnt>
		<zhibrmd></zhibrmd><!--v-if="zhibskip"-->
		<!--<transition enter-active-class="animated fadeIn" >-->
			<router-view></router-view>
		<!--</transition>-->
	</div>
</template>
<script>
import zhbtop from './subpage/zhbTop'
import zhibcnt from './subpage/zhibContent'
import zhibrmd from './subpage/zhibRecommend'
import loads from '../loading.vue'
import {mapState} from 'vuex'

	export default {
		name:'watch',
		data () {
			return{
				loading:false,
    			error:null,
			}
		},
		components: {
			zhbtop,
			zhibcnt,
			zhibrmd,
			loads
		},
		created (){
			this.fetchData();
			this.loading = true;
    		this.error = null;
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				let that = this;
				axios.get('http://xiubei.com/common/columnZb')
				.then(function(res){
					if(res) {
						that.loading = false;
						that.$store.dispatch('watchdt',res);
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.watch{
		width: 100%;
		padding-top: 1.8rem;
		background-color: white;
		.loading{
			position: absolute;
		    top: 650%;
		    left: 45%;
		}
	}
</style>