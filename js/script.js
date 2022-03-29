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
    var skillsTopOffset = $('.skillsSection').offset().top;
    $(window).on('scroll', function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#FF69B4',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });
        }
    });
});