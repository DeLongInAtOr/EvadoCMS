jQuery.fn.slideNews = function(settings) {
    settings = jQuery.extend({
        headline: "Lata",
        newsWidth: 46,
        newsSpeed: "slow"
    }, settings);
    return this.each(function(i){
       
       
        itemLength = jQuery(".item",this).length;
        newsContainerWidth = itemLength * settings.newsWidth;
        jQuery(".container",this).css("width",newsContainerWidth + "px");
        
        jQuery("a:eq(3)",this).click(function() {
            thisSlider = jQuery(this).parent().parent().parent();
            jQuery(".next",thisSlider).css("display","none");
            jQuery(".prev",thisSlider).css("display","none");
            jQuery(".container",thisSlider).css("left","0px");
            jQuery(".container",thisSlider).css("width",settings.newsWidth * 3 + "px");
            jQuery(".view_all",thisSlider).css("display","none");
        });
        jQuery(".next",this).css("display","block");
        animating = false;
        jQuery(".next",this).click(function() {
        	
            thisParent = jQuery(this).parent();
            if (animating == false) {
                animating = true;
                animateLeft = parseInt(jQuery(".container",thisParent).css("left")) - (settings.newsWidth);
                if (animateLeft + parseInt(jQuery(".container",thisParent).css("width")) > 0) {
                    jQuery(".prev",thisParent).css("display","block");
                    jQuery(".container",thisParent).animate({left: animateLeft}, settings.newsSpeed, function() {
                        jQuery(this).css("left",animateLeft);
                        if (parseInt(jQuery(".container",thisParent).css("left")) + parseInt(jQuery(".container",thisParent).css("width")) <= settings.newsWidth * 3) {
                            jQuery(".next",thisParent).css("display","none");
                        }
                        animating = false;
                    });
                } else {
                    animating = false;
                }
                return false;
            }
            return false;
        });
        jQuery(".prev",this).click(function() {
        	
            thisParent = jQuery(this).parent();
            if (animating == false) {
                animating = true;
                animateLeft = parseInt(jQuery(".container",thisParent).css("left")) + (settings.newsWidth);
                if ((animateLeft + parseInt(jQuery(".container",thisParent).css("width"))) <= parseInt(jQuery(".container",thisParent).css("width"))) {
                    jQuery(".next",thisParent).css("display","block");
                    jQuery(".container",thisParent).animate({left: animateLeft}, settings.newsSpeed, function() {
                        jQuery(this).css("left",animateLeft);
                        if (parseInt(jQuery(".container",thisParent).css("left")) == 0) {
                            jQuery(".prev",thisParent).css("display","none");
                        }
                        animating = false;
                    });
                } else {
                    animating = false;
                }
                return false;
            }
            return false;
        });
    });
};
 
$(document).ready(function(){
	$(".top_stories").slideNews();
});
