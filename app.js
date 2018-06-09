// Dependencies

const express = require('express');

const exphbs = require('express-handlebars');

const http = require('http');

const https = require('https');

const url = require('url');

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Load authService.js module

const authService = require('./authService');



var port = 5009;

const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);



// Include Request package for http
var Request = require("request");

var path = require('path');
// Declare App
const app = express();

// Load routes
//-------------------commented out for now-------------------------------------
//const authServices = require('./routes/authServices');
//-------------------commented out for now-------------------------------------

app.use('/public', express.static(path.join(__dirname, 'public')));

// Use xml body-parser
app.use(bodyParser.xml());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});


// Use IF content-type of header from
// eBay isn't xml for xml body-parser
// app.use(bodyParser.xml({
//  type: <EBAY CONTENT TYPE IN HEADER>
//}));

// Handlebars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// index route
app.get('/', function(req, res, next) {
  res.render('index');
});

// user consent route
app.get('/consent', function(req, res, next) {
  res.render('userConsent');
});

app.get('/menu', function(req, res, next) {
  res.render('menu');
});

// Use routes
//-------------------commented out for now-------------------------------------
//app.use('/authServices', authServices);
//-------------------commented out for now-------------------------------------

// This route makes an XMLHttpRequest to the ebay trading api
// Parameters:
// Variables:
//    ebayLoginURL: String = The URL composed of the eBay
//      redirect address with the RuName and URLEncoded
//      sessionID attached.
// url: "https://api.sandbox.ebay.com/ws/api.dll");
// eBay custom headers: [
// { "X-EBAY-API-SITEID", "0") },
// { "X-EBAY-API-COMPATIBILITY-LEVEL", "967" },
// { "X-EBAY-API-CALL-NAME", "GetSessionID" },
// { "X-EBAY-API-APP-NAME", "StephenC-JamiesPi-SBX-7668815a4-8f5703d8" },
// { "X-EBAY-API-DEV-NAME",  "be5b455e-1ba1-4e05-871c-9edc6f6e8e7a" },
// { "X-EBAY-API-CERT-NAME",  "SBX-668815a4911f-7e34-4eff-9a9e-be3c" },
// { "Cache-Control", "no-cache" },
// Response:
// Response is an XML object that is converted to JSON with xml2js
// Then the SessionID is extracted, encoded, and attached to the
// ebay redirect url.
// The user is then directed

app.get('/ebayLogin', (req, res) => {

  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const parseString = require('xml2js').parseString;
  var ebayLoginURL = '';
  var data =
    "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<GetSessionIDRequest xmlns=\"urn:ebay:apis:eBLBaseComponents\">\r\n  \r\n\t<ErrorLanguage>en_US</ErrorLanguage>\r\n\t<WarningLevel>High</WarningLevel>\r\n <RuName>Stephen_Conway-StephenC-Jamies-ydafbegg</RuName>\r\n</GetSessionIDRequest>";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      var xml = this.responseText;

      // console.log(this.responseText);
      parseString(xml, function(err, result) {

        //console.dir(result.GetSessionIDResponse.SessionID);
        var sesId = result.GetSessionIDResponse.SessionID.toString();
        // console.log(sesId);
        // console.log(typeof(sesId));
        // console.log(sesId.toString());
        sesId = encodeURIComponent(sesId);

        ebayLoginURL =
          `https://signin.sandbox.ebay.com/ws/eBayISAPI.dll?SignIn&RuName=Stephen_Conway-StephenC-Jamies-ydafbegg&SessID=` +
          sesId;

        console.log(ebayLoginURL);

        return res.redirect(ebayLoginURL);
      });
    }
  });


  xhr.open("POST", "https://api.sandbox.ebay.com/ws/api.dll");
  xhr.setRequestHeader(
    "X-EBAY-API-SITEID", "0");
  xhr.setRequestHeader(
    "X-EBAY-API-COMPATIBILITY-LEVEL", "967");
  xhr.setRequestHeader(
    "X-EBAY-API-CALL-NAME", "GetSessionID");
  xhr.setRequestHeader(
    "X-EBAY-API-APP-NAME",
    "StephenC-JamiesPi-SBX-7668815a4-8f5703d8");
  xhr.setRequestHeader(
    "X-EBAY-API-DEV-NAME",
    "be5b455e-1ba1-4e05-871c-9edc6f6e8e7a");
  xhr.setRequestHeader(
    "X-EBAY-API-CERT-NAME",
    "SBX-668815a4911f-7e34-4eff-9a9e-be3c");
  xhr.setRequestHeader(
    "Cache-Control", "no-cache");
  // xhr.setRequestHeader("Postman-Token",
  //   "de1b4957-5fd5-41a1-8777-684741fe9fd1");

  xhr.send(data);

});

// After eBay Signin eBay redirects here
app.get('/loggedIn', (req, res) => {

})





app.listen(port, () => {
  console.log('Server started on port ' + port);
});
//---------------------------------------------------------------------------------------------------------
//--------------------------proxy server -------------------------------------------------------------------