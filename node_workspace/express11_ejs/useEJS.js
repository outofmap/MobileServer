var express = require('express');
var app = express();
var mysql = require('mysql');

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');

var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'insideout1209',
    database : 'dearhere'
});

app.get('/',function (req, res) {
    pool.getConnection(function(err, connection) {
    // Use the connection
        connection.query( 'SELECT * from node', function(err, rows) {
        // And done with the connection. connection.release();
        // Don't use the connection here, it has been returned to the pool. });
            res.render('index',{users : rows});
            connection.release();
        });
    });
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost'+
  app.get('port')+';press ctrl+C to terminate');
});
