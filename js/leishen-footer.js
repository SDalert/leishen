var toTop = document.querySelector('.to-top');

toTop.onclick = function(){
    var scrTo = document.documentElement.scrollTop;
   toTop.toTopset = setInterval(function(){
        if(scrTo <= 0){
            clearInterval(toTop.toTopset);
            console.log(scrTo);
        }else{

            scrTo-=80;
            window.scrollTo(0,scrTo);
        }
    },10)
}