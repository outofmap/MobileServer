var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');

app.get('/',function (req, res) {
    res.render('index',{name:req.query.name});
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/mobile',function (req, res) {
    res.render('mobile');
})

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
