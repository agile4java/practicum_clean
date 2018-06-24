var express = require('express');
var router = express.Router();
// load eBayService.js module from services folder
const authService = require('../services/authService');

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

router.get('/ebayLogin', (req, res) => {
  console.log('Entering /ebayLogin');
  console.log(' ');
  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const parseString = require('xml2js').parseString;
  var ebayLoginURL = '';
  var data =
    "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<GetSessionIDRequest xmlns=\"urn:ebay:apis:eBLBaseComponents\">\r\n  \r\n\t<ErrorLanguage>en_US</ErrorLanguage>\r\n\t<WarningLevel>High</WarningLevel>\r\n <RuName>Stephen_Conway-StephenC-Jamies-ydafbegg</RuName>\r\n</GetSessionIDRequest>";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {

    if (this.readyState === 4) {
      console.log('getSessionID received, parsing');
      console.log(' ');
      var xml = this.responseText;
      parseString(xml, function(err, result) {
        // extract SessionID from result
        var sesId = result.GetSessionIDResponse.SessionID.toString();
        sessionId = sesId;
        // encode SessionID
        sesId = encodeURIComponent(sesId);
        // construct redirect URL for ebay Login
        ebayLoginURL =
          `https://signin.sandbox.ebay.com/ws/eBayISAPI.dll?SignIn&RuName=Stephen_Conway-StephenC-Jamies-ydafbegg&SessID=` +
          sesId;
        console.log('redirecting to ebayLoginURL');
        console.log(' ');
        return res.redirect(ebayLoginURL);
      });
    }
  }); // end xhr.addEventListener

  // format xhr (XMLHttpRequest), add headers,
  // custom payload and call GetSessionID to 
  // retrieve SessionID
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
  xhr.send(data);

}); // end app.get('/ebayLogin')

// After eBay Signin eBay redirects here
router.get('/loggedIn', (req, res) => {


  console.log('SessionId: ' + sessionId);
  console.log(' ');

  // res.render('loggedIn');

  console.log('Entering /loggedIn, fetching token...');
  console.log(' ');

  // Dependencies for POST call
  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const parseString = require('xml2js').parseString;

  // POST Request to Fetch AuthToken from eBay
  // var data: String = XML payload for POST
  // Custom headers:
  //    siteId: 0
  //    compatability leve: 967
  //    call name: FetchToken
  //    app name: 
  //    dev name: 
  //    cert name: 
  var data =
    `
    <?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<FetchTokenRequest xmlns=\"urn:ebay:apis:eBLBaseComponents\">\r\n  <SessionID>` +
    sessionId + `</SessionID>\r\n</FetchTokenRequest>
  `;
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      var xml = this.responseText;
      parseString(xml, function(err, result) {
        // extract SessionID from result
        token = result.FetchTokenResponse.eBayAuthToken.toString();
        authService.setAuthToken(token);
        console.log('eBayAuthToken: ');
        console.log(' ');
        console.log(token);
        console.log(' ');
        res.render('loggedIn');
      });
    }
  });

  xhr.open("POST", "https://api.sandbox.ebay.com/ws/api.dll");
  xhr.setRequestHeader("X-EBAY-API-SITEID", "0");
  xhr.setRequestHeader("X-EBAY-API-COMPATIBILITY-LEVEL", "967");
  xhr.setRequestHeader("X-EBAY-API-CALL-NAME", "FetchToken");
  xhr.setRequestHeader("X-EBAY-API-APP-NAME",
    "StephenC-JamiesPi-SBX-7668815a4-8f5703d8");
  xhr.setRequestHeader("X-EBAY-API-DEV-NAME",
    "be5b455e-1ba1-4e05-871c-9edc6f6e8e7a");
  xhr.setRequestHeader("X-EBAY-API-CERT-NAME",
    "SBX-668815a4911f-7e34-4eff-9a9e-be3c");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Postman-Token",
    "8ab18232-88d6-411b-9eef-ca2e6e174307");
  xhr.send(data);
}); //end app.get('/loggedIn')

router.get('/loggedInBypass', (req, res) => {
  res.render('loggedIn');
})

module.exports = router;