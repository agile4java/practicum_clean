//just a simple test function while getting setup


exports.buttonClick = function() {
  console.log("button clicked");
  document.getElementById("ebayList").innerText = "button was clicked!";
}
//The function called by the button click in makeCall.handlebars
exports.makeCall = function() {

  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const parseString = require('xml2js').parseString;

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

        var URL =
          `https: //signin.sandbox.ebay.com/ws/eBayISAPI.dll?SignIn&RuName=Stephen_Conway-StephenC-Jamies-ydafbegg&SessID=` +
          sesId;

        return URL;
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
}


// PREVIOUS ATTEMPT #2
//   var xhr = new XMLHttpRequest();
//   //--------------------------------------xhr request------------------------------------------------------

//   var appID = "StephenC-JamiesPi-SBX-7668815a4-8f5703d8";
//   var devID = "be5b455e-1ba1-4e05-871c-9edc6f6e8e7a";
//   var certID = "SBX-668815a4911f-7e34-4eff-9a9e-be3c";
//   var URL = "https://signin.sandbox.ebay.com/authorize";
//   var compHeader = "X-EBAY-API-COMPATABILITY-LEVEL";
//   var compValue = "967";
//   var devHeader = "X-EBAY-API-DEV-NAME";
//   var appHeader = "X-EBAY-API-APP-NAME";
//   var certHeader = "X-EBAY-API-CERT-NAME";
//   var callHeader = "X-EBAY-API-CALL-NAME";
//   var callValue = "GetSessionID";
//   var siteHeader = "X-EBAY-API-SITEID";
//   var siteValue = "0";
//   var contentHeader = "Content-Type";
//   var contentValue = "text/xml";
//   var RuName = "Stephen_Conway-StephenC-Jamies-xekdhsd";
//   var payLoad =
//     `
//       <?xml version="1.0" encoding="utf-8"?>
// <GetSessionIDRequest xmlns="urn:ebay:apis:eBLBaseComponents">
//   <RuName>"Stephen_Conway-StephenC-Jamies-xekdhsd"</RuName>
// </GetSessionIDRequest>
//   `;

//   xhr.onreadystatechange() = function() {
//     console.log("ReadyState is: " + readyState);
//     if (readyState == 4 && status == 200) {
//       document.getElementById("ebayList").innerText = responseXML;
//     }
//   };

//   xhr.open("POST", "https://signin.sandbox.ebay.com/authorize", true);

//   xhr.setRequestHeader(compHeader, compValue);
//   xhr.setRequestHeader(devHeader, devID);
//   xhr.setRequestHeader(appHeader, appID);
//   xhr.setRequestHeader(certHeader, certID);
//   xhr.setRequestHeader(callHeader, callValue);
//   xhr.setRequestHeader(siteHeader, siteValue);
//   xhr.setRequestHeader(contentHeader, contentValue);

//   xhr.send(payLoad);
//   //--------------------------------------xhr request------------------------------------------------------
//   console.log(xhr.status);
//   console.log("response from server:" + xhr.readyState);
//   console.log("response from server:" + xhr.statusText);
//   console.log("response from server:" + xhr.body);;
//   res.render('makeCall');

// }

//   PREVIOUS ATTEMPT #1
//   xhttp = new XMLHttpRequest();
//   appID: string = "StephenC-JamiesPi-SBX-7668815a4-8f5703d8";
//   devID: string = "be5b455e-1ba1-4e05-871c-9edc6f6e8e7a";
//   certID: string = "SBX-668815a4911f-7e34-4eff-9a9e-be3c";
//   URL = "https://signin.sandbox.ebay.com/authorize";
//   compHeader: "X-EBAY-API-COMPATABILITY-LEVEL";
//   compValue: "967";
//   devHeader = "X-EBAY-API-DEV-NAME";
//   appHeader = "X-EBAY-API-APP-NAME";
//   certHeader = "X-EBAY-API-CERT-NAME";
//   callHeader = "X-EBAY-API-CALL-NAME";
//   callValue = "GetSessionID";
//   siteHeader = "X-EBAY-API-SITEID";
//   siteValue = "0";
//   contentHeader = "Content-Type";
//   contentValue = "text/xml";
//   RuName = "Stephen_Conway-StephenC-Jamies-xekdhsd";
//   payLoad =
//     `
//       <?xml version="1.0" encoding="utf-8"?>
// <GetSessionIDRequest xmlns="urn:ebay:apis:eBLBaseComponents">
//   <RuName>Stephen_Conway-StephenC-Jamies-xekdhsd</RuName>
// </GetSessionIDRequest>
//   `;

//   this.xhttp.onreadystatechange = function() {
//     console.log("ReadyState is: " + this.readyState);

//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("ebayList").innerText = this.responseXML;
//     }
//   };

//   this.xhttp.open("POST", "https://signin.sandbox.ebay.com/authorize", true);

//   this.xhttp.setRequestHeader(this.compHeader, this.compValue);
//   this.xhttp.setRequestHeader(this.devHeader, this.devID);
//   this.xhttp.setRequestHeader(this.appHeader, this.appID);
//   this.xhttp.setRequestHeader(this.certHeader, this.certID);
//   this.xhttp.setRequestHeader(this.callHeader, this.callValue);
//   this.xhttp.setRequestHeader(this.siteHeader, this.siteValue);
//   this.xhttp.setRequestHeader(this.contentHeader, this.contentValue);

//   this.xhttp.send(this.payLoad);