var express = require('express');
var router = express.Router();
var query = require('../db/query')
const pg = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
