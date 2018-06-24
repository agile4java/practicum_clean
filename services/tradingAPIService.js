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

  createCategoryList: function(xmlDoc) {

  }


} // end module.exports