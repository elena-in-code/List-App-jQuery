//adds item  to list on button click
$('#add').click(function() {
  var value = $('#item').val();
  //clear after new li it is added to the ul
  $('#item').val("");
  //create a new li and add to ul
  $('ul').append('<li>' + value + '</li>');
});

//adds item to list on enter key hit
$("#item").keyup(function(event){
    if(event.keyCode == 13){
      var value = $('#item').val();
      //clear after new li it is added to the ul
      $('#item').val("");
      //create a new li and add to ul
      $('ul').append('<li>' + value + '</li>');
    }
});