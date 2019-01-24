
// const $ = require("jQuery");
require('jquery');
$('.test').click(function(){
	var param={mobile:'13528422603'};
	$.ajax({
 url: '/test/v1/operation/h5/sendsms', 
 type: 'post',
 Accept:'application/json',
 //contentType: 'application/json; charset=utf-8', // 很重要
 headers: {Accept:'application/json','Content-Type': 'application/json'},
 data: JSON.stringify({mobile:'13528422603'}),//是json字符串
 success: function(data) {
 console.log(data);
 }
});
});
$(document).ajaxStart(function(m){
	console.log(m);
}).ajaxStop(function(err){
	console.log(err);
})
$( document ).ajaxSuccess(function( event, request, settings ) {    console.log('请求状态',request.status);});$( document ).ajaxError(function( event, request, settings ) {    console.log('失败',request.status);   if (request.status == 401) {       alert("没有权限,请登录。");   }});
