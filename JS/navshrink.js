$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $('nav').addClass('navbar-small');
    } else {
        $('nav').removeClass('navbar-small');
    }
});
