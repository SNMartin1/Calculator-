var express=require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5656;

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: true}));


//Server-side POST information recieves the data from objectToSend on the client
// side and uses it to calculate the total based on the objectToSend information.
//
app.post ('/calculation', function(req, res){
  console.log('Input recieved', req.body);
  //var calcInput = req.body; //This is the data we send (input1, input2)
var responseObject = {
  calculation: math(req.body)
};
  // console.log(product);
  //calcInput.push(product);
  res.send(responseObject);

 });


app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function(){
  console.log('Server running on port', port);
});


// checks to see with operator is being used and returns calcuation using a
// switch statement to determine math to be done.
var math = function(object) {
  switch (object.type) {
    case '+':
      return Number(object.input1) + Number(object.input2);
    case '-':
      return Number(object.input1) - Number(object.input2);
    case '*':
      return Number(object.input1) * Number(object.input2);
    case '/':
      return Number(object.input1) / Number(object.input2);
    default:
      break;
  } //end of switch statement
}; //end of math function
