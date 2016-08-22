const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const gulp = require('gulp');

// run tasks
require('./gulpfile.js');
gulp.start('build');

// view engine setup
app.use("/components", express.static(__dirname + '/bower_components'));
app.use("/img", express.static(__dirname + '/public/images'));

if (process.env.ENV === "dev") {
  app.use('/pages', express.static(__dirname + '/views/pages'));
  app.use('/js', express.static(__dirname + '/public/js'));
  app.set('views', path.join(__dirname, 'views'));
  app.use("/css", express.static(__dirname + '/public/stylesheets'));
} else {
  app.use('/pages', express.static(__dirname + '/views/dist/pages'));
  app.use('/js', express.static(__dirname + '/public/js/dist'));
  app.set('views', path.join(__dirname, 'views/dist'));
  app.use('/public', express.static(__dirname + '/dist/public'));
  app.use("/css", express.static(__dirname + '/dist/public/stylesheets'));
}


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
