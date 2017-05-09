var express = require('express');
var router = express.Router();
var query = require('../db/query')
const pg = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
