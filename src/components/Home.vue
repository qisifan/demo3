<template>
  <div class="home">
    <div class="loading" v-if="loading">
	      <loads></loads>
    </div>
    <div v-if="error" class="error" v-text="error">
    </div>
  	<swip></swip>
  	<smallvdo></smallvdo>
  	<information></information>
  	<bigvdo></bigvdo>
  </div>
</template>

<script>
import swip from './homeChild/swip.vue'
import bigvdo from './homeChild/bigVdo.vue'
import information from './homeChild/information.vue'
import smallvdo from './homeChild/smallVdo.vue'
import loads from './loading.vue'

export default {
  name: 'home',
  data () {
    return {
    	loading:false,
    	error:null,
    }
  },
  components: {
  	swip,
  	bigvdo,
  	information,
  	smallvdo,
  	loads
  },
  created() {
  	this.fetchData();
  	this.error = null;
  	this.loading = true;
  },
  watch:{
  	'$route': 'fetchData'
  },
  methods: {
  	fetchData () {
  		let that = this;
  		axios.get('http://xiubei.com/common/home')
  		.then(function(res){
//			console.log(res);      
  			if (res) {
//				that.HomeDatas = res.data.array[2].msgData[2];
				  that.loading = false;
				  that.$store.dispatch('homedt',res);
  			}else {
  				that.loading = true;
  			}
  		});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
	font-size: 1rem;
	width: 100%;
	position: relative;
	padding-top: 2rem;
	.loading{
    position: absolute;
    top: 650%;
    left: 45%;
	}
}
</style>
