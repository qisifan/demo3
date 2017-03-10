<template>
	<div class="Sction">
		<secnav></secnav>
		<router-view></router-view>
	</div>
</template>
<script>
	import secnav from './appModule/sectionNav.vue'
	
	export default {
		name:'Sction',
		data(){
			return{
			}
		},
		components:{
			secnav
		}
	}
</script>
<style lang="scss" scoped>
  .Sction{
  	width: 100%;
	position: relative;
	padding-top: 2rem;
  }
</style>