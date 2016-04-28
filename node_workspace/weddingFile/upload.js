var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
var bodyparser = require('body-parser').urlencoded({extended:true});
var formidable = require('formidable');
var path = require('path');

app.use(bodyparser);

app.use(express.static(path.join(__dirname, 'public')));
app.set('port',process.env.PORT || 3000);

app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');
// app.set('view engine', 'html');
app.get('/upload', function (req,res) {
    res.render('upload');
});

app.post('/uploadIMG',function(req, res){
    console.log("file upup ");
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + '/uploads';
    form.keepExtensions = true;
    form.parse(req);
    res.redirect('/sucess');
});

app.get('/sucess', function (req,res) {
    res.render('success');
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
