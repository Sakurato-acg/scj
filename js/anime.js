$(function () {
  // $(".head-list").hide();
  var flag = false;
  $(".index_header .head-toggle").on("click", function () {
    console.dir($(".head-list"));
    if (!flag) {
      $(".head-list").slideToggle("normal", function () {
        $(".head-list").css("display", "flex");
      });
      flag = true;
    } else {
      $(".head-list").slideToggle("normal", function () {
        $(".head-list").css("display", "none");
      });
      flag = false;
    }

    // $(".head-list").css("display", "flex");
  });
});
