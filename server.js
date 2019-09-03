var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;
    //assert = require('assert')

/* Global variables */
var listingData, server;


var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  //console.log("Parsed URL is:" + parsedUrl.path);

  if (parsedUrl.path == "/listings"){
    response.end(listingData);
  }
  else {
    response.statusCode = 404; //set status code to 404
    /* Attempts of sending a Bad gateway error assertion
    response.statusMessage = 'Bad gateway error';
    assert.AssertionError.message = 'Bad gateway error';
    response.message = 'bad gateway error';
    */
    response.end('Bad gateway error'); //display error in browser
  }
  /*
    Your request handler should send listingData in the JSON format as a response if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: Explore the request object and its properties 
    HINT: Explore the response object and its properties
    https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
    
    HINT: Explore how callback's work 
    http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
    
    HINT: Explore the list of MIME Types
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   */
};



//console.log("Did we get here?");

fs.readFile('listings.json', 'utf8', function(err, data) {
  
  try{
    //listingData = JSON.parse(data).entries[1].code;
    listingData = data;
    //console.error(err);
    if (err != null){
      throw err;
    }
    server = http.createServer(requestHandler);

    server.listen(port, function(){
      //
    });
  }
  catch (err) {
    console.error(err);
  }
  //console.log("fs");
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
   */

    //Check for errors
  

   //Save the sate in the listingData variable already defined
  

  //Creates the server
  
  //Start the server


});


