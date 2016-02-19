var https = require('https');

var options = {
  host: 'https://api.github.com',
  path: '/users/caspyin'
};

https.request(options, function(response) {
  var str = '';

  response.on('data', function(chunk) {
    console.log(chunk)
    str += chunk;
  });

  response.on('end', function() {
    displayGithubUser(str);
  });
}).end();

function displayGithubUser(user) {
  console.log(user); 
}
