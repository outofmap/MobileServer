var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
app.set('port',process.env.PORT || 3000);

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
var bodyparser = require('body-parser').urlencoded({extended:true});
app.use(bodyparser);

// app.get('/login_do', function(req,res){
//     console.log(req.query.form);
// });

app.post('/login_do',function(req,res){
    console.log(req.query.form);

    var id = req.body.loginId;
    var pw = req.body.pw;
    if( id == "admin" && pw == "admin"){
        res.redirect(303,'/login_ok');
    } else {
        res.redirect(303,'/login_not');
    }
});
app.get('/login',function(req,res){
    res.render('login');
});
app.get('/login_ok',function(req,res){
    res.render('login_ok');
});

app.get('/login_not',function(req,res){
    res.render('login_not');
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
