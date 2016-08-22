var express = require('express');
var app = express();
var bodyparser = require('body-parser').urlencoded({extended:true});
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var mongoose = require('mongoose');
var db = mongoose.connection;
app.set('port',process.env.PORT || 3000);
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');
app.use(bodyparser);

db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});
mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;
var memberSchema = new Schema({
    name: String,
    published_date: { type: Date, default: Date.now }
}, { collection: 'member'});
var Member = mongoose.model('member', memberSchema);

app.post('/', function (req, res) {
    var member = new Member();
    member.name = req.body.name;

    member.save(function(err){
        if(err) {
            console.error(err);
            res.status(500).send({error: 'data save failure'});
        }
    });
    res.send('add success');
});

app.get('/',function (req, res){
    Member.find(function(err, members){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(members);
    });
});


app.get('/add', function (req,res) {
    // Member.find(function(err, members){
    //     if(err) return res.status(500).send({error: 'database failure'});
    //     // res.json(members);
        res.render('useDB');
    // });
});



app.listen(app.get('port'),function () {
    console.log('Express started on http://localhost'+
    app.get('port')+';press ctrl+C to terminate');
});
