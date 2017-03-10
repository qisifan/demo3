<template>
	<div class="bigVdo">
		<div class="vidTop">
			<img src="../../images/homePage/newBag/shuis@2x.png"/>
			<div class="vi-logo">视界观</div>
			<!--<div class="vi-logo2"><img src="../../images/homePage/zbg-6.png"></div>-->
			<div class="vi-play">
				<img src="../../images/homePage/play-6.png" >
			</div>
		</div>
		<div class="vidBt">
			<span v-text="contents"></span>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
	export default {
		name:'bigVdo',
		data () {
			return {
//				videoData:[]
			 }
		},
		computed: mapState({
			contents: state => state.bigData,
		})
	}
</script>
<style scoped lang='scss'>
	.bigVdo {
		width:100%;
		margin-top: .75rem;
		color: #000;
		.vidTop{
			width: 100%;
			height: 10rem;
			position: relative;
			img{
				height: 100%;
				width: 100%;
			}
			.vi-logo{
				width: 3.3rem;
				height: 1.1rem;
				position: absolute;
				top: .5rem;
				left: 0;
				font-size: .5rem;
				text-align: start;
				line-height: 1.1rem;
				background: url("../../images/homePage/newBag/dfgdd@2x.png") no-repeat;
				background-size: 100% 100%;

			}
			.vi-logo2{
				width: 1.55rem;
				height: .75rem;
				position: absolute;
				right: 0;
				bottom: 0;
			}
			.vi-play{
				height: 3.5rem;
				width: 3.5rem;
				position: absolute;
				top: 35%;
				left: 40%
			}

		}
		.vidBt{
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
	}
</style>