var express = require('express')
var Message = require('./Message.js');
var app = express()
 
app.get('/', function (req, res) {
  res.send(new Message('The endpoints you can reach: /helloworld, /secondroute'));
});

app.get('/helloworld', function (req, res) {
  res.send(new Message('ezigen'));
});

app.get('/secondroute', function (req, res) {
  res.send(new Message('success'));
})
 
app.listen(3000)