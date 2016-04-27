var fs = require('fs');

fs.readFile('/Users/Songhee/NEXT_PRJ/node_workspace/gugudan.js',
{encoding:'utf8'}, function(error,data){
    if(error){
      return console.error(error.message);
    }
    console.log(data);
});
