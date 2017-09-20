$(function(){

	
	 $('body').removeClass('fade-out');
	$('landing').fadeIn();
	$('#contents').children('p').text('');

	$('#a').hover(function(){
	$('#a').html("<a href='#1'>Home</a>");
	$('#a').siblings().addClass('compress');},function(){
		$('#a').text('');
		$('#a').siblings().removeClass('compress');
	});
	$('#b').hover(function(){
	$('#b').html("<a href='#2'>Profile</a>");
	$('#b').siblings().addClass('compress');},function(){
		$('#b').text('');
		$('#b').siblings().removeClass('compress');
	});
	$('#c').hover(function(){
	$('#c').html("<a href='#3'>Heal your Life workshops</a>");
	$('#c').siblings().addClass('compress');},function(){
		$('#c').text('');
		$('#c').siblings().removeClass('compress');
	});
	$('#d').hover(function(){
	$('#d').html("<a href='#4'>Yoga classes/workshops</a>");
	$('#d').siblings().addClass('compress');},function(){
		$('#d').text('');
		$('#d').siblings().removeClass('compress')
	});
	$('#e').hover(function(){
	$('#e').html("<a href='#5'>Life Coaching</a>");
	$('#e').siblings().addClass('compress');},function(){
		$('#e').text('');
		$('#e').siblings().removeClass('compress')
	});
	$('#f').hover(function(){
	$('#f').html("<a href='#6'>Testimonials</a>");
	$('#f').siblings().addClass('compress');},function(){
		$('#f').text('');
		$('#f').siblings().removeClass('compress')
	});
	$('#g').hover(function(){
	$('#g').html("<a href='#7'>Resources</a>");
	$('#g').siblings().addClass('compress');},function(){
		$('#g').text('');
		$('#g').siblings().removeClass('compress')
	});
	$('#h').hover(function(){
	$('#h').html("<a href='#8'>Contact</a>");
	$('#h').siblings().addClass('compress');},function(){
		$('#h').text('');
		$('#h').siblings().removeClass('compress')
	});			

});
$("#1").click(function() {
    $('html, body').animate({
        scrollTop: $("#1").offset().top
    }, 2000);
	});
	
	$("#2").click(function() {
    $('html, body').animate({
        scrollTop: $("#2").offset().top
    }, 2000);
	});
	
	$("#3").click(function() {
    $('html, body').animate({
        scrollTop: $("#3").offset().top
    }, 2000);
	});
	
	$("#4").click(function() {
    $('html, body').animate({
        scrollTop: $("#4").offset().top
    }, 2000);
	});
	
	$("#5").click(function() {
    $('html, body').animate({
        scrollTop: $("#5").offset().top
    }, 2000);
	});
	
	$("#6").click(function() {
    $('html, body').animate({
        scrollTop: $("#6").offset().top
    }, 2000);
	});
	
	$("#7").click(function() {
    $('html, body').animate({
        scrollTop: $("#7").offset().top
    }, 2000);
	});
	
	$("#8").click(function() {
    $('html, body').animate({
        scrollTop: $("#8").offset().top
    }, 2000);
	});
	
	$("#9").click(function() {
    $('html, body').animate({
        scrollTop: $("#9").offset().top
    }, 2000);
	});
$("#btn").click(function(){
	$('#b1')
});
