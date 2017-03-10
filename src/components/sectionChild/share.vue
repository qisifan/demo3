<template>
	<div class="share">
	    <div class="loading" v-if="loading">
		      <loads></loads>
	    </div>
	    <div v-if="error" class="error" v-text="error">
	    </div>
		<!--分享志-->
		<router-link :to="dtroute.path" tag="div">
			<div > <!-- v-for="count in fxzData2"-->
				<div class="fxTop">
					<img src="../../images/fenxz/newbag/组-21@2x.png"/>
					<div class="fx-logo">世界观</div>
					<!--<div class="fx-logo2"></div>-->
				</div>
				<div class="fxBt">
					<span v-text="fxCont"></span>
				</div>
			</div>
		</router-link>
			<div > <!-- v-for="count in fxzData2"-->
				<div class="fxTop">
					<img src="../../images/fenxz/newbag/组-223ww@2x.png"/>
					<div class="fx-logo">世界观</div>
					<!--<div class="fx-logo2"></div>-->
				</div>
				<div class="fxBt">
					<span v-text="fxCont"></span>
				</div>
			</div>
			<div > <!-- v-for="count in fxzData2"-->
				<div class="fxTop">
					<img src="../../images/fenxz/newbag/组-22得得得@2x.png"/>
					<div class="fx-logo">世界观</div>
					<!--<div class="fx-logo2"></div>-->
				</div>
				<div class="fxBt">
					<span v-text="fxCont"></span>
				</div>
			</div>
			<div > <!-- v-for="count in fxzData2"-->
				<div class="fxTop">
					<img src="../../images/fenxz/newbag/组-22vv@2x.png"/>
					<div class="fx-logo">世界观</div>
					<!--<div class="fx-logo2"></div>-->
				</div>
				<div class="fxBt">
					<span v-text="fxCont"></span>
				</div>
			</div>
	</div>
</template>
<script>
import loads from '../loading.vue'
import {mapState} from 'vuex'

	export default{
		name:'share',
		data () {
			return {
				dtroute:{
					path:'/Section/details',
					title:'详情'
				},
				loading:false,
    			error:null,
			}
		},
		components: {
			loads
		},
		computed: mapState({
			fxCont: state => state.secFxData,
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
				axios.get('http://xiubei.com/common/columnFx')
				.then(function(res){
					if(res) {
						that.loading = false;
						that.$store.dispatch('sharedt',res);
					}
				})
			}
		},
	}
</script>
<style scoped lang="scss">
	.share{
		width: 100%;
		margin-top: 2.5rem;
		position: relative;
		z-index: 1;
		.fxTop{
			width: 100%;
			height: 10rem;
			position:relative;
			img{
				height: 100%;
				width: 100%;
			}
			.fx-logo{
				width: 3.3rem;
        		height: 1.1rem;
        		position: absolute;
        		/*left: .5rem;*/
        		top: .5rem;
        		font-size: .5rem;
        		text-align: start;
        		line-height: 1.1rem;
        		background: url(../../images/homePage/newBag/dfc-@2x.png) no-repeat;
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
			margin-bottom:.5rem;
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