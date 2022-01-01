$(document).ready   (function(){
    $('.thumb-slide li').click(function(){
        var thumb = $(this).find('img').attr('src');
        var slide = $('.main-product-img-slide img');

        slide.fadeTo('200','0', function () {
            slide.attr('src',thumb).fadeTo('150', 1);
        });
        $('.thumb-slide li').removeClass('active');
        $(this).addClass('active');
    });
});