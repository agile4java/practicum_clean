// Dependencies

const express = require('express');

const exphbs = require('express-handlebars');

const http = require('http');

const https = require('https');

const url = require('url');

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Load authService.js module

const authService = require('./authService');



var port = 5007;

const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);



// Include Request package for http
var Request = require("request");

var path = require('path');
// Declare App
const app = express();

// Load routes
//-------------------commented out for now-------------------------------------
//const authServices = require('./routes/authServices');
//-------------------commented out for now-------------------------------------

app.use('/public', express.static(path.join(__dirname, 'public')));

// Use xml body-parser
app.use(bodyParser.xml());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});


// Use IF content-type of header from
// eBay isn't xml for xml body-parser
// app.use(bodyParser.xml({
//  type: <EBAY CONTENT TYPE IN HEADER>
//}));

// Handlebars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// index route
app.get('/', function(req, res, next) {
  res.render('index');
});

// user consent route
app.get('/consent', function(req, res, next) {
  res.render('userConsent');
});

app.get('/menu', function(req, res, next) {
  res.render('menu');
});

// Use routes
//-------------------commented out for now-------------------------------------
//app.use('/authServices', authServices);
//-------------------commented out for now-------------------------------------

app.get('/makeCall', (req, res) => {
  let URL = authService.makeCall();
  setTimeout(function() {
    res.redirect(URL)
  }, 2000);
});





app.listen(port, () => {
  console.log('Server started on port ' + port);
});
//---------------------------------------------------------------------------------------------------------
//--------------------------proxy server -------------------------------------------------------------------