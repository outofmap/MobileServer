var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);
//app.use(express.static(__dirname + '/public'));

app.get('/headers', function(req,res){
    res.type('text/plain');
    var s= '';
    for(var name in req.headers){
        s += name + ':'+req.headers[name]+'\n';
    }
    res.send(s);
});
app.get('/',function(req,res){
    res.type('text/html');
    res.redirect('/about');

});
app.get('/about',function(req,res){
    res.type('text/html');
    res.sendFile(__dirname + '/public/about.html');

});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
