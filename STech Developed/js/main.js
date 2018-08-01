$(document).ready(function() {
	$("#courses").addClass("animated fadeInUp");
	$("#home").addClass("animated fadeInLeft");
	$("#work").addClass("animated fadeInDown");
	$("#serve").addClass("animated fadeInUp");
	$("#conta").addClass("animated fadeInRight");

	$("#text1").addClass("animated fadeIn" );
	$("#text2").addClass("animated fadeInDown" );
	$("#text3").addClass("animated fadeInUp" );
	$("main-logo").addClass("animated fadeIn");


	$("#port1").waypoint(function() {
		$("#port1").addClass("animated fadeInLeft" );
	},
	{
		offset:'50%'
	});

	$("#port2").waypoint(function() {
		$("#port2").addClass("animated fadeInDown" );
	},
	{
		offset:'50%'
	});

	$("#port3").waypoint(function() {
		$("#port3").addClass("animated fadeInUp" );
	},
	{
		offset:'50%'
	});
	$("#port4").waypoint(function() {
		$("#port4").addClass("animated fadeInRight" );
	},
	{
		offset:'50%'
	});
	
	$("#our-work-imgs").waypoint(function() {
		$("#our-work-imgs").addClass("animated shake" );
	},
	{
		offset:'50%'
	});

	$("#our-work2").waypoint(function() {
		$("#our-work2").addClass("animated flip" );
	},
	{
		offset:'50%'
	});

	$(".col2").waypoint(function() {
		$(".col2").addClass("animated zoomIn" );
	},
	{
		offset:'50%'
	});

	$("#we-do").waypoint(function() {
		$("#we-do").addClass("animated tada" );
	},
	{
		offset:'50%'
	});
	$("#contsec").waypoint(function() {
		$("#contsec").addClass("animated fadeInUp" );
	},
	{
		offset:'70%'
	});
	$("#outsrc").waypoint(function() {
		$("#outsrc").addClass("animated swing" );
	},
	{
		offset:'50%'
	});
	/*$("#blogspot").waypoint(function() {
		$("#blogspot").addClass("animated flash" );
	},
	{
		offset:'70%'
	});*/
});



$(document).on('click','a[href^="#"]', function(event) {
	event.preventDefault();

	$('html,body').animate({
		scrollTop: $($.attr(this,'href')).offset().top
	},1500);

});

$(".hamburger").click(function() {
	$(this).toggleClass("is-active");

	$(".responsive-nav").slideToggle();
});