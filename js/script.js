$(document).ready(function() {
    $('#slides').superslides(
        {
            animation: 'fade',
            play: '5000',
        }
    );
    new Typed(
        ".typed", {
            strings: ["Software Engineer", "Mobile Developer", "goated af"],
            typeSpeed: 70,
            loop: true,
            startDelay: 1000,
            showCursor: false
        }
    )
});