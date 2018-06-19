var express = require('express');
var router = express.Router();
// load eBayService.js module from services folder
const eBayService = require('../services/eBayService');

// Router middleware
router.use(function timeLog(req, res, next) {
  console.log('Routes/eBayService, Time: ' + Date.now());
  console.log(' ');
  next();
});

router.get('/geteBayOfficialTime', (req, res) => {
  console.log('Router.get/geteBayOfficialTime');
  console.log(' ');
});