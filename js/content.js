window.onload = function() {
	// 第一个轮播图
	var contentUl = document.querySelector('.content-ul');
	var contentSpan = document.querySelector('.content-span');
	var flag = 0;
	var contentChart = document.querySelector('.content-chart');
	// 右按钮
	var contentNext = document.querySelector('.content-right');
	contentNext.onclick = function() {
		for (var i = 0; i < contentUl.children.length; i++) {
			contentUl.children[i].style.zIndex = '0';
		}
		for (var i = 0; i < contentSpan.children.length; i++) {
			contentSpan.children[i].className = '';
		}
		flag++;
		if (flag == contentUl.children.length) {
			flag = 0;
		}
		contentUl.children[flag].style.zIndex = '99';
		contentSpan.children[flag].className = 'content-active';
	}
	// 左按钮
	var contentLeft = document.querySelector('.content-left');
	contentLeft.onclick = function() {
		for (var i = 0; i < contentUl.children.length; i++) {
			contentUl.children[i].style.zIndex = '0';
		}
		for (var i = 0; i < contentSpan.children.length; i++) {
			contentSpan.children[i].className = '';
		}
		flag--;
		if (flag < 0) {
			flag = contentUl.children.length - 1;
		}
		contentUl.children[flag].style.zIndex = '99';
		contentSpan.children[flag].className = 'content-active';
	}
	// 自动轮播
	function autoplay() {
		contentUl.interVal = setInterval(function() {
			contentNext.onclick();
		}, 3000)
	}
	autoplay();
	// 焦点轮播
	for (var i = 0; i < contentSpan.children.length; i++) {
		(function(i) {
			contentSpan.children[i].onmouseover = function() {
				// 同步器的概念
				flag = i;
				// 排他
				for (var j = 0; j < contentSpan.children.length; j++) {
					contentSpan.children[j].className = "";
					contentUl.children[j].style.zIndex = "0";
				};
				// 使当前触发的小圆点变色
				this.className = "content-active";
				contentUl.children[flag].style.zIndex = '99';
				console.log(flag)
			}
		})(i);
	}
	contentChart.onmouseover = function() {
		clearInterval(contentUl.interVal)
	}
	contentChart.onmouseout = function() {
		autoplay();
	}
	// 热门单品推荐轮播图
	var contentGoodsUl = document.querySelector('#content-goods-ul');
	var arrowLeft = document.querySelector('.arrow-left');
	var arrowRight = document.querySelector('.arrow-right');
	var contentStarGoods = document.querySelector('.content-star-goods');
	var Cnum = 0;
	arrowRight.onclick = function() {
		Cnum++;
		if (Cnum == 2) {
			Cnum = 1;
		}
		moveAnimate(contentGoodsUl, -1230)
	}
	arrowLeft.onclick = function() {
		Cnum--;
		if (Cnum == -1) {
			Cnum = 0;
		}
		moveAnimate(contentGoodsUl, 0)
	}

	function arrowPlay(Cnum) {
		if (Cnum == 1) {
			arrowLeft.onclick()
		} else if (Cnum == 0) {
			arrowRight.onclick()
		}
	}

	function call() {
		arrowPlay.time = setInterval(function() {
			arrowPlay(Cnum)
		}, 5000)
	}
	call()
	contentStarGoods.onmouseover = function() {
		clearInterval(arrowPlay.time)
	}
	contentStarGoods.onmouseout = function() {
		call()
	}

	function moveAnimate(ele, target) {
		clearInterval(ele.interId);
		ele.interId = setInterval(function() {
			if (ele.offsetLeft == target) {
				clearInterval(ele.interId);
			} else if (ele.offsetLeft < target) {
				var step = (ele.offsetLeft + 10) > target ? target : ele.offsetLeft + 13;
				ele.style.left = step + 'px';
			} else if (ele.offsetLeft > target) {
				var step = (ele.offsetLeft - 10) < target ? target : ele.offsetLeft - 13;
				ele.style.left = step + 'px';
			}
		}, 10);
	}



	// 左侧边栏  跳楼事件
	var contentAside = document.querySelector('.content-aside');
	var nootbookGame = document.querySelector('.nootbookGame');
	var nootbook_2 = document.querySelector('.nootbook_2');
	var nootbook_3 = document.querySelector('.nootbook_3');
	var c_side = contentAside.children;


	window.onscroll = function() {
		var c_arry = [nootbookGame.offsetTop, nootbook_2.offsetTop, nootbook_3.offsetTop];
		// 点击事件
		for (var i = 0; i < c_side.length; i++) {
			(function(i) {
				c_side[i].onclick = function() {
					for (var j = 0; j < c_side.length; j++) {
						c_side[j].removeAttribute('class');
					}
					mins(c_arry[i]);
					c_side[i].setAttribute('class', 'bgactive')
				}
			})(i)
		}
		// 滚动事件
		if (window.pageYOffset < 1000) {
			contentAside.style.opacity = '0';
		}
		if (window.pageYOffset > 1000) {
			contentAside.style.opacity = '1';
			if (window.pageYOffset > 1000 && window.pageYOffset <= 1600) {
				c_side_l(0)
			} else if (window.pageYOffset > 1600 && window.pageYOffset <= 2200) {
				c_side_l(1)
			} else if (window.pageYOffset > 2200) {
				c_side_l(2)
			}
		}
		if (window.pageYOffset > 2500) {
			contentAside.style.opacity = '0';
		}
	}

	function c_side_l(side_index) {
		for (var i = 0; i < c_side.length; i++) {
			c_side[i].removeAttribute('class');
		}
		c_side[side_index].setAttribute('class', 'bgactive')
	}

	function mins(a) {
		clearInterval(mins.time);
		mins.time = setInterval(function() {
			if (document.documentElement.scrollTop > a) {
				document.documentElement.scrollTop -= 20;
				if (document.documentElement.scrollTop < a) {
					document.documentElement.scrollTop = a;
				}
			} else if (document.documentElement.scrollTop < a) {
				document.documentElement.scrollTop += 20;
				if (document.documentElement.scrollTop > a) {
					document.documentElement.scrollTop = a;
				}
			} else if (document.documentElement.scrollTop == a) {
				clearInterval(mins.time);
			}
		}, 1)
	}

	// 第二个全部js
	var contentGoodsUl1 = document.querySelector('#content-goods-ul1');
	var Conowleft = document.querySelector('.Conowleft');
	var Conowright = document.querySelector('.Conowright');
	var contentStarGoods1 = document.querySelector('.content-star-goods1');
	var Cnum1 = 0;
	Conowright.onclick = function() {
		Cnum1++;
		if (Cnum1 == 2) {
			Cnum1 = 1;
		}
		moveAnimate(contentGoodsUl1, -1230)
	}
	Conowleft.onclick = function() {
		Cnum1--;
		if (Cnum1 == -1) {
			Cnum1 = 0;
		}
		moveAnimate(contentGoodsUl1, 0)
	}

	function arrowPlay1(Cnum1) {
		if (Cnum1 == 1) {
			Conowleft.onclick()
		} else if (Cnum1 == 0) {
			Conowright.onclick()
		}
	}

	function call1() {
		arrowPlay1.time = setInterval(function() {
			arrowPlay1(Cnum1)
		}, 5000)
	}
	call1()
	contentStarGoods1.onmouseover = function() {
		clearInterval(arrowPlay1.time)
	}
	contentStarGoods1.onmouseout = function() {
		call1()
	}


	// 第三个全部js
	var contentGoodsUl2 = document.querySelector('#content-goods-ul2');
	var conleft = document.querySelector('.arrow-left2');
	var conright = document.querySelector('.arrow-right2');
	var contentStarGoods2 = document.querySelector('.content-star-goods2');
	var Cnum2 = 0;
	conright.onclick = function() {
		Cnum2++;
		if (Cnum2 == 2) {
			Cnum2 = 1;
		}
		moveAnimate(contentGoodsUl2, -1230)
	}
	conleft.onclick = function() {
		Cnum2--;
		if (Cnum2 == -1) {
			Cnum2 = 0;
		}
		moveAnimate(contentGoodsUl2, 0)
	}

	function arrowPlay2(Cnum2) {
		if (Cnum2 == 1) {
			conleft.onclick()
		} else if (Cnum2 == 0) {
			conright.onclick()
		}
	}

	function call2() {
		arrowPlay2.time = setInterval(function() {
			arrowPlay2(Cnum2)
		}, 5000)
	}
	call2()
	contentStarGoods2.onmouseover = function() {
		clearInterval(arrowPlay2.time)
	}
	contentStarGoods2.onmouseout = function() {
		call2()
	}

}
