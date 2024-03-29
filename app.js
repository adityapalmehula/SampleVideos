var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var menuRouter = require('./routes/menus');
var contentRouter = require('./routes/contents');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// to get menus -
app.use('/menus', menuRouter);
// to get mainContent -
app.use('/content', contentRouter);

router.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Content-Type",'application/json');
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Content-Type",'application/json');
	res.header("Access-Control-Allow-Origin", "*");
	 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Credentials', true);

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(createError(404));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
