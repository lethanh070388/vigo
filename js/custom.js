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

    /******************************
      BOTTOM SCROLL TOP BUTTON
    ******************************/

    // declare variable
    var scrollTop = $(".to_top");

    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD

    $('#btnStep1').on('click',function(){
        $('#bookingStep1').css("display","none");
        $('#bookingStep2').css("display","block");
        $('.step_1').css({
            backgroundColor: "#ffffff",
            color: "#00b9af"
        });
        $('.step_2').css({
            backgroundColor: "#00b9af",
            color: "#ffffff"
        });
    });
    $('#btnStep2').on('click',function(){
        $('#bookingStep2').css("display","none");
        $('#bookingStep3').css("display","block");
        $('.step_2').css({
            backgroundColor: "#ffffff",
            color: "#00b9af"
        });
        $('.step_3').css({
            backgroundColor: "#00b9af",
            color: "#ffffff"
        });
    });

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items : slidesPerPage,
            dots: true,
            nav: true,
            smartSpeed: 200,
            slideSpeed : 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate : 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
        
        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
        
        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }
        
        //end block

        sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
        
        if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    
    function syncPosition2(el) {
        if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    
    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }
    })
});