window.onload = function() {
	// 账号登录
	var loginInput = document.querySelectorAll('.loginInput');
	var icons = document.querySelectorAll('.icon');
	for (var i = 0; i < loginInput.length; i++) {
		loginInput[i].onfocus = function() {
			for (var j = 0; j < loginInput.length; j++) {
				loginInput[j].parentNode.parentNode.className = 'login-div-input';
			}
			this.parentNode.parentNode.className = 'login-div-input login_border';
		}
		loginInput[i].onblur = function() {
			for (var k = 0; k < loginInput.length; k++) {
				loginInput[k].parentNode.parentNode.className = 'login-div-input';
			}
		}
	}
	var loginArr = document.querySelectorAll('.login-arr')
	var array = [];
	for (var i = 65; i <= 90; i++) {
		array.push(String.fromCharCode(i))
	}
	for (var i = 97; i <= 122; i++) {
		array.push(String.fromCharCode(i))
	}
	for (var i = 48; i <= 57; i++) {
		array.push(String.fromCharCode(i))
	}
	var index1 = Math.floor(Math.random() * 62)
	var index2 = Math.floor(Math.random() * 62)
	var index3 = Math.floor(Math.random() * 62)
	var index4 = Math.floor(Math.random() * 62)
	loginArr[0].innerText=random();
	loginArr[1].innerText=random();
	loginArr[0].onclick = function() {
		var aRR=random()
		loginArr[0].innerText=aRR;
	}
	loginArr[1].onclick = function() {
		var aRR=random()
		loginArr[1].innerText=aRR;
	}
	function random() {
		var arr1 = [];
		for (var i = 48; i < 58; i++) {
			arr1.push(String.fromCharCode(i))
		}
		var num1 = Math.floor(Math.random() * 10);
		var num2 = Math.floor(Math.random() * 10);
		var num3 = Math.floor(Math.random() * 10);
		var num4 = Math.floor(Math.random() * 10);
		return(arr1[num1]+ arr1[num2]+ arr1[num3]+ arr1[num4])
	};
	
	// 切换登录
	var loginPhone=document.querySelector('.login-phone')
	var loginNumber=document.querySelector('.login-number')
	var formMain1=document.querySelector('.login-form-main1')
	var formMain=document.querySelector('.login-form-main')
	var flag=1;
		loginPhone.onclick=function(){
			formMain1.style.display='block';
			formMain.style.display='none';
			loginPhone.style.color='#00d7dc';
			loginNumber.style.color='#000000';
		}
		loginNumber.onclick=function(){
			formMain1.style.display='none';
			formMain.style.display='block';
			loginPhone.style.color='#000000';
			loginNumber.style.color='#00d7dc';
		}
}
