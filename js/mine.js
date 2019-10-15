'use strict';
//act on loading page and show document when it's ready
$(window).ready(function() {
    $('#loading').fadeOut('700');
    $('body').css('overflow', 'auto');
});
//init scrollTop var
var scrollTop= $(window).scrollTop();
//action on navbar when scroll
$(window).scroll(function() {
    //adjust scroll-to-top
    var scrollToTp= $('.scrollUp');
    if ($(window).scrollTop() > $(window).height()-500){
        scrollToTp.fadeIn(400);
    }else{
        scrollToTp.fadeOut(400);
    }
    /* navbar action when body scroll */
    if ($('body', 'html').width()>=990) {
        if($(this).scrollTop() > 50) {
            $(".bg-style").css({
                background: '#fff',
                boxShadow: '0 5px 7px rgba(0,0,0,0.09)'
            });
            $(".navbar-brand .img-light").css('display', 'none');
            $(".navbar-brand .img-dark").css('display', 'block');
            $(".navbar-dark .navbar-nav .nav-link ").css('color', '#333');
            $(".navbar-dark .navbar-nav .lstItem .nav-link").css({
                background: '#4caf56',
                color: '#fff'
            });
        }else{
           $(".bg-style").css({
                background: 'transparent',
                 boxShadow: 'none'
            });
            $(".navbar-brand .img-light").css('display', 'block');
            $(".navbar-brand .img-dark").css('display', 'none');
            $(".navbar-dark .navbar-nav .nav-link ").css('color', '#fff');
            $(".navbar-dark .navbar-nav .lstItem .nav-link").css({
                background: '#fff',
                color: '#333'
            });
        }
    }
}); //end action when scroll
//nice scroll when click on the link
$('.nav-link').click(function() {
    /* Act on the event */
    var aHref= $(this).attr('href');
    var secOffset= $(aHref).offset().top-60;
    $('html, body').animate({scrollTop: secOffset}, 1000)
});
//optional box
$('#option-icon').click(function() {
    /* Act on the event */
    $('.option-box').toggle();
});
//li option background color
var colors =['#4CAF50','#FF9800','#009688','#00BCD4','#E91E63'];
var lisColor= $('.option-box ul li');
for (var i = 0; i < lisColor.length; i++) {
    lisColor.eq(i).css('backgroundColor', colors[i]);
}
lisColor.click(function(e) {
    e.preventDefault();
    /* Act on the event */
    var bgColor= $(this).css('backgroundColor');
    $('.bg-color').css('backgroundColor', bgColor);
    $('button.bg-color').hover(function() {
        $(this).css({
           backgroundColor: '#fff',
            color: '#333'
        });
    }, function() {
        $(this).css({
           backgroundColor: bgColor,
            color: '#fff'
        });
    });
    $('.color-style').css('color', bgColor);

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.navbar-dark .navbar-nav .lstItem .nav-link').css({
            backgroundColor: bgColor,
            color: '#fff'
        });
        }else{
             $(".navbar-dark .navbar-nav .lstItem .nav-link").css({
                background: '#fff',
                color: '#333'
            });
        }
    });
    //action when hover on card link on services section
    $('.card-link').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).css('color', bgColor);
        $(this).find('span').css('left', '8px');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).css('color', '#666');
        $(this).find('span').css('left', '5px');
    });
});

//action on header section
//adjust header height
$(".header").height($(window).height());
$(".header").resize(function() {
    /* when resize window */
    $(".header").height($(window).height());
});

$(".content").css('top', (($(window).height())-$('.content').height())/2);
//End action on header

//fire owl carousel 
//testimonials section event
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1200:{
            items:3
        }
    }
});

//fire Counter

//hover on btn-success
$('.additional .btn-success').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this).css({
        background: '#fff',
        color: '#333',
        borderColor:'#fff'
    });
}, function() {
    /* Stuff to do when the mouse leaves the element */
     $(this).css({
        background: '#28a745',
        color: '#fff',
        borderColor:'#28a745'
    });
});
//when click on scrollUp
$('.scrollUp').click(function(e) {
    var scrollTop= $(window).scrollTop();
    /* Act on the event */
    e.preventDefault();
    $('html , body').animate({scrollTop: 0}, 600);
});

$('.counter').counterUp();
