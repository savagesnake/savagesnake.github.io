$(function(){
	
	//DOM CACHE
	var $linkBlank = $('[href$=".pdf"],[href^="http"]');
	var $hWrap = $('#header-wrap');
	var $hIntro = $('.header-intro');
	var $pages = $('.page');
	var $about = $('#what-i-do');
	var $navWrap = $('.nav-wrap');
	var $navlinks = $navWrap.find('a');
	var $mobileBtn = $('.btn-menu');
	var $winHeight = $(window).height();
	var $winWidth = $(window).width();
	var $winPos = $(window).scrollTop();
	var $this = $(this);
	
	
	//renders
	$linkBlank.attr('target','_blank');
	
	//movile btn
	$mobileBtn.click(function(){
		$navWrap.toggleClass('mobileNavLinks');	
	});
	
	$navlinks.click(function(){
		$navWrap.toggleClass('mobileNavLinks');	
	});//click
		
	
var navPositions = (function(){	
	 
	    var $breakPoint = 	1000-17;
		var $xPos         = $winHeight /2;
		var $styles       = {
							   top:$xPos
							};	
	
	
	if($winWidth >= $breakPoint){
				  $navWrap.css($styles);
			 }//end if
	if($winWidth <= $breakPoint){
				  $navWrap.addClass('mobileNavLinks');
		
			 }//end if
	
		 $(window).scroll(function(){
			 $winPos = $(this).scrollTop();
			 //$winWidth = $(this).width();
			 
				 
			 if($winPos >= $winHeight/3 && $winWidth >= $breakPoint){
				 $navWrap.addClass("fixedNav");	
			 }else{
				 $navWrap.removeClass("fixedNav");
			 }

		 });//end scroll		 

		$(window).resize(function(){
			$winWidth = $(this).width();
			//$winPos = $(this).scrollTop();
			
			if($winWidth >= $breakPoint){
				  $navWrap.css($styles);
			 }else{
				 $navWrap.removeAttr("style");
			 }
			
			if($winPos >= $winHeight/2 && $winWidth >= $breakPoint){
				 $navWrap.addClass("fixedNav");	
			 }else{
				 $navWrap.removeClass("fixedNav"); 
			 }
			
			if($winWidth <= $breakPoint){
				  $navWrap.addClass('mobileNavLinks');
				
			 }else{
				 $navWrap.removeClass('mobileNavLinks');
			 }
			
			
		});// end scroll	
			
	})();//end positions
			
		
var sectionSize = (function(){
		//DOM CACHE
		
		
		render();

		function render(){
			
			$hWrap.css('height',$winHeight);
			//$pages.css('min-height',$winHeight);
			$about.css('margin-top',$winHeight);
			
			$(window).on('resize', function(){
				var $winHeight = $(window).height();
				
				$hWrap.css('height',$winHeight);
				//$pages.css('min-height',$winHeight);
				$about.css('margin-top',$winHeight);
			})

		}//end render
		
})();//end section size
	
//skillBars plugin
$('.skillbar').skillBars({

				  // number start
				  from: 0,

				  // number end 
				  to: false,

				  // animation speed
				  speed: 1000,

				  // how often the element should be up<a href="http://www.jqueryscript.net/time-clock/">date</a>d
				  interval: 100,

				  // the number of decimal places to show
				  decimals: 0,

				  // callback method for every time the element is updated,
				  onUpdate: null,

				  // callback method for when the element finishes updating
				  onComplete: null,

				  // CSS classes
				  classes: {
					skillBarBar: '.skillbar-bar',
					skillBarPercent: '.skill-bar-percent',
				  }

				});// end skill bars pluging
	
});// end of jquery