var reg_code_psw = document.querySelector('.reg_code_psw')

reg_code_psw.onclick = function() {
    var newArry = [];
    var str = '';
    for (var i = 48; i <= 57; i++) {
        newArry.push(String.fromCharCode(i))
    }

    for (var i = 0; i < 4; i++) {
        str += (newArry[Math.floor(Math.random() * 10)])
    }
    reg_code_psw.innerHTML = str;
}