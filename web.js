var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

// get the file buffer and convert to regular string
var buffer = fs.readFileSync("index.html");
var pagedata = buffer.toString();

app.get('/', function(request, response) {
  response.send(pagedata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
