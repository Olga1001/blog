$(document).ready(function () {
    $('.header-btn-menu').click(function(){
        $(this).toggleClass('btn-active');
        $('.header-menu').addClass('active');

        if (!$(this).hasClass('btn-active')) {
            $('.header-menu').removeClass('active');
        }
    });
});





