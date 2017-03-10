<template>
	<router-view></router-view>
</template>
<script>
	export  default{
		name:'private',
		data(){
			return{
				// msg:'my name is private'
			}
		}
	}
</script>
<style lang="scss" scoped>
  .private{
  	background: pink;
  	height: 5rem;
	padding-top: 2rem; 
  	width: 100%;
	position: relative;
  }
</style>