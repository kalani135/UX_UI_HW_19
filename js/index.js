console.log("Your index.js file is loaded correctly");


$(document).ready(function(){
    $(".image-ur-forjs").mouseover(function(){
      $(".image-ur-forjs").css("height", "250px");
      $(".image-ur-forjs").css("width", "450px");
    });
    $(".image-ur-forjs").mouseout(function(){
      $(".image-ur-forjs").css("height", "190px");
      $(".image-ur-forjs").css("width", "350px");
    });
  

  $(".image-ui-forjs").mouseover(function(){
    $(".image-ui-forjs").css("height", "250px");
    $(".image-ui-forjs").css("width", "450px");
  });
  $(".image-ui-forjs").mouseout(function(){
    $(".image-ui-forjs").css("height", "190px");
    $(".image-ui-forjs").css("width", "350px");
  });


$(".image-wd-forjs").mouseover(function(){
    $(".image-wd-forjs").css("height", "250px");
    $(".image-wd-forjs").css("width", "450px");
  });
  $(".image-wd-forjs").mouseout(function(){
    $(".image-wd-forjs").css("height", "190px");
    $(".image-wd-forjs").css("width", "350px");
  });
});