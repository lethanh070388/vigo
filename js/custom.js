$(function(){
    $(window).on('scroll', function() {
        var nav = $('.scrolling-navbar');
        if($(window).scrollTop() >70) {
            nav.css({
                "padding-top":"0",
                "padding-bottom":"0"
            });
            nav.addClass('fixed-top');
        }
        else{
            nav.css({
                "padding-top":"8px",
                "padding-bottom":"8px"
            });
            nav.removeClass('fixed-top');
        }
    });
});