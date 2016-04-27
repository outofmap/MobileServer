var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
app.set('port',process.env.PORT || 3000);

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.get('/',function (req, res) {
    res.render('index',{name:req.query.name});
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
