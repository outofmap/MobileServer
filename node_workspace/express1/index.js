var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);
// app.set('view engine','jade');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');
app.use(express.static(__dirname + '/public'));

var mytext = require('./lib/mytext');

app.get('/',function(req,res){
  res.type('text/plain');
  res.send('Express Index');
});

app.get('/mytext',function (req, res) {
  res.type('text/plain');
  res.send(mytext.getMyText());
});

app.get('/jade', function(req,res){
  res.render('test',{title:'Hey', message:'I am Jade!!!'});
});

app.get('/handlebars', function(req,res){
  res.render('message', {message: 'Hello there!'});
});

app.get('/about',function(req,res){
  res.type('text/plain');
  res.send('Express About');
});

app.use(function(req,res){
  res.type('text/plain');
  res.status('404');
  res.send('404-Not Found');
});

app.use(function(err,req,res,next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status('500');
  res.send('500-Server Error');
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
