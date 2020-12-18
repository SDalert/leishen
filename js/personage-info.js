//获取元素
var navTabs=document.getElementsByClassName('nav-tabs');
var message=document.querySelector('.nav-tabs-message');
var imges=document.querySelector('.nav-tabs-img');

var tabContent=document.querySelector('.tab-content');
var tabContent1=document.querySelector('.tab-content1');

var parsonageMain=document.querySelector('.parsonage-main')
console.log(parsonageMain);
imges.onclick=function(){
	tabContent.style.display='none';
	tabContent1.style.display='block';
	parsonageMain.style.height='350px';
	imges.style.color='#00eef3';
	imges.style.border='1px solid #ccc'
	imges.style.borderBottomColor='transparent';
	message.style.color='#000';
	message.style.border='none';
}
message.onclick=function(){
	tabContent.style.display='block';
	tabContent1.style.display='none'
	parsonageMain.style.height='500px';
	imges.style.border='none';
	message.style.border='1px solid #ccc'
	message.style.borderBottomColor='transparent';
	message.style.color='#000';
}
