<template>
	<div class="smallVdo" >
		<div class="video">
			<div class="msg-img v-imgs1">
				<img src="../../images/homePage/newBag/tu1@2x.png"/>
				<div class="msg-logo"></div>
				<div class="msg-play"></div>
			</div>
			<div class="video-msg" v-text="msgLData"></div>
		</div> 
		<div class="video">
			<div class="msg-img v-imgs2">
				<img src="../../images/homePage/newBag/tu2@2x.png"/>
				<div class="msg-logo"></div>
				<div class="msg-play"></div>
			</div>
			<div class="video-msg" v-text="msgRData"></div>
		</div>
	</div>
</template>
<script>
	import { mapState} from 'vuex'
	export default{
		name: 'smallVdo',
		data () {
			return {
			}
		},
//		props: ['getData'],
		computed: mapState({
			msgLData:state => state.smallLData,
			msgRData:state => state.smallRData,
		}),
		methods: {
		  tests () {
		  	this.msgData = this.getData;
		  }
		}
	}
</script>
<style scoped lang='scss'>
	.smallVdo{
		width: 100%;
		margin-top: .75rem;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		position: relative;
		.video{
			height: 7.7rem;
			width: 9.25rem;
			position: relative;
			text-align: start;
			.msg-img {
                width: 100%;
                height: 76.7%;
                img{
                	height: 100%;
                	width: 100%;
                }
                .msg-logo{
                	width: .6rem;
                	height: .6rem;
                	position: absolute;
                	top: .25rem;
                	left: .25rem;
                	background: url(../../images/homePage/newBag/ball@2.png) no-repeat;
                	background-size:100% 100% ;
                }
                .msg-play{
                	width: 1.75rem;
                	height: 1.75rem;
                	position: absolute;
                	right: .25rem;
                	bottom: 2.05rem;
                	background: url(../../images/homePage/play-6.png) no-repeat;
                	background-size:100% 100% ;
                }
            }
		}
	}
.video-msg{
	height: 1.8rem;
	width: 9.25rem;
	font-size: .65rem;
	background-color: #f2f2f2;
	position: absolute;
	bottom: 0;
	padding: 0 .2rem;
    color: #000;
    display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
</style>