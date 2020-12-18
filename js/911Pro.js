// 内容电脑展示的头部样式
var operLeft = document.querySelector('.oper_left');
var nsAtBtn = document.querySelector('.ns-at-btn');


operLeft.addEventListener('click',function(){
	document.querySelector('#min-price').value = '';
	document.querySelector('#max-price').value = '';
});


for(var i = 0; i < nsAtBtn.children.length; i++){
	(function(index){
		nsAtBtn.children[index].addEventListener('click',function(){
			
			if(index != nsAtBtn.children.length-1){
				for(var j = 0; j < nsAtBtn.children.length; j++){
					nsAtBtn.children[j].style.backgroundColor = '#fff';
				}
				this.style.backgroundColor = '#00EEF3';
				
			}
			
			// 当点击的按钮是价格时调用此方法
			if(this.innerText == '价格'){
				allPrice();
			}else{
				// 点击其它进行复原
				for(var k = 0; k < allLi.length; k++){
					allLi[k].style.order = 0;
				}
				
			}
		});
		
	})(i);
}

//获取所有装商品的li盒子
var nsProductList = document.querySelector('.ns-product-list');
var allLi = nsProductList.children[0].children;

console.log(allLi);
var nsImgPrice = document.querySelectorAll('.ns-img-price');
function allPrice(){
	var priceArr = [];
	// 循环提取所有价格
	for(var i = 0; i < nsImgPrice.length; i++){
		var price = nsImgPrice[i].children[0].innerText;
		// console.log(nsImgPrice[i].children[0].parentNode.parentNode);
		priceArr.push(Number(price));
	}
	// console.log(priceArr);
	// 调用排序功能
	goodsSort(priceArr);
	
	//因使用的是弹性盒子，使用order使其进行排序
	for(var j = 0; j < priceArr.length; j++){
		// 循环所有图片价格是否有匹配
		for(var k = 0; k < nsImgPrice.length; k++){
			if(priceArr[j] == nsImgPrice[k].children[0].innerText){
				// 找到对应父盒子
				var parent = nsImgPrice[k].children[0].parentNode.parentNode;
				// 把当前数组的下标给到父元素的order样式
				parent.style.order = j;
			}
			
		}
	}
}
// 排序功能
function goodsSort(arr){
	for(var i = 0; i < arr.length-1; i++){
		var minIndex = i;
		for(var j = i+1; j < arr.length; j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
		}
		var temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}
}



// 鼠标移入展示笔记本电脑
// 获取左移动按钮
var oNpsPrev = document.querySelectorAll('.nps-prev');
// 获取右移动按钮
var oNpsNext = document.querySelectorAll('.nps-next');
// 移动的目标
var moveOl = document.querySelectorAll('.ns-ol');

//获取每一张商品大图片
var bigImg = document.querySelectorAll('.ns-p-img')

// console.log(moveOl);

var target = -moveOl[0].offsetWidth/2;
var target2 = moveOl[0].offsetWidth/2;
for(var k = 0; k < moveOl.length; k++){
	// 向右移动
	clickMove(oNpsNext[k],moveOl[k],oNpsPrev[k],target);
	// 向左移动
	clickMove(oNpsPrev[k],moveOl[k],oNpsNext[k],target2);
	
	//因为大图片的长度与ol的长度一致,把每个大图片的下标存入ol中
	moveOl[k].bigM = bigImg[k].children;
	
	for(var i = 0; i < moveOl[k].children.length; i++){
		
		(function(index,k){
			moveOl[k].children[index].addEventListener('mouseover',function(e){
				console.log(moveOl[k].bigM[0].src);
				console.log(moveOl[k].children[index])
				moveOl[k].bigM[0].src = moveOl[k].children[index].children[0].src;
				// 排他
				for(var j = 0; j < moveOl[k].children.length; j++){
					moveOl[k].children[j].style.border = '1px solid #cecece';
				}
				// 添加新边框
				moveOl[k].children[index].style.border = '1px solid #00d7dc';
			});
		})(i,k);
	}
}

/* 
 clickEle 绑定事件的元素
 moveEle 需要移动的元素
 ele 其它元素
 target 目标值
 */
function clickMove(clickEle,moveEle,ele,target){
	clickEle.addEventListener('click',function(){
		// 先清除另一个按钮的背景色
		ele.style.backgroundColor = '#FFFFFF';
		
		this.style.backgroundColor = '#e5e5e5';
		clearInterval(moveEle.timer);
		moveEle.timer = setInterval(function(){
			// var target = -moveOl.offsetWidth/2;
			if(moveEle.offsetLeft == target){
				clearInterval(moveEle.timer);
			}else{
				//往左走
				if(moveEle.offsetLeft > target){
					var step = moveEle.offsetLeft <= target? target:moveEle.offsetLeft-1;
					moveEle.style.left = step+'px'; 
					
				//往右走
				}else if(moveEle.offsetLeft < target){
					var step = moveEle.offsetLeft >= 0? 0:moveEle.offsetLeft+1;
					moveEle.style.left = step+'px'; 
				}
			}
		},1);
	});
}


// 分页输入框的加边框效果
var oPageNum = document.querySelector('#page-num');
oPageNum.addEventListener('focus',function(){
	oPageNum.parentNode.style.border = '1px solid #00eef3';
})
oPageNum.addEventListener('blur',function(){
	oPageNum.parentNode.style.border = '1px solid #cecece';
})

// 轮播图效果展示商品

// 猜你喜欢
var nsLink = document.querySelector('.ns-link');
// 浏览历史
var nsHistory = document.querySelector('.ns-history');

var nsLinkGoods = document.querySelector('.ns-link-goods');
var nsHistoryGoods = document.querySelector('.ns-history-goods');

var olhUl = document.querySelector('.ns-lh-container');

//排他功能
function exclusiveLH(){
	for(var i = 0; i < olhUl.children.length; i++){
		olhUl.children[i].style.color = '#000';
		olhUl.children[i].style.borderBottom = 'none';
	}
}
/* 
 ele 要绑定事件的元素
 showEle 显示的元素
 hiddenEle 隐藏的元素
 */
function overShow(ele,showEle,hiddenEle){
	ele.addEventListener('mouseover',function(){
		exclusiveLH();
		ele.style.color = '#00d7dc';
		ele.style.borderBottom = '2px solid #00d7dc';
		
		showEle.style.display = 'block';
		hiddenEle.style.display = 'none';
		
	});
	
}

overShow(nsLink,nsLinkGoods,nsHistoryGoods);
overShow(nsHistory,nsHistoryGoods,nsLinkGoods);


// 轮播图
// 获取移动盒子
var nsMoveGoodsUl = document.querySelector('.ns-move-goods');
// 左按钮
var nsLeftMove = document.querySelector('.ns-left-move');
// 右按钮
var nsRightMove = document.querySelector('.ns-right-move');

// 移入停止自动轮播
nsMoveGoodsUl.addEventListener('mouseover',function(){
	clearInterval(stopTime);
});
nsMoveGoodsUl.addEventListener('mouseout',function(){
	autoMove();
});

var nscount = 0;
nsLeftMove.addEventListener('click',function(){
	nscount--;
	// clearInterval(stopTime);
	// 计算目标值(拿第一个子盒子的宽计算，因只显示5个盒子)
	var tar = -nscount*nsMoveGoodsUl.children[0].offsetWidth*5;
	if(nscount < 0){
		nsMoveGoodsUl.style.left = '-3600px';
		nscount = 3;
	}else{
		moveGoods(nsMoveGoodsUl,tar);
		console.log(nsMoveGoodsUl.offsetLeft);
	}
	
		
	
});

nsRightMove.addEventListener('click',function(){
	nscount++;
	var targ =nscount * -(nsMoveGoodsUl.children[0].offsetWidth*5);
	console.log(nsMoveGoodsUl.offsetWidth+targ);
	if(targ == -4800){
		nscount = 0;
		nsMoveGoodsUl.style.left = '0px';
	}else{
		moveGoods(nsMoveGoodsUl,targ);
	}
	
});
var stopTime;
function autoMove(){
	stopTime = setInterval(function(){
		nsRightMove.click();
	},5000);
}
autoMove();

// 移动函数
function moveGoods(ele,target){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		// 当等于目标距离时清除定时器
		if(ele.offsetLeft == target){
			clearInterval(ele.timer);
		}else{
			// 目标值减去减去当前值除以10
			var step = (target - ele.offsetLeft)/5;
			//最后的计算可能为小数，进行取整
			step = step > 0 ? Math.ceil(step):Math.floor(step);
			ele.style.left = ele.offsetLeft+step+'px';
		}
	},10);
}



