var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var mysql = require('mysql');

app.set('port',process.env.PORT || 3000);
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'insideout1209',
    database : 'dearhere'
});

app.get('/', function (req,res) {
    pool.query('select * from node', function(err, rows, fields) {
        if (err) throw err;
        console.log('The result is: '+ rows);
        var name = rows[1];
        res.render('useDB',name);
        // connection.release();
    });
});



app.listen(app.get('port'),function () {
    console.log('Express started on http://localhost'+
    app.get('port')+';press ctrl+C to terminate');
});
