$(function(){
	$(".thumbnails a").attr('rel', 'gallery').fancybox();
    
	$("#nav-list li, #scroll_up, #header-beta").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },500);
	 });
     
    $("a").click(function(e) {
        ga('send', 'event', 'link', 'click', e.target.href);
    });
    
    $("#show-other-versions").click(function() {
      $(this).hide();
      $("#other-versions").show();
    });
 });