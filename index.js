var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var port = process.env.PORT || 4000;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(morgan('dev'));

var hackathonFile = path.join(__dirname, '/app/all.json');

app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.sendFile('/app/index.html');
})

app.post('/test', function(req,res) {
  console.log(req.body);
  var hackathonListing = req.body.hackathons;
  var review  = req.body.review;
  console.log(hackathonListing);
  console.log(review);
  var reviewList = fs.readFile('app/all.json', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    } else {
      var reviews = JSON.parse(data);
      /*
      var reviewsArr = reviews.hackathons;
      console.log(reviewsArr);
      */

      console.log('- review - ');
      console.log(reviews);
      reviews['hackathons'].forEach(function(hackathon) {
        if(hackathon.hackathon_name === hackathonListing) {
          hackathon['reviews'].push(review);
        };
      })
      console.log('- pushed data -');
      console.log(reviews.hackathons);

      fs.writeFile('./app/all.json', JSON.stringify(reviews), function(err) {
        if (err) {
          return console.log(err);
        } else {
          console.log('successful!');
        }
      })
    }
  });


  //res.send({ redirect: 'http://localhost:4000/#/hackathons' });
  res.send('Review submitted successfully. <a href="http://localhost:4000/#/hackathons">Click here</a> to view.');

});

app.get('/hackathons', function(req, res) {
  res.sendFile(hackathonFile);
});

app.listen(port);
console.log('working on port ' + port);
