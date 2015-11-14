var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var port = process.env.PORT || 4000;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.use(morgan('dev'));

var hackathonFile = path.join(__dirname, '/public/all.json');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.sendFile('/app/index.html');
})

app.get('/hackathons', function(req, res) {
  res.sendFile(hackathonFile);
});

app.listen(port);
console.log('working on port ' + port);
