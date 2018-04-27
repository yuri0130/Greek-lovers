$( document ).ready(function() {
  // put jquery here
  $(".reservations").click(function(){
 $("#reservation").fadeIn("slow");
  });

  $("#modal-close").click(function(){
    $("#reservation").fadeOut("slow");
  });
});
