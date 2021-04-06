console.log("we made it!");
// document.addEventListener()
// $ == jQuery
// target   event   callback /
$(document).ready(function () {
  // Handler for .ready() called.
  console.log("the doc is ready!");
  //   $("h1").click(function () {
  //     $(this).fadeOut("slow");
  //     console.log("the body has faded out");
  //   });

  //   $("h1").click(function () {
  //     $(this).fadeIn("slow");
  //     console.log("the body has faded in");
  //   });

  $(".container").append("hello how are you today");
  console.log("h1 appended");
  // $(".container").append(function () {
  $("div").click(function () {
    $(this).hide();
    console.log("div is hidden");
  });
  //   $("#1").click(function () {
  //     $(this).hide();
  //   });
  //   $("#2").click(function () {
  //     $(this).hide();
  //   });
  //   $("#3").click(function () {
  //     $(this).hide();
  //   });
  //   $("#4").click(function () {
  //     $(this).hide();
  //   });
  //   $("#5").click(function () {
  //     $(this).hide();
  //   });
  $("h1").click(function () {
    $(this).hide(); //this does the same thing
  });
  //   $("h1").click(function () {
  //     $(this).show();
  //   });
  // });
  // $('body', 'h1')  selects both body and h1
  // $('body' 'h1')  this is different just like in css it will select the h1 that is child of body

  $("p").hover(function () {
    $(this).addClass("change");
    console.log("changing class to p");
  });
  //   keep all jquery inside the document.ready
});
