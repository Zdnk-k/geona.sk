// navshrink

$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
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


// COUNTER
// TODO: only when seeen
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});




// TODO:add more when hover

// show/hide
$()


// $(".page").each(function() {
//     var bb = $(this).attr("id");
//     var hei = $(this).outerHeight();
//     var grttop = $(this).offset().top - 80;
//
//     if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
//         var uu = $(".navbar-nav>li>a[href='#" + bb + "']").parent().addClass("active");
//     } else {
//         var uu = $(".navbar-nav>li>a[href='#" + bb + "']").parent().removeClass("active");
//     }
// });
