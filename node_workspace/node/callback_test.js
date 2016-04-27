var http = require('http');
var fs = require('fs');


function sendJson(res){
  fs.readFile('./callback_text.json',function(err,data){
  if(err) return errorMessage(err,res);
  getTemplate(JSON.parse(data.toString()),res);
  });
}
function errorMessage(err){
  if(err){
      console.error(err);
      res.end('Server Error');
  }
}
function getTemplate(titles,res){
  fs.readFile('./callback_template.html',function(err,data){
    if(err) return errorMessage();
    sendHtml(titles,data.toString(),res);
  });
}

function sendHtml(titles,tmpl,res){
  var html = tmpl.replace('%',titles.join('</li><li>'));
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end(html);
}
http.createServer(function(req,res){
  if(req.url == '/'){
      sendJson(res);
  }
}).listen(3000,"127.0.0.1");
