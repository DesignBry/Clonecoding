$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 3000){
            $('main .main_inner .main_bottom .community_inner > a').fadeIn(300)
        }else {
            $('main .main_inner .main_bottom .community_inner > a').fadeOut(300)
        }
    })
    $('main .main_inner .main_bottom .community_inner > a').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        }, 300)
    })

    // PUBG Languagesnav menu
    $('.header_top_gnb .top_right .top_box .ko').click(function(){
        $('.header_top_gnb .top_right .top_box .ko .languages_nav').toggleClass('active')
    })
    $('header .header_inner .header_top_gnb .top_left a').click(function(){
        $('.modal').fadeIn(200)
    })
    $('.modal .modal_inner .modal_top .close').click(function(){
        $('.modal').fadeOut(200)
    })
})