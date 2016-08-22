var express = require('express');
var app = express();
// var mysql = require('mysql');

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');

app.get('/',function (req, res) {
    res.render('index');
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
