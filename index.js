// load the core node filesystem (fs) module
const http = require("http");

// load the core node filesystem (fs) module
// a promoise send request to read files from a system module through 
const fs = require('fs').promises;

// creat a function that responds to the requests
const requestListener = function (req, res) {
  // output request url

  console.log(req.url);

if (req.url === "/") {

 // check request url, if root, return html file  // dir name is the absolute path to the file
 fs.readFile(__dirname + "/page.html")
 .then(contents => {
   // set http response header entry
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    // retrun 200 ok jttp status code
    res.writeHead(200);
    // send back file contents + close response
    res.end(contents);
  });
} else {
  // if request url not root, return json file
fs.readFile(__dirname + "/data.json")
  .then(contents => {
    // set http response header entry
    res.setHeader("Content-Type", "application/json; charset=UTF-8");
    // return 200OK http status code
    res.writeHead(200);
    // send back file contents + close response
    res.end(contents);
  });
}


};
// creat an http server instance
const server = http.createServer(requestListener);

// define the TCP port and IP address to tell out http server to listen
const host = "0.0.0.0";
const port = "8080";

// call the listen() method to start Listening to http requests 
server.listen(
  port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
  //above identical to sonsole.log("Server is  running on http://" + host + port);
  }
);
