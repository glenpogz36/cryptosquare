$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();
    var year = parseInt($("#sentence").val ());
    var leapYear = false;
    if (year % 4==0){
      if (year % 100==0) {
        if (year % 400==0) {
          leapYear = true;
        }
      } else {
        leapYear = true;
      }
    }
    if (leapYear){
      $("#story").append ("<p>This is a leap year</p>");
    } else {
      $("#story").append ("<p>This is not a leap year</p>");
    }
    $("#story").show();
  });
});
