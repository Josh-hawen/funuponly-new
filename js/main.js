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


$('#ru-lang').click(function() {
	$('.about-project-eng').addClass("hidden");
	$('.about-project-rus').removeClass("hidden");
	$(this).addClass("current-lang");
	$('#en-lang').removeClass("current-lang");
})

$('#en-lang').click(function() {
	$('.about-project-eng').removeClass("hidden");
	$('.about-project-rus').addClass("hidden");
	$(this).addClass("current-lang");
	$('#ru-lang').removeClass("current-lang");
})

////////////////////////////////////////////////////

$('#fun22-prev').click(function() {
	$('.fun22').toggleClass('active');  
	$('.fun21p2').toggleClass('active');
}) 

$('#fun21p2-next').click(function() {
	$('.fun22').toggleClass('active');  
	$('.fun21p2').toggleClass('active');
}) 

$('#fun21p2-prev').click(function() { 
	$('.fun21p2').toggleClass('active');
	$('.fun21p2').toggleClass('non-active');
	$('.fun21p1').toggleClass('active');
}) 

$('#fun21p1-next').click(function() { 
	$('.fun21p2').toggleClass('active');
	$('.fun21p2').toggleClass('non-active');
	$('.fun21p1').toggleClass('active');
}) 

$('#fun21p1-prev').click(function() { 
	$('.fun21p1').toggleClass('active');
	$('.fun21p1').toggleClass('non-active');
	$('.fun20').toggleClass('active');
}) 

$('#fun20-next').click(function() { 
	$('.fun21p1').toggleClass('active');
	$('.fun21p1').toggleClass('non-active');
	$('.fun20').toggleClass('active');
}) 

$('#fun20-prev').click(function() { 
	$('.fun20').toggleClass('active');
	$('.fun20').toggleClass('non-active');
	$('.fun19').toggleClass('active');
}) 

$('#fun19-next').click(function() { 
	$('.fun20').toggleClass('active');
	$('.fun20').toggleClass('non-active');
	$('.fun19').toggleClass('active');
}) 

$('#fun19-prev').click(function() { 
	$('.fun19').toggleClass('active');
	$('.fun19').toggleClass('non-active');
	$('.fun18').toggleClass('active');
}) 

$('#fun18-next').click(function() { 
	$('.fun19').toggleClass('active');
	$('.fun19').toggleClass('non-active');
	$('.fun18').toggleClass('active');
}) 

$('#fun18-prev').click(function() { 
	$('.fun18').toggleClass('active');
	$('.fun18').toggleClass('non-active');
	$('.fun17').toggleClass('active');
}) 

$('#fun17-next').click(function() { 
	$('.fun18').toggleClass('active');
	$('.fun18').toggleClass('non-active');
	$('.fun17').toggleClass('active');
}) 

$('#fun17-prev').click(function() { 
	$('.fun17').toggleClass('active');
	$('.fun17').toggleClass('non-active');
	$('.fun16').toggleClass('active');
}) 

$('#fun16-next').click(function() { 
	$('.fun17').toggleClass('active');
	$('.fun17').toggleClass('non-active');
	$('.fun16').toggleClass('active');
}) 

////////////////////////////////////////////////////

$('#slide1-prev').click(function() {
	$('.slide1').toggleClass('active');  
	$('.slide2').toggleClass('active');
}) 

$('#slide2-next').click(function() {
	$('.slide1').toggleClass('active');  
	$('.slide2').toggleClass('active');
}) 

$('#slide2-prev').click(function() { 
	$('.slide2').toggleClass('active');
	$('.slide2').toggleClass('non-active');
	$('.slide3').toggleClass('active');
}) 

$('#slide3-next').click(function() { 
	$('.slide2').toggleClass('active');
	$('.slide2').toggleClass('non-active');
	$('.slide3').toggleClass('active');
}) 


});






