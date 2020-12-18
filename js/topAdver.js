var topAdver = document.querySelector('.top-adver');
var adverDle = document.querySelector('.adver-del');
var x = 66;
adverDle.onclick = function(){
    adverDle.style.display = 'none';
    adverDle.setadver =setInterval(function(){
     if(x<=0){

        clearInterval(adverDle.setadver);
     }else{
        x--;
        console.log(x)
        topAdver.style.height = x +'px';
     }
    },1)
}
adverDle.onmouseover = function(){
    adverDle.style.cursor = 'pointer';
}