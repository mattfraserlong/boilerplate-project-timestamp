// server.js
// where your node app starts
//URL to test "https://fcc-microservice-ml.glitch.me/api/timestamp/2015-12-25"
//https://www.youtube.com/watch?v=Iw1ZR92czdw

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

/* http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
}); */

app.get("/api/timestamp/:dateVal", function(req, res, next){
  
  console.log("url working");
  
  var dateVal = req.params.dateVal;
  var naturalDate = new Date(dateVal);
    
  if (naturalDate) { //how do I test new Date can parse dateVal?
      naturalDate = naturalDate.toUTCString();
      var unixDate = new Date(dateVal).getTime()/1000;
      res.json({"unix": unixDate, "UTC": naturalDate});
    } else {
      res.json({"error": "Invalid Date"})
    }
  
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});