$(window).on("load", fadeOutLoader);

$(document).ready(function() {
    initSuperSlides();
    initTyped();
    initOwlCarousel();
    initFancyBox();
    initStickyNav();
    setScrollFadeIn();
    addScrollToNavBarButtonClick();
});

function fadeOutLoader() {
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750)
    });
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
}

function initSuperSlides() {
    $('#slides').superslides( {
            animation: 'fade',
            play: '3050',
        }
    );
}

function initTyped() {
    return new Typed(
        ".typed", {
            strings: ["Software Engineer", "Mobile Developer", "Determined Learner"],
            typeSpeed: 85,
            loop: true,
            startDelay: 500,
            showCursor: false
        }
    );
}

function initOwlCarousel() {
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2, 
            },
            768:{
                items:3,
            },
            938:{
                items:4, 
            }
        }
    });
}

function initFancyBox() {
    if (jQuery().fancybox) { $("[data-fancybox]").fancybox(); } 
    $("#filters a").on("click", function() {
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
}

function initStickyNav() {
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", () => {
        const body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    });
}

function setScrollFadeIn() {
    $('.skillIcon').fadeOut();
    $('.statsNum').fadeOut();
    $('.itemsContainer').fadeOut();
    $('.aboutMeParagraph').fadeOut();
    var skillsTopOffset = $('.skillsSection').offset().top;
    var statsTopOffset = $('.statsSection').offset().top;
    var aboutMeTopOffset = $('.aboutMeSection').offset().top;
    var portfolioTopOffset = $('.portfolioSection').offset().top;
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
        if (window.pageYOffset > portfolioTopOffset - $(window).height() + 90) {
            $('.itemsContainer').fadeIn(1500);
        }
    });
}

function addScrollToNavBarButtonClick() {
    $("#navigation li a").on("click", function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });
}