$(function showService() {
  /**
    * function to open service options when clicked
    *
    */
  $(".serv-opt").click(function () {

    if (!$(".shown-serv-row").is(":visible")) {
      $(".shown-serv-row").toggle();
    }

    var target = $(this).attr("href");  //option to activate

    // find whether there is an active option
    var toDeactivate = ($(".serv-opt-holder").find(".active-option"));

    if (toDeactivate == null) {             // if there is no active option
      $(this).addClass('active-option');    // show clicked option
    } else {                                // there already is option showed
      var toHide = toDeactivate.attr("href"); // option to hide
      if (toHide == target)  {                // if clicked on active hide it
        $(this).removeClass('active-option');
      } else {                          //  if clicked isnt active
        $(toDeactivate).removeClass('active-option');
        $(toHide).slideToggle();         // hide the showed option
        $(this).addClass('active-option');
      }
    }
    $(target).slideToggle();         // toggle the clicked
    // scroll to opened srvice
    // $('html, body').animate({
    //   scrollTop: $(target).offset().top
    // }, 1000);
  });
});


// function showService(theChosenOne) {
//   // $(".shown-serv-row").each(function(index) {
//   //   if ($(this).attr("id") == theChosenOne) {
//   //     $(this).slideToggle(400);
//   //   } else {
//   //     $(this).hide();
//   //   }
//   // });
//   $(".serv-opt").click('click', function () {
//     var target
//   }
// }


// TODO: scroll slower over map
// TODO: scroll indicator
// TODO: smooth scroll
