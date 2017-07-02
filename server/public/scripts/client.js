console.log("js sourced");

//document ready function
$(document).ready(function() {
console.log('jq sourced');


// creating object with data to be used for the calcuation in the ajax POST request
$('#calcButton').on('click', function(){
  var objectToSend = {
   input1 : $('#input1').val(),
   input2 : $('#input2').val(),
   type : $('#add').text()
}; //end of objectToSend
console.log(objectToSend);


//sending data from inputs (objectToSend) to the server to do the calculation.
  $.ajax({
    type: 'POST',
    url: '/calculation',
    data: objectToSend,
    success: function(response) {
      console.log('input sent to server be calculated');
      $('#total').val(response.calculation);
    }

});//end of on click function for calcButton
  }); //end of ajax POST
}); // end of document Ready
