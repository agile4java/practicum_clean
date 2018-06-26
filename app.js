// Dependencies

const express = require('express');

const exphbs = require('express-handlebars');


const http = require('http');

const https = require('https');

const url = require('url');

const fs = require('fs');

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Load authService.js module
const authServices = require('./routes/authServices');

// Load tradingAPIService services
const tradingAPIServices = require('./services/tradingAPIService');

// Load tradingAPIService routes
const tradingAPIRoutes = require('./routes/tradingAPIService');

var port = 5000;
var httpsPort = 443;

var options = {
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem')
};

// xml parser for ebay legacy APIs xml format
//const bodyParser = require('body-parser');
//require('body-parser-xml')(bodyParser);

// Include Request package for http
var Request = require("request");

var path = require('path');

// Declare App
const app = express();



app.use('/public', express.static(path.join(__dirname, 'public')));

// Use xml body-parser
//app.use(bodyParser.xml());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS');

  // Global Variables
  res.locals.sessionId = '';
  res.locals.token = '';
  res.locals.eBayOfficialTime = new Date();
  res.locals.categories = '';
  next();
});


// per Traversy video
app.set('views', path.join(__dirname, 'views'));

// Handlebars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



// ------------------------------- Routes -------------------------------------------------------------
// index route
app.get('/', function(req, res, next) {
  res.render('index');
});

// user consent route
app.get('/consent', function(req, res, next) {
  res.render('userConsent');
});

// menu - before logging in
app.get('/menu', function(req, res, next) {
  res.render('menu');
});

// Load authServices routes
app.use('/authServices', authServices);

// Load tradingAPIservices routes as tradingAPIroutes
app.use('/tradingAPI', tradingAPIRoutes);






//------------------------------------Servers------------------------------------------------------------

// start server
http.createServer(app).listen(port, () => {
  console.log(' ');
  console.log('Server started on port ' + port);
  console.log(' ');
});

// start https server
https.createServer(options, app).listen(httpsPort, () => {
  console.log('secure server started on port: ' + httpsPort)
  console.log(' ');
});