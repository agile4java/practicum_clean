$(document).ready(function() {

  var categoriesTemplate = $("#categories-template").html();

  var compiledCategoriesTemplate = Handlebars.compile(categoriesTemplate);

  var message = "jQuery is working client side";

  $("#client-partials").html(message);

  $("#loggedInPage").on("click", "#getCategoriesButton", function(e) {
    e.preventDefault();
    console.log("button click recognized");
    console.log("");
    $.get('/tradingAPI/getHighCategories', function(categories) {
      console.log("response received from server");
      console.log("");
      readXML(categories);
      //$("#client-partials").html(categories);
    })
  });

  $("#loggedInPage").on("click", "#item1", function(e) {
    //e.preventDefault();
    console.log("Item1 clicked");
    console.log("");

    $("#level1category").innerText($("#item1").innerText);
  })

  // $.ajax("../html/hbsTemplates.html").done(function(catTemp) {
  //   $("body").append(catTemp);

  //   Handlebars.registerPartial("categoriesTemplate", $(
  //     "#categories-template").html());
  // });
});