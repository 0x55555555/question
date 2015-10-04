
var express = require('express');
var app = express();

var static_path = __dirname + "/";
app.use(express.static(static_path));


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
