$(function () {
  $(".serv-opt").click(function () {
    //if some vsible, hide all  show new
    //add/remove active class from options
    var target = $(this).attr("href");
    var parent = $(this).parent()
    //check if no ohter is open
    // if ($('.serv-opt').each().hasClass("active-option"))
      //close openned, open new

    //if alredy open
    if (parent.hasClass("active-option")) {
      $(parent).removeClass("active-option");
      $(target).toggle();
      // $(target).css("display", "none");

    } else {
      $(target).toggle();
      // $(target).css("display", "block");
      $(parent).addClass("active-option");
    }
    // $(target).css
  });
});
