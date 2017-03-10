<template>
	<div class="navs">
		<ul class="tab">
			<li v-for="(items,index) in routes" :class="{'active':getNum == index}" @click="setStyle(index,items.path)">
				<router-link :to="items.path">
					<span v-text="items.title"></span>
				</router-link>
			</li>
		</ul>
		<div class="search" @click="wlalal"></div>
	</div>
</template>
<script>
	export default {
		name:'navs',
		data () {
			return {
				routes:[
					{
						path:'/',
						title:'秀贝',
					},{
						path:'/Section/Share',
						title:'栏目',
					},{
						path:'/Private/nologin',
						title:'我的'
					}
				]
			}
		},
		computed: {
			getNum () {
				return this.$store.state.NavNum
			}
		},
		methods: {
			setStyle (index,path) {
				this.$store.dispatch('changeTab',index);
				this.$store.commit('tabpath',path);
			},
			wlalal (){
				console.log("wulala");
			}
		}
	}
</script>
<style lang="scss" scoped>
	.navs{
		height: 2rem;
		width: 100%;
		position: fixed;
		z-index: 9;
		background-color: #2f2f2f;
		display: flex;	
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		.tab{
			margin-left:.875rem;
			li{
				margin-right: 1rem;
				width: 2rem;
				opacity: .5;
				a{
					color:white;
					font-size: .75rem;
				}
			}
		}
		.search{
			margin-right: .75rem;
			width: .8rem;
			height: .8rem;
			background: url(../../images/homePage/ss-6.png) no-repeat;
			background-size:100% 100% ;
		}
        .active{
		 	border-bottom:2px solid white;
		 	opacity: 1 !important;
        }
	}
</style>