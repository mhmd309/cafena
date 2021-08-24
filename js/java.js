$(function () {
    'use strict'
    // Hover Button In Upperbar
    $('.upperbar .info-upper .button').hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 700);
    }, function() {
        $(this).find('span').eq(0).animate({
            width: 0
        }, 700);
    });
    // Add Class Active On Links Navbar
    $('.navbar-nav .nav-item .nav-link').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    // Show Input Search
    $('.navbar .search i').click(function(){
        $('.navbar .form').slideToggle();
    });
    // Add Class Active On ListItem Section Menu
    $('.menu .list-menu li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Show ListItem Section Menu
    $('.menu .list-menu li').click(function(){
        $('.menu .section-list-menu > div').hide();
        $($(this).data('filter')).fadeIn(1000);
    });
});