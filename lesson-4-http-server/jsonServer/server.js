var http = require('http');
var PORT = process.env.PORT || 3000;

var db = {
  cats: [
    {name: 'Sam', color: 'black'},
    {name: 'Max', color: 'white'}
  ]
}

function dispatcher(request, response) {
  if (request.url === '/cats') {
    response.end(JSON.stringify(db.cats)); 
  }

  response.end('success!');
}

var server = http.createServer(dispatcher);

server.listen(PORT, function() {
  console.log('server listening on port: ' + PORT);
});
