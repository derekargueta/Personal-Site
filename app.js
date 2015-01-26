var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app = express();

// view engine setup
app.use("/components", express.static(__dirname + '/bower_components'));
app.use("/css", express.static(__dirname + '/public/stylesheets'));
app.use("/bootstrap", express.static(__dirname + '/public/stylesheets/bootstrap'));
app.use("/img", express.static(__dirname + '/public/images'));

if(process.env.ENV == "dev") {
    app.use('/pages', express.static(__dirname + '/views/pages'));
    app.use("/js", express.static(__dirname + '/public/js'));
    app.set('views', path.join(__dirname, 'views'));
} else {
    app.use('/pages', express.static(__dirname + '/views/dist/pages'));
    app.use("/js", express.static(__dirname + '/public/js/dist'));
    app.set('views', path.join(__dirname, 'views/dist'));
}


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;