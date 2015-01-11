/*
if (!Modernizr.svg) {
  $("#menu").css("background-image", "url(<!-- @path menu.png -->)");
}
*/

$( document ).ready(function() {
	/* preloader */

	setTimeout(function() {
    var timerPreloader = 0;
    //alert(timerPreloader);
    if (timerPreloader == 0) {
  		$(".preloader").addClass('loaded');
      timerPreloader = 1;
      //alert(timerPreloader);
    }
  }, 800);

	/* menu */

	$(".menu-wrapper").on('click', function(){
	  $("body").toggleClass('menu-active');
	});

	/* slide in as you scroll down boxes */

  $.fn.offScreen = function(distance){
	
    var $t				= $(this),
    	$w				= $(window),
    	viewTop			= $w.scrollTop(),
    	viewBottom		= viewTop + $w.height(),
    	_top			= $t.offset().top - distance,
    	_bottom		= $t.offset().top + $t.height() + distance;
   
   	return {
     top: _bottom <= viewTop,
     bottom: _top >= viewBottom
    }
  };

  var win = $(window);

  var allMods = $(".module");

  allMods.each(function(i, el) {
    var el = $(el);
    if (!el.offScreen(150).bottom) {
      el.addClass("already-visible"); 
    } 
  });

  win.on("scroll resize",function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (!el.offScreen(150).top && !el.offScreen(150).bottom) 
      {
        el.removeClass("already-visible off-screen-top off-screen-bottom"); 
        el.addClass("come-in"); 
      } 
      else
      {
      
          if(el.offScreen(150).top)
          {
              el.addClass("off-screen-top"); 
          }
          else
          {
              el.addClass("off-screen-bottom"); 
          }
      }
    });//allMods.each()
    
  });//win.scroll()

  win.trigger("scroll");

});
