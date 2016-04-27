var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.get('/',function (req, res) {
    var phonebook = [];
    var title = "EJS code";
    phonebook.push({name: "gil", phone:"010-0000-0000"});
    phonebook.push({name: "jessy", phone:"010-1111-0000"});
    phonebook.push({name: "chu", phone:"010-2222-0000"});
    res.render('user', {users:phonebook,title:title});
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
