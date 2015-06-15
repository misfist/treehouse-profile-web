var router = require('./router.js');
//Problem: Find and look at a user's profile, including badge count and JS points

//Solution: Use node.js to look up profile and serve our template via HTTP

//1. Create a webserver

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running at http://treehouse/');


  //if url == "/...."
    //get json from source (e.g. Treehouse)
  //on "end" (when data comes back successfully)
    //show profile
  //on "error"
    //show error

//4. Function that handles the reading of files and merge in values
  // read from file and get a string (what file?)
    // merge values into string