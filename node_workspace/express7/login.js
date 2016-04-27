var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyparser = require('body-parser').urlencoded({extended:true});
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var app = express();

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use(bodyparser);
app.use(cookieParser());
app.use(session({
    secret:'my_secret',
    resave:false,
    saveUninitialized: true,
}));
app.set('port',process.env.PORT || 3000);


app.get('/login', function (req,res) {
    res.render('login',{
        login_ok: req.session.login_ok,
        login_id: req.session.login_id
    });
});

app.post('/login_do',function (req,res) {
    // console.log(req.query.form);
    var id = req.body.loginId;
    var pw = req.body.pw;
    if( id == "admin" && pw == "admin"){
        req.session.login_ok = true;
        req.session.login_id = id;
        res.redirect('/login');
    } else {
        res.redirect('/login_not');
    }
});

app.get('/login_not',function (req,res) {
    res.render('login_not');
});

app.get('/login_out',function (req,res) {
    req.session.destroy();
    res.redirect('/login');
});
app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
