jQuery(document).ready(function(){


	
$('#menu-button').click(function() {
	$('#left-bar').toggleClass('active');  
	$(this).toggleClass('active');
	$('#overlay').toggleClass('active');
}) 

$('#overlay').click(function() {
	$('#left-bar').toggleClass('active');  
	$(this).toggleClass('active');
	$('#menu-button').toggleClass('active');
}) 
	

$('#social-button').click(function() {
	$('#right-bar').toggleClass('active');  
    $(this).toggleClass('active');
}) 

$('.fa-times').click(function() {
	$(this).parent().toggleClass("hidden");
})

});






