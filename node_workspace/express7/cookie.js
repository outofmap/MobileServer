var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.set('port',process.env.PORT || 3000);

app.get('/counter', function (req,res) {
    if(isNaN(req.cookies.counter)){
        req.cookies.counter = 0;
    }
    var counter = req.cookies.counter;
    counter++;
    res.cookie('counter', counter, {
        maxAge:10*1000
    });
    res.type('text/plain');
    res.send('카운터'+ counter);
});

app.get('/counter_clear', function (req,res) {
    res.clearCookie('counter');
    res.redirect('/counter');
})

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
