var https = require('http');
module.exports.pagesmanager =function()
{


  // Start a server.

  https.createServer(function(req, res) {
    //  me.handleRequest(request, response);

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World' + req.url + '\n');
  }).listen(1337, "127.0.0.1").on('error',function(err){
          console.log(err);
        });;

}
