;$(function()
{
	'use strict';
	var sidebar = $('#sidebar'),
	    mask = $('.mask'),
	    si = $('.si'),
		go = $('.go');

	    go.on('click',gotop)
 		si.on('click',show)
	    mask.on('click',showout)
		
		function gotop(){
			$('html,body').animate({
				scrollTop:0
			},800)
		}

		$(window).on('scroll',function(){
			if ($(window).scrollTop()>$(window).height()) 
				go.fadeIn();
			else
				go.fadeOut();
			
		})
		$(window).trigger('scroll');
		
		function show()
	    {
	    	mask.fadeIn();
	    	sidebar.css('right',0);
	    }
	    function showout()
	    {
	    	mask.fadeOut();
	    	sidebar.css('right',-sidebar.width());
	    }
	
	/*var go = $('.go');
	go.on('click',function{
		console.log(gd)
	})  */
}

)