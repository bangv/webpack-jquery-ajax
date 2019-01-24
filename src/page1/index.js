
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

console.log($)
	
})