$(function (){
  $("#js-shopping-list-form").submit(function (event){
    event.preventDefault();
    let text = $("#shopping-list-entry").val();
    let btnFunctions = "<li><span class='shopping-item'>" + text + "</span> <div class='shopping-item-controls'> <button class='shopping-item-toggle'> <span class='button-label'>check</span> </button> <button class='shopping-item-delete'> <span class='button-label'>delete</span> </button> </div> </li>"
   $("#shopping-list-entry").val('');
  $("ul").append(btnFunctions);
  });

  $('.shopping-item-toggle').on('click', function (event){
  $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });

  $(".shopping-item-delete").on('click', function(event){
  $(this).closest("li").remove();
 });
});



