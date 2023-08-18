$(document).ready(function(){
    AOS.init();

    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct >= 80){
            $('.fixed-sub').addClass('active');
            $('header').addClass('active');
        }
        else{
            $('.fixed-sub').removeClass('active');
            $('header').removeClass('active');
        }
    });

    $('header .menu').mouseenter(function(){
        let result = $(this).attr('data-alt');
        $('.menu .menu-inout').removeClass('active');
        $(`#${result}`).addClass('active');
    });

    $('header .menu').mouseleave(function(){
        let result = $(this).attr('data-alt');

        $(`#${result}`).removeClass('active');
    });
    
    $('header .menu-btn').click(function(){
        $(this).toggleClass('active');   

        if($(this).hasClass('active')){
            $('header .menu-box').addClass('active');
            $('header').addClass('on');
        }else{
            $('header .menu-box').removeClass('active');
            $('header').removeClass('on');
        }
    });

    $('header .menu-box .menu p').click(function(){
        $(this).parent().toggleClass('active');

        if($(this).parent().hasClass('active')){
            $(this).parent().children('ul').addClass('active');
        }else{
            $(this).parent().children('ul').removeClass('active');
        }
    });

});