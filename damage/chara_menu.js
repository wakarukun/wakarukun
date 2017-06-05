$(function(){

  $("#b").hide();
  $("#c").hide();
  $("#d").hide();

  $(".parent").change(function(changed) {

    switch ($(changed.target).val()) {
      case "fusion":
        $("#b").show();
        $("#c").hide();
        $("#d").hide();
        break;
      case "solo":
        $("#b").hide();
        $("#c").show();
        $("#d").hide();
        break;
      case "other":
        $("#b").hide();
        $("#c").hide();
        $("#d").show();
        break;
    }

  });

});
