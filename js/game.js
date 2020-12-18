var nootbook_r_c = document.querySelector('.nootbook_r_c');
var nootbook_lb1 = document.querySelector('.nootbook_lb1');
var nootbook_lb2 = document.querySelector('.nootbook_lb2');
var nootbook_lb3 = document.querySelector('.nootbook_lb3');
var nootbook_lb_item = document.querySelectorAll('.nootbook_lb_item');
var countTop1 = 0;
var countTop2 = 0;
var countTop3 = 0;
setInterval(function() {
    countTop1++;
    if (countTop1 == 5) {
        nootbook_lb1.style.top = 0 + 'px';
        countTop1 = 1;
    }
    var TopOffset = -countTop1 * 108;
    speedTop(nootbook_lb1, TopOffset)


}, 2000)
setInterval(function() {
    countTop2++;
    if (countTop2 == 5) {
        nootbook_lb2.style.top = 0 + 'px';
        countTop2 = 1;
    }
    var TopOffset = -countTop2 * 108;
    speedTop(nootbook_lb2, TopOffset)


}, 2000)
setInterval(function() {
    countTop3++;
    if (countTop3 == 5) {
        nootbook_lb3.style.top = 0 + 'px';
        countTop3 = 1;
    }
    var TopOffset = -countTop3 * 108;
    speedTop(nootbook_lb3, TopOffset)


}, 2000)

function speedTop(ele, distance) {
    clearInterval(ele.Interval)
    ele.Interval = setInterval(function() {
        if (ele.offsetTop < distance) {
            ele.style.top = ele.offsetTop + 1 + 'px';
        } else if (ele.offsetTop > distance) {
            ele.style.top = ele.offsetTop - 1 + 'px';
        } else {
            clearInterval(ele.Interval)
        }
    }, 1)
}