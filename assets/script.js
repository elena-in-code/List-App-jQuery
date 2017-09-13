//adds item  to list on button click
$('#add').click(function() {
  var value = $('#item').val();
  $('ul').append('<li>' + value + '</li>');
});
//adds item to list on enter key hit
$("#item").keyup(function(event){
    if(event.keyCode == 13){
      var value = $('#item').val();
      $('ul').append('<li>' + value + '</li>');
    }
});