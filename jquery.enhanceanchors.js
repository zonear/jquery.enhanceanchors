/*!
 * Enhance anchor links with scroll animation 
 * 
 * 
 * @author Zonear Ltd. <contact@zonear.com>
 */
;(function(document, $) {	
	$(document).ready(function() {
		
		// Select all anchor links
		$('a[href^=#]').each(function(i, el) {
			var $el = $(el);
			
			// Skip empty links
			if($el.attr('href') == '#') { return; }
			
			// Set click handlers
			$el.click(function(event) {
				event.preventDefault();
				
				// Add history with pushState
				if(window.history && window.history.pushState) {
					window.history.pushState({}, document.title, $(this).attr('href'));
				}
				
				// Scroll to element
				$('html, body').animate({
			         scrollTop: $($(this).attr('href')).offset().top
			    }, 500);
			});
		});
	
	});	
})(document, jQuery);