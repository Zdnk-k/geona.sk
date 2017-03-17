// navshrink

$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $('nav').addClass('navbar-small');
    } else {
        $('nav').removeClass('navbar-small');
    }
});

// smooth scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


$(function () {
  setNavigation();
});

//nav position hightlight
function setNavigation() {
  var scrollLoc = window.location.href;

  $(".nav a").each(function () {
    var href = $(this).attr('href');
    if (path.substring(0, href.length) == href) {
      $(this).closest('li').addClass('active');
    } else{
      $(this).closest('li').removeClass('active');
    }
  });
}
