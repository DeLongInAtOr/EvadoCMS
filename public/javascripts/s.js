$(document).ready(function() {

	$(".parent").click(function() {
	        $(this).toggleClass("selected").parent('h3').next('ul.sub').slideToggle("slow");
	    });	
		 
	$(".top_stories").slideNews(); 

  		$('#rightbar h3.toggle').click(function() { 
			$(this).parent('div').next(".calendar").slideToggle("slow").siblings('.calendar').slideUp("slow");
		 });

});