


$(document).ready(function () {  
  $(".collapsible li").click(function () {
    $(this).siblings().removeClass("active"); //comment this line to make the accordion expansible
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).siblings().find(".collapsible-body").slideUp(300);
      $(this).siblings().find(".collapsible-header").removeClass('active-header');
      $(this).siblings().find(".collapsible-header").addClass('noactive-header');
  
      $(this).find(".collapsible-body").slideDown(300);
      $(this).find(".collapsible-header").removeClass('noactive-header');
      $(this).find(".collapsible-header").addClass('active-header');
  
  
    } else {
      $(this).find(".collapsible-body").slideUp(300);
      $(this).find(".collapsible-header").removeClass('active-header');
      $(this).find(".collapsible-header").addClass('noactive-header');
    }
    //$(this).find('.collapsible-body').slideToggle(500); //change display property
  });
});

function selectLayer(LayerNo) {

  event.preventDefault();
  var count = $("#container li").length;
  $("#container li").removeClass('active');
  $("#container li").eq(LayerNo - 1).addClass('active');           

  for (var i = 0; i < count; i++) { 
      $("#header" + (i + 1)).removeClass('active-header');
      $("#header" + (i + 1)).removeClass('noactive-header');                               
      $("#header" + (i + 1)).addClass('noactive-header');
      $("#layer" + (i + 1)).hide();
  }

  $("#header" + LayerNo).removeClass('noactive-header');
  $("#header" + LayerNo).addClass('active-header');
  $("#layer" + LayerNo).show();

  event.stopPropagation();

}