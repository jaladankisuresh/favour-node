var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes');

var app = express();
var httpServer = http.createServer(app);

// Sets up our view engine to load
app.set('views', '.');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./assets'));

app.use('/api', routes);

app.get('/', function (req, res) {
  res.render('./index.html');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  let errObj = {
    message: err.message,
    error: err
  };
  console.log(errObj);
  res.render('error', errObj);
});

httpServer.listen(3000, function() {
  console.log('server listening on port : 3000');
});
