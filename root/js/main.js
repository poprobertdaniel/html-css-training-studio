$(document).ready(function() {
    var handleNav = function(){
    	var targetElem = $('.top-navigation');
    	var offsetTop = targetElem.offset().top;

		if (offsetTop != 0) {
			targetElem.addClass('fixed');
		}
    	window.addEventListener('scroll', function(e){
    		var offsetTop = targetElem.offset().top;

    		targetElem.addClass('fixed');
    		if (offsetTop === 0) {
    			targetElem.removeClass('fixed');
    		}
    	});
    }
    handleNav();
});