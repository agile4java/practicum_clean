// Sample: Basic Call

// Returns a SessionID needed
// for fetching a token
// for a user.

//  Description

//  In this call, the authentication values
//  for App ID, Dev ID, and Cert ID are supplied in the X - EBAY - API - APP -
//    NAME, X - EBAY - API - DEV - NAME, and X - EBAY - API - CERT - NAME HTTP headers,
//    respectively.The response contains the SessionID value, which you can use in
//    the FetchToken call to get a user authentication token.

//  Input

//  XML format.
// XML format.

//   <? xml version = "1.0"encoding = "utf-8" ?>
//   <GetSessionIDRequest xmlns = "urn:ebay:apis:eBLBaseComponents" >
//     <RuName> MyRuNameHere </RuName> 
//   </GetSessionIDRequest>
//  see httpXMLsamples for sessionID call



// encoded URL to send sandy to the ebay sandbox sign in page
//https://signin.sandbox.ebay.com/ws/eBayISAPI.dll?SignIn&RuName=YourRUnameHere&SessID=YourSessionIDHere
// Initial user request - needs to send a GetSessionID Call to eBay