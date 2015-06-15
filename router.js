// Handle HTTP route GET / and POST / (i.e. Home)
function home(request, response) {
  if(request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
  }
}
//if url == "/" && GET
  //show search
//if url == "/" && POST
  //redirect to /:username

//Handle HTTP route GET /:username i.e. /misfist
function user(request, response) {
  var username = request.url.replace('/', '');
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Header\n');
    response.write(username + '\n');
    response.end('Footer\n');  }
}

// Export
module.exports.home = home;
module.exports.user = user;