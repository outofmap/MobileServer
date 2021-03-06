var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
var bodyparser = require('body-parser').urlencoded({extended:true});
var formidable = require('formidable');

app.use(bodyparser);
app.set('port',process.env.PORT || 3000);

app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app.get('/upload', function (req,res) {
    res.render('upload');
});

app.post('/upload_do',function(req, res){
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.on('fileBegin', function (name, file) {
        file.path = __dirname +'/uploads/'+ file.name;
    });
    // form.uploadDir = __dirname + '/uploads';
    form.on('progress', function(bytesReceived, bytesExpected) {
        console.log(bytesReceived);
        console.log(bytesExpected);
    });

    form.parse(req, function(err, fields, files) {
        console.log('files');
        console.log(fields);
        console.log('files: ');
        console.log(files);
    });

    form.on('end', function() {
        res.redirect('/upload_ok');
    });

});

app.get('/upload_ok', function (req,res) {
    res.render('upload_ok');
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
