$(document).ready();
//adds item  to list on button click
$('#add').click(function() {
  var value = $('#item').val();
  //alert not leave input blank
  if($('#item').val() == ''){
    alert("Please, don't leave the text box empty, write the name of those beautiful countries you've visited :D");
 //if input it is not blank:
}else{
  //clear after new li it is added to the ul
  $('#item').val("");
  //create a new li and add to ul
  $('ul').append('<li>' + value + '</li>');
  }
});

