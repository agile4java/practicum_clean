var authService = require('../services/authService');
const xml2js = require('xml2js')
const xmlReader = require('read-xml');
const category = require('../services/category');

module.exports = {

  getHighestCategoriesRequest: function() {
    var request = require("request");
    var authToken = authService.getAuthToken();
    var request = require("request");

    var options = {
      method: 'POST',
      url: 'https://api.sandbox.ebay.com/ws/api.dll',
      headers: {
        'Postman-Token': 'e8410ae4-361f-49e7-b1f5-90e0d1fd8f71',
        'Cache-Control': 'no-cache',
        'X-EBAY-API-CALL-NAME': 'GetCategories',
        'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
        'X-EBAY-API-SITEID': '0'
      },
      body: '<?xml version="1.0" encoding="utf-8"?>\r\n<GetCategoriesRequest xmlns="urn:ebay:apis:eBLBaseComponents">\r\n  <RequesterCredentials>\r\n    <eBayAuthToken>AgAAAA**AQAAAA**aAAAAA**kpsqWw**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4agDZKLpAmdj6x9nY+seQ**GJoEAA**AAMAAA**21RoPssx6KpGkT9Pidsr8s0A9r5I66RDrzTxhK+86JG6PS5tVsiHO8+5nGTxqZ+TlAabCKDnPENkMCUJ1cNK1GhTvXZUWbsA52CEEej+jBQb6PuPzTAcSKQ8jrLj6b2l1qWN567nQB8Utxdu28TlmbFbH0qINOXby3i3A+X3bst1EHWZARETPSS7rz1DeZZyQcUVL9EcmB01ED3VBlhITyQkdK+ZUisJUrc6Xd7BnfEUg9WyebH7miBoL3YEaDgJLi3V0BjxRj6a/wZGU68Km2srV90kAOfGNQx0pSBFjd0k2Js/MQT6lXdn2j0capRKhJ3wkrSHGofXWftkgwBWtPK0+Qv3HPVo6SpfJlvsbJv5t5ruoDRVv85+kTY57GSqQrC4ygrT3CC8OlivsXQjs+hIrzFomJufAuJgmKW0CZrHJ2DQI5XsuRYX6voplNB5CnlnbEHWPntD3pjfkjA4ECn2AMitrKhZg+88u5SflxV8hbRJrdQXrJekvKD4AKIb2gqm/Udoqyz5yCG0oExs0iRXyV1A3I0DQ57OiORrZvyqqyovJHAIgy2rLFnnJ5UjcOWuViMUtCnDzzT8qhoU0EflP9oRnuBIFzpN17MEXsDm8MNAsQoURSTLvomtIleCXjorLQKn8Wd68F1udKsssbLF/LLqZc9rOTikXdn/+YVeS4jLA6uUfEQxbT2bQfo5oSzW5CYHLhnUib630kD+9DxO4vmdx/HmAXaCaXcRVTR8ilWEXBbgYVVpDghhNDF6</eBayAuthToken>\r\n  </RequesterCredentials>\r\n  <CategorySiteID>0</CategorySiteID>\r\n  <LevelLimit>1</LevelLimit>\r\n  <DetailLevel>ReturnAll</DetailLevel>\r\n</GetCategoriesRequest> '
    };

    return new Promise(function(resolve, reject) {

      request(options, function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve((body));
        }
      })
    })

  }, // end getHighestCategoriesRequest

  readXMLbody: function(xmlData) {
    var ack = "";

    var categoryArray = [];
    var categoryNameArray = [];

    var xmlParsed = new Object();
    var parser = new xml2js.Parser();
    parser.parseString(xmlData, function(err, result) {
      xmlParsed = result;
      numOfCategories = (result.GetCategoriesResponse.CategoryArray[0].Category
        .length);
      //numOfCategories = ;
      for (i = 0; i < numOfCategories; i++) {
        categoryArray.push(result.GetCategoriesResponse.CategoryArray[0]
          .Category[i]);
        categoryNameArray.push(result.GetCategoriesResponse.CategoryArray[
            0]
          .Category[i].CategoryName[0]);
      }
      console.log(typeof(CategoryNameArray));
      return categoryArray;
    })
  }
} // end module.exports