let authToken = 'unset';

module.exports = {

  setAuthToken: function(token) {
    authToken = token;
    console.log('Auth Token is set');
    console.log('');
  }, // end setAuthToken

  getAuthToken: function() {
    // if (authToken === 'unset') {
    //   console.log('Warning! Token not set!');
    //   return authToken;
    // } else {
    console.log('Auth token Returned');
    console.log('');

    //------------------------------test Code---------------------------------
    authToken =
      `
      AgAAAA**AQAAAA**aAAAAA**QecuWw**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4agDZKLpAmd
      j6x9nY+seQ**GJoEAA**AAMAAA**21RoPssx6KpGkT9Pidsr8s0A9r5I66RDrzTxhK+86JG6PS5t
      VsiHO8+5nGTxqZ+TlAabCKDnPENkMCUJ1cNK1GhTvXZUWbsA52CEEej+jBQb6PuPzTAcSKQ8jrLj
      6b2l1qWN567nQB8Utxdu28TlmbFbH0qINOXby3i3A+X3bst1EHWZARETPSS7rz1DeZZyQcUVL9Ec
      mB01ED3VBlhITyQkdK+ZUisJUrc6Xd7BnfEUg9WyebH7miBoL3YEaDgJLi3V0BjxRj6a/wZGU68Km
      2srV90kAOfGNQx0pSBFjd0k2Js/MQT6lXdn2j0capRKhJ3wkrSHGofXWftkgwBWtPK0+Qv3HPVo6S
      pfJlvsbJv5t5ruoDRVv85+kTY57GSqQrC4ygrT3CC8OlivsXQjs+hIrzFomJufAuJgmKW0CZrHJ2D
      QI5XsuRYX6voplNB5CnlnbEHWPntD3pjfkjA4ECn2AMitrKhZg+88u5SflxV8hbRJrdQXrJekvKD4
      AKIb2gqm/Udoqyz5yCG0oExs0iRXyV1A3I0DQ57OiORrZvyqqyovJHAIgy2rLFnnJ5UjcOWuViMUt
      CnDzzT8qhoU0EflP9oRnuBIFzpN17MEXsDm8MNAsQoURSTLvomtIleCXjorLQKn8Wd68F1udKsssb
      LF/LLqZc9rOTikXdn/+YVeS4jLA6uUfEQxbT2bQfo5oSzW5CYHLhnUib630kD+9DxO4vmdx/HmAXa
      CaXcRVTR8ilWEXBbgYVVpDghhNDF6
      `;
    //------------------------------test Code---------------------------------


    return authToken;
    //}
  } // end getAuthToken
};