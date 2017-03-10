<template>
	<div class="information" >
		<p v-text="'【'+title+'】'"></p>
		<div class="pics"></div>
		<p v-text="infTData"></p>
		<p>
			<ul>
				<li></li>
				<li v-text="infLData"></li>
				<li></li>
				<li v-text="infComData"></li>
			</ul>
		</p>
		<p v-text="infCData"></p>
		<p><img src="../../images/homePage/newBag/heng@2.png"/></p>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		name: 'information',
		data () {
			return{
				title:'开脑洞',
			}
		},
		computed: mapState({
			infTData: state => state.infTData,
			infCData: state => state.infCData,
			infLData: state => state.infLData,
			infComData: state => state.infComData,
		})
	}
</script>
<style lang="scss" scoped>
	.information{
		height: 15.25rem;
		width: 100%;
		background-color: white;
		margin-top: .75rem;
		display: flex;
		flex-flow: column nowrap;
		color: #000;
		p:nth-of-type(1){
			margin-bottom: .3rem;
			font-weight: 600;
			font-size: .75rem;
			/*height: .75rem;*/
		}
		p:nth-of-type(2){
			font-size: .7rem;
			margin-bottom: .375rem;
			font-weight: 600;
			height: .7rem;
		}
		p:nth-of-type(3){
			font-size: .3rem;
			height: .6rem;
			margin-bottom: .375rem;
			ul{
				float: right;
				display: flex;
				flex-flow: row nowrap;
				margin-right: 1rem;
				li:nth-of-type(1){
					width: .8rem;
					height: .8rem;
					background: url(../../images/homePage/newBag/xin@2.png) no-repeat;
					background-size: contain;
					margin-right:.15rem ;
				}
				li:nth-of-type(2){
					margin-right:.375rem ;
					font-size:.5rem;
				}
				li:nth-of-type(3){
					width: .8rem;
					height: .8rem;
					background: url(../../images/homePage/newBag/pinl@2.png) no-repeat;
					background-size: 100% 100%;
					margin-right:.15rem ;
				}
				li:nth-of-type(4){
					font-size:.5rem;
				}
			}
		}
		p:nth-of-type(4){
			font-size: .55rem;
			/*height: 1.3rem;*/
			text-align: start;
			line-height: 14px;
			margin-bottom: .375rem;
			padding:0 .375rem;
			overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		}
		p:nth-of-type(5){
			width: 100%;
			height: 0.15rem;
			display: flex;
			justify-content: center;
		}
		.pics{
			height: 8.925rem;
			width: 100%;
			background:url(../../images/homePage/newBag/huab1@2x.png)  no-repeat;
			background-size: 100% 100%;
			margin-bottom: .5rem;
		}
	}
	@media only screen and (min-width:760px){
		p:nth-of-type(4){
			line-height: 28px !important;
		}
	}
</style>
