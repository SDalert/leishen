
setInterval (function(){
	//获取元素
var counttime=document.querySelector('.counttime');
//时间戳
var date1= +new Date();
var date2= +new Date('2020/10/1 00:00:00');
//时间差  秒
var newTime=(date2-date1)/1000;
//获取天
var day =Math.floor(newTime/60/60/24);
day=day<10?'0'+day:day;
//获取小时
var time=Math.floor(newTime/60/60%24);
time=time<10?'0'+time:time;
//获取分钟
var minute=Math.floor(newTime/60%60);
minute=minute<10?'0'+minute:minute;
//获取秒
var second=Math.floor(newTime%60);
second=second<10?'0'+second:second;

var lastTime=day+'天'+time+'小时'+minute+'分钟'+second+'秒';
counttime.innerText=lastTime;
},1000);
