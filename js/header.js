// 搜索框获取焦点，失去焦点时，框内盒子的隐藏出现
var search = document.getElementById('search');
var keyword = document.getElementById('keyword');
// 获取焦点，盒子隐藏
search.onfocus = function(){
    keyword.style.display = "none";
}
// 失去焦点，盒子显示
search.onblur = function(){
    keyword.style.display = "block";
}