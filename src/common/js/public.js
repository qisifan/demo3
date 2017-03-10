//自定义时间过滤器
import Vue from 'vue'
Vue.filter('datestyle',function(value){
	var oDate=new Date(value);
	var year=oDate.getFullYear();   //获取年；
	var month=oDate.getMonth();   //获取月份
	var dat=oDate.getDate(); // 获取日，
	var hours=oDate.getHours(); //获取时，
	var mins=oDate.getMinutes(); //分
	var sec=oDate.getSeconds(); //秒
	return year+"-"+month+"-"+dat+" "+hours+":"+mins+":"+sec;
});