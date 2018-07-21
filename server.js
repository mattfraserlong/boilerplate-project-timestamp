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


app.get("/api/timestamp/:dateVal", function(req, res, next){
  
  console.log("url working");
  
  var dateVal = req.params.dateVal;
  var naturalDate = new Date(dateVal);
    
  if (naturalDate == "Invalid Date") {
    res.json({"error": "Invalid Date"})
    } else {
      naturalDate = naturalDate.toUTCString();
      var unixDate = new Date(dateVal).getTime()/1000;
      res.json({"unix": unixDate, "UTC": naturalDate});
    }
  
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});