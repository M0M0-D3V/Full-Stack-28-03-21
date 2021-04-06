console.log("this works!");
$(document).ready(function () {
  // write all of our js in here
  console.log("document is loaded!");
  $("#b1").on(
    "mouseenter",
    function () {
      $("body").css("background-image", "url(img/beach.jpg");
    }
    // function () {
    //   $("body").css("background-image", "none");
    // }
  );
  $("#b2").on(
    "mouseenter",
    function () {
      $("body").css("background-image", "url(img/earth.jpg");
    }
    // ,
    // function () {
    //   $("body").css("background-image", "none");
    // }
  );
  $("#b3").on(
    "mouseenter",
    function () {
      $("body").css("background-image", "url(img/dojo.jpg");
    }
    // ,
    // function () {
    //   $("body").css("background-image", "none");
    // }
  );
  $("#b4").on(
    "mouseenter",
    function () {
      $("body").css("background-image", "url(img/forest.jpg");
    }
    // ,
    // function () {
    //   $("body").css("background-image", "none");
    // }
  );
  $("#b5").on(
    "mouseenter",
    function () {
      $("body").css("background-image", "url(img/matrix.jpg");
    }
    // ,
    // function () {
    //   $("body").css("background-image", "none");
    // }
  );
  $("#b6").on(
    "mouseenter",
    function () {
      $("body").css("background-image", "url(img/snow.jpg");
    }
    // ,
    // function () {
    //   $("body").css("background-image", "none");
    // }
  );
  // section for selecting buttons
  $("#b1").click(function () {
    $("body").css("background-image", "url(img/beach.jpg");
    $("body").css("background-color", "none");
    $("#arena-select").hide();
    $("#player-select").show();
  });
  $("#b2").click(function () {
    $("body").css("background-image", "url(img/earth.jpg");
    $("body").css("background-color", "none");
  });
  $("#b3").click(function () {
    $("body").css("background-image", "url(img/dojo.jpg");
    $("body").css("background-color", "none");
  });
  $("#b4").click(function () {
    $("body").css("background-image", "url(img/forest.jpg");
    $("body").css("background-color", "none");
  });
  $("#b5").click(function () {
    $("body").css("background-image", "url(img/matrix.jpg");
    $("body").css("background-color", "none");
  });
  $("#b6").click(function () {
    $("body").css("background-image", "url(img/snow.jpg");
    $("body").css("background-color", "none");
  });
  // remember to stay above the bottom ending bracket
});
