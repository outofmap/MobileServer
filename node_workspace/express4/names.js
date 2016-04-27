var express = require('express');
var app = express();
var names = [{id:0, name:'홍길동'},{id:1,name:'김기사'}];
app.set('port',process.env.PORT || 3000);

app.get('/names/:id',function (req, res) {
    res.type('text/plain');
    var result = names[req.params.id];
    res.send(result);

});



app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
