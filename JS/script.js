$(function () {


  // $(".serv-opt-about").click(function () {
  //
  // });

  $(".serv-opt").click(function () {

    var target = $(this).attr("href");  //ption to activate

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
        $(toHide).toggle();         // hide the showed option
        $(this).addClass('active-option');
      }
    }
    $(target).toggle();         // toggle the clicked
  });
});
