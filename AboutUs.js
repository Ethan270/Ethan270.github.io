$(document).ready(function () {

    $('.gallery img').hover(
        function () {
            $(this).fadeTo(300, 0.7);
        },
        function () {
            $(this).fadeTo(300, 1); 
        }
    );


    $(window).on('scroll', function() {
        $('.fadeInElement').each(function() {
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).height();
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).height();

            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                $(this).fadeTo(500, 1);
            }
        });
    });


    $('.fadeInElement').css('opacity', 0);

    
    function changeBackgroundColor(color) {
        $('.box').css('background-color', color); 
    }

    $('button').click(function() {
        changeBackgroundColor('lightblue'); 
    });
});