$(document).ready(function () {

  $('#inputEmail').change(function() {
    $('#mce-EMAIL').val($(this).val());
  });

  $('#inputName').change(function() {
    $('#mce-FNAME').val($(this).val());
  });

  $('#inputAddress2').change(function() {
    $('#mce-MMERGE8').val($(this).val());
  });
  
  $('#contactUsBtn').click(function(){
    alert("Thank you!");
    document.getElementById("mc-embedded-subscribe").click(); 
});

});