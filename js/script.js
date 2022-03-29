$(document).ready(function() {
    $('#slides').superslides(
        {
            animation: 'fade',
            play: '8500',
        }
    );
    new Typed(
        ".typed", {
            strings: ["Software Engineer", "Mobile Developer", "Flutter Advocate"],
            typeSpeed: 85,
            loop: true,
            startDelay: 500,
            showCursor: false
        }
    );
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    $('.skillIcon').fadeOut();
    $('.statsNum').fadeOut();
    $('.aboutMeParagraph').fadeOut();
    var skillsTopOffset = $('.skillsSection').offset().top;
    var statsTopOffset = $('.statsSection').offset().top;
    var aboutMeTopOffset = $('.aboutMeSection').offset().top;
    $(window).on('scroll', function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 225) {
            $('.skillIcon').fadeIn(1500);
        }
        if (window.pageYOffset > statsTopOffset - $(window).height() + 90) {
            $('.statsNum').fadeIn(1500);
        }
        if (window.pageYOffset > aboutMeTopOffset - $(window).height() + 90) {
            $('.aboutMeParagraph').fadeIn(1500);
        }
    });
    if(jQuery().fancybox) { $("[data-fancybox]").fancybox(); } 
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});