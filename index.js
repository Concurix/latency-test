var express = require('express')
var app = express();
var latency = require('./lib/latency')

//setup additional routes
latency(app)

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port)
});
