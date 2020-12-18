// 用户协议
var agreement_m_li = document.querySelectorAll('.agreement_m_li');
// var agree_icon1 = agreement_m_li.querySelectorAll('.agree_icon1')
// var agree_icon2 = agreement_m_li.querySelectorAll('.agree_icon2')
var count_agree = 1;
for (var i = 0; i < agreement_m_li.length; i++) {
    (function(i) {
        agreement_m_li[i].onclick = function() {
            for (var k = 0; k < agreement_m_li.length; k++) {
                agreement_m_li[k].children[0].children[1].style.display = 'block';
                agreement_m_li[k].children[0].children[0].style.display = 'none';
            }
            if (count_agree == 1) {
                agreement_m_li[i].children[0].children[1].style.display = 'none';
                agreement_m_li[i].children[0].children[0].style.display = 'block';
                count_agree = 2;
                agreement_m_li[i].index = 1;
                if (agreement_m_li[i].index == 1) {
                    agreement_m_li[i].style.height = agreement_m_li[i].children[0].offsetHeight + agreement_m_li[i].children[1].offsetHeight + 'px'
                }

            } else if (count_agree == 2) {
                agreement_m_li[i].children[0].children[1].style.display = 'block';
                agreement_m_li[i].children[0].children[0].style.display = 'none';
                count_agree = 1;
                for (var j = 0; j < agreement_m_li.length; j++) {
                    agreement_m_li[j].index = 0;
                    agreement_m_li[j].style = agreement_m_li[0].children[0].offsetHeight + 'px';
                }
            }
        }
    })(i)
}