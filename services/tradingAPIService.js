var authService = require('../services/authService');

module.exports = {

  getHighestCategories: function() {
    var data =
      `
      <?xml version=\"1.0\" encoding=\"utf-8\"?>
      \r\n<GetCategoriesRequest xmlns=\"urn:ebay:apis:eBLBaseComponents\">
      \r\n  <RequesterCredentials>\r\n    
      <eBayAuthToken>
      ` +
      res.locals.token +
      `
          </eBayAuthToken>\r\n  </RequesterCredentials > \r\ n < CategorySiteID >
          0 < /CategorySiteID>\r\n  <LevelLimit>1</LevelLimit > \r\ n <
          DetailLevel > ReturnAll < /DetailLevel>\r\n</GetCategoriesRequest >
          `;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseText);

      }
    });

    xhr.open("POST", "https://api.sandbox.ebay.com/ws/api.dll");
    xhr.setRequestHeader("X-EBAY-API-SITEID", "0");
    xhr.setRequestHeader("X-EBAY-API-COMPATIBILITY-LEVEL", "967");
    xhr.setRequestHeader("X-EBAY-API-CALL-NAME", "GetCategories");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token",
      "626083c6-6195-447b-9ea7-13ff736c5c21");

    xhr.send(data);
  }, // end getHighestCategories

  getHighestCategoriesRequest: function() {
    var request = require("request");
    var authToken = authService.getAuthToken();
    var options = {
      method: 'POST',
      url: 'https://api.sandbox.ebay.com/ws/api.dll',
      headers: {
        'Postman-Token': '2209bb9f-74a2-41cb-a861-89bb43dca448',
        'Cache-Control': 'no-cache',
        'X-EBAY-API-CALL-NAME': 'GetCategories',
        'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
        'X-EBAY-API-SITEID': '0'
      },
      body: `
      <?xml version=\"1.0\" encoding=\"utf-8\"?>
      \r\n<GetCategoriesRequest xmlns=\"urn:ebay:apis:eBLBaseComponents\">
      \r\n  <RequesterCredentials>\r\n    
      <eBayAuthToken>
      ` +
        authToken +
        `
          </eBayAuthToken>\r\n  </RequesterCredentials > \r\ n < CategorySiteID >
          0 < /CategorySiteID>\r\n  <LevelLimit>1</LevelLimit > \r\ n <
          DetailLevel > ReturnAll < /DetailLevel>\r\n</GetCategoriesRequest >
          `

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

  createCategoryList: function(xmlDoc) {

  }


} // end module.exports