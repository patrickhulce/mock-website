var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();
app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(bodyParser.json({strict: false}));

var pages = require('./pages.json');

app.post('/_configure/pages', function (req, res) {
  pages = req.body;
  console.log('Setting pages', req.body);
  res.sendStatus(204);
});

app.use(function (req, res, next) {
  console.log('Recieved request for', req.path);
  var page = _.find(pages, {path: req.path});
  if (!page) { return next(); }
  res.render('page', page);
});

var port = process.env.PORT || 3101;
app.listen(port);
console.log('Listening on', port);
