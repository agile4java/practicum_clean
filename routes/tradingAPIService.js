var express = require('express');

var router = express.Router();

const parseString = require('xml2js').parseString;

const xmlReader = require('read-xml');



// load tradingAPIService.js module from services folder
const tradingAPIServices = require('../services/tradingAPIService');

// Router middleware
router.use(function timeLog(req, res, next) {
  console.log('Routes/tradingAPIService, Time: ' + Date.now());
  console.log(' ');
  next();
});

router.get('/geteBayOfficialTime', (req, res) => {
  console.log('Router.get/geteBayOfficialTime');
  console.log(' ');
});

// call to get the highest level categories
router.get('/getHighCategories', (req, res) => {

    var highCategories;

    // set myPromise equal to call that returns a new promise
    var myPromise = tradingAPIServices.getHighestCategoriesRequest();
    // handle the promises resolve and reject parts
    myPromise.then(function(result) {
      console.log(result);
    });
    // console.log('Mypromise results: ');
    // console.log(highCategories);
    // console.log('');

    // res.render('loggedIn', {
    //   categories: highCategories
    // })
  },
  function(err) {
    console.log(err);
  });




// create event handler for getHighestCategories 
// call in tradingAPIService services
//var hiCatsEventHandler = function() {
// var categories = 'Test Category'
// res.render('/partials/_categories', {
//   categories: categories
// });
//  };
//})

module.exports = router;