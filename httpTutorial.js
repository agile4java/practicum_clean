// ---------------------------------------------------------------------------------------
// Let’ s say that we want issue a GET request and determine the IP address of the request, in
//   this
// case our local machine.Within your project include the following:
//---------------------------------------------------------------------------------------
var Request = require("request");

Request.get("http://httpbin.org/ip", (error, response, body) => {
  if (error) {
    return console.dir(error);
  }
  console.dir(JSON.parse(body));
});
// --------------------------------------------------------------------------------------
// Let’ s change our code to look like the following:
// --------------------------------------------------------------------------------------
var Request = require("request");

Request.post({
  "headers": {
    "content-type": "application/json"
  },
  "url": "http://httpbin.org/post",
  "body": JSON.stringify({
    "firstname": "Nic",
    "lastname": "Raboy"
  })
}, (error, response, body) => {
  if (error) {
    return console.dir(error);
  }
  console.dir(JSON.parse(body));
});