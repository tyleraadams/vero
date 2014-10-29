$(document).ready(function(){
	$('div').click(function(e){
		// debugger
		var thumbnail = $(this) 
		$(this).replaceWith('<img src=' + $(this).css('background-image').replace('url(','').replace(')','') +' style="max-width:600px">')
		
		// $('html').click(function(e){
		// 	$('img').replaceWith(thumbnail)
		// });
	});
});