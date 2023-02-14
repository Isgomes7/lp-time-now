jQuery(document).ready(function ($) {
    $(".menu-mobile").click(function () {
        $("header ul, .right").toggleClass("active");
    })
    $(".slider.round").click(function () {
        $(".year, .month, .years, .months").toggleClass("active");
    })
});