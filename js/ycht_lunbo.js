var index=0;
var img_len=$('.banner img').length;

$('.banner img').eq(index).addClass('img_act');

function mov(){
				index++;
				if(index>(img_len-1)){
					index=0;
				}
				$('.banner img').eq(index).addClass('img_act').siblings().removeClass('img_act');
}

var t='';
$('.banner').hover(function() {
	clearInterval(t);
}, function() {
  t=setInterval(mov,3000);
});

$('.banner').mouseout();

var num=1;
  var li_len=$('.vote ul li').length;

$('.vote ul li').eq(num).find('em').eq(0).width(426);
$('.vote ul li').eq(num).find('span').eq(1).text('100%');
function mov2(){
	var oldnum=num;
	 num++;
   if(num>(li_len-1)){
   	num=1
   }
  $('.vote ul li').eq(oldnum).find('em').eq(0).width(4);
  $('.vote ul li').eq(oldnum).find('span').eq(1).text('0.00%');
	$('.vote ul li').eq(num).find('em').eq(0).width(426);
	$('.vote ul li').eq(num).find('span').eq(1).text('100%');
}

setInterval(mov2,3000)

