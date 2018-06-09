// var express = require('express');
// var router = express.Router();

// // Load authService.js module
// const authService = require('../authService');


// //middleware for router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

// //clicking the Login button
// router.get('/makeCall', (req, res) => {
//   console.log('Beginning Call to GetSessionID')
//   authService.makeCall({}).then(url => {
//     console.log('Redirecting to: ' + url);
//     res.redirect(url);
//   });
// })


// module.exports = router