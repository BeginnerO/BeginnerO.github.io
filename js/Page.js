
$(document).on('ready',function(){
	console.log($('.bo-mobile-navi').parent().width());
	$('.bo-mobile-navi')
		.css('left',"-"+$('.bo-mobile-navi').width()+"px");
	console.log($('.bo-navi')
		.css('width',$('.bo-mobile-navi').parent().width()+"px"));
		console.log($('.bo-mobile-navi').parent().width());
});
setInterval(function(){
	if($(window).scrollTop() != 0){

		$('.bo-navi')
			.css('background','rgba(255,255,255,1)')
			.css('height','64px')
		.find('i')
			.css('color','rgba(33,150,243,0.6)');
		$('.bo-navi a')
			.css('color','rgba(33,150,243,0.6)')
			.css('height','64px');
		setTimeout(function(){
			$('.bo-navi')
				.css('box-shadow','0 0 1px rgba(0,0,0,0.6)');
		},350);
	}else{
		$('.bo-navi')
			.css('background','rgba(255,255,255,0)')
			.css('height','70px')
			.css('box-shadow','0 0 0 rgba(0,0,0,0)')
		.find('i')
			.css('color','rgba(255,255,255,1)');
		$('.bo-navi a')
			.css('color','rgba(255,255,255,1)')
			.css('height','70px');
		$('.side-nav a')
			.css('color','rgba(33,150,243,0.6)');
	}
},250);
$('.bo-menu-pusher').on('click',function(){
	$('.bo-mobile-navi')
		.css('left','0px');
		//.css('cssText','left : 0px !important');
});
$('.bo-main-content').on('click',function(){
	$('.bo-mobile-navi')
		.css('left','-'+$('.bo-mobile-navi').width()+'px');
		//.css('cssText','left : -209px !important');
});