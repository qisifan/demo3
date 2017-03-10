<template>
  <div id="app">
  	<navs></navs>
    <router-view></router-view>
  </div>
</template>

<script>
import Navs from './components/appModule/Navs.vue'

export default {
  name: 'app',
  components:{
  	Navs
  }
}
</script>

<style lang="scss">
@import './common/css/public.scss';
@media (-webkit-min-device-pixel-ratio: 2){
      .border:after {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        right: -100%;
        bottom: -100%;
        left: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        pointer-events: none;
        -webkit-transform: scale(.5);
        transform: scale(.5);
        width: 200%;
       }
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
.startPic{
  background: url(images/homePage/picks.gif) no-repeat;
  background-size: cover;
}
</style>
