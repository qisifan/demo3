<template>
	<div class="secnavs">
		<ul class="tab">
			<li v-for="(items,index) in routes" :class="{'secTab':getsecNum == index}" @click="setStyle(index,items.path)">
				<router-link :to="items.path">
					<span v-text="items.title"></span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'secnavs',
		data () {
			return {
				routes:[
					{
						path:'/Section/Share',
						title:'分享志',
					},{
						path:'/Section/Movie',
						title:'影游纪',
					},{
						path:'/Section/Fantastic',
						title:'开脑洞'
					},{
						path:'/Section/Watch',
						title:'直播GO'
					},{
						path:'/Section/Transmit',
						title:'视界观'
					}
				]
			}
		},
		computed: {
			getsecNum () {
				return this.$store.state.sctNav
			}
		},
		methods: {
			setStyle (index,path) {
				this.$store.dispatch('changesecTab',index);
				this.$store.commit('tabpath',path);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.secnavs{
		height: 1.8rem;
		width: 100%;
		position: fixed;
		z-index: 9;
		background-color: #f7f6f6;
		display: flex;	
		flex-flow: row nowrap;
		border-bottom: 1px solid #bfbfbf;
		.tab{
			margin-left: 1.45rem;
			display: flex;
			flex-flow:row nowrap ;
			justify-content: space-around;
			align-items: center;
			li{
				margin-right: 1.05rem;
				padding-bottom: .5rem;
				height: 1.3rem;
				a{
					color:#333;
					font-size: .75rem;
					span{
						display: block;
						opacity: .6;
					}
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
        .secTab{
		 	border-bottom:2px solid #ffd000;
		 	span{
				display: block;
				opacity: 1 !important;
			}
        }
	}
</style>