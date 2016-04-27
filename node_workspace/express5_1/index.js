var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);
app.set('view engine','jade');

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});

app.get('/',function (req,res) {
    var queryname = req.query.name;
    res.render('index',{name:'queryname'});
})

app.get('/about',function (req, res) {
    res.render('about');
})

app.get('/mobile',function (req, res) {
    res.render('mobile');
})

app.get('/gugudan_list',function (req, res) {
    res.render('gugudanlist');
})

app.get('/gugudan',function (req,res) {
    var dan = req.query.dan;
    console.log(dan);
    res.render('gugudan',{dan:dan});
})
