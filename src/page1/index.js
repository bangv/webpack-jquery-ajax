
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
$(function(){  
    $.ajaxSetup({
        type: "POST",
        error: function(jqXHR, textStatus, errorThrown) {
          
            switch(jqXHR.status) {
              case(500):
                alert("服务器系统内部错误");
                break;
               case(401):
                alert("未登录");
                break;
               case(403):
                alert("无权限执行此操作");
                break;
               case(408):
                alert("请求超时");
                break;
              default:
                alert("未知错误");
             }
        }
   });
});