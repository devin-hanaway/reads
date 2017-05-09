var express = require('express');
var router = express.Router();
var query = require('../db/query')
const pg = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {

  query.showBooks(req.body)
  .then(books=>{
    // console.log(books);
    console.log(books);
    res.render('books', {books});
  })
});

module.exports = router;
