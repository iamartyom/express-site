var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi' });
});

router.get('/content', function(req, res, next) {
  res.render('content');
});

router.get('/about/', function(req, res, next) {
  res.render('about');
});

module.exports = router;
