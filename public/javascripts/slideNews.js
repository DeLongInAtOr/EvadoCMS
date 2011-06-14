var ktory = 0

$(document).ready(function(){
	var lis = 0
		$('#mmodule .news li').each(function(){
			lis += $(this).innerHeight()
		})
	if (lis > $('#mmodule .mask:first').innerHeight()) {
		$('#mmodule .down').css('display', 'block')
	}

	$('#mmodule .down').click(function(){
		var h = $('#mmodule .mask li').eq(ktory).height()
			h += 20;
		var hu = $('#mmodule .mask ul').height()
		var i = $('#mmodule .mask li').length
		var v = $('#mmodule .mask').height()
		var m = parseInt($('#mmodule ul').css('marginTop'))

		var t = hu + m -v
		if (t > 0) {
			ktory++;
			$("#mmodule .mask ul").animate({ marginTop: "-="+h }, 600, function(){					
				if($("#mmodule .mask ul").css('margin-top') == '0px'){
					$('#mmodule .up').css('display', 'none');
				}else{
					$('#mmodule .up').css('display', 'block');
				}	
				}
			);
		}
		
	
		return false
	})

	$('#mmodule .up').click(function(){
		if (ktory > 0) {
			var h = $('#mmodule .mask li').eq(ktory-1).height()
				h += 20;
			var hu = $('#mmodule .mask ul').height()
			var i = $('#mmodule .mask li').length
			var v = $('#mmodule .mask').height()
			var m = parseInt($('#mmodule .mask ul').css('marginTop'))

			ktory--;
			$("#mmodule .mask ul").animate({ marginTop: "+="+h }, 600, function(){
				if($("#mmodule .mask ul").css('margin-top') == '0px'){
					$('#mmodule .up').css('display', 'none');
				}else{
					$('#mmodule .up').css('display', 'block');
				}	
				}					
			);
		}
		return false
	})
})