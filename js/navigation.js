//Function for smooth scrolling

$(".nav-item").click( function() {
	console.log("dst");
	var location = $(this).attr("href");
	$("html, body").animate({scrollTop: $(location).offset().top - 60 }, 'fast');
	return false;
});
