<template>
	<!--开脑洞-->
	<div class="fantas">
	    <div class="loading" v-if="loading">
		      <loads></loads>
	    </div>
	    <div v-if="error" class="error" v-text="error">
	    </div>
		<div class="fxTop">
			<img src="../../images/knd/方法@2x.png"/>
			<div class="fx-logo"></div>
			<div class="fx-logo2"></div>
		</div>
		<div class="fxBt">
			<span v-text="fantData"></span>
		</div>
	</div>
</template>
<script>
import loads from '../loading.vue'
import {mapState} from 'vuex'

	export default {
		name: 'fantas',
		data () {
			return {
				loading:false,
    			error:null,
			}
		},
		components:{
			loads
		},
		computed: mapState({
			fantData: state => state.secKndData,
		}),
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
				axios.get('http://xiubei.com/common/columnKnd')
				.then(function(res){
					if(res) {
						that.loading = false;
						that.$store.dispatch('fantdt',res);
					}
				})
			}
		},
	}
</script>
<style lang='scss' scoped>
	.fantas{
		width: 100%;
		margin-top: .5rem;
		.fxTop{
			width: 100%;
			height: 10rem;
			position:relative;
			img{
				height: 100%;
				width: 100%;
			}
			.fx-logo{
				width: .9rem;
        		height: .9rem;
        		position: absolute;
        		left: .5rem;
        		top: .5rem;
        		background: url(../../images/homePage/kj-6.png) no-repeat;
        		background-size:100% 100%;
			}
			.fx-logo2{
				height: .75rem;
        		width: 1.55rem;
        		position: absolute;
        		right:0;
        		bottom:0;
        		background: url(../../images/homePage/fx-6.png) no-repeat;
        		background-size:100% 100%;
			}
		}
		.fxBt{
			width: 100%;
			height: 2.2rem;
			background-color: #f2f2f2;
			text-align: start;
			/*line-height: 1rem;*/
			display: flex;
			align-items: center;
			span{
				display: inline-block;
				font-size: .7rem;
				margin: 0 .25rem;
				overflow : hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 2;
			    -webkit-box-orient: vertical;
			}
		}
		.loading{
			position: absolute;
		    top: 650%;
		    left: 45%;
		}
	}
</style>
