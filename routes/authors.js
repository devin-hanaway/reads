var express = require('express');
var router = express.Router();
var query = require('../db/query')
const pg = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {

  query.showAuthors(req.body)
  .then(authors=>{
    // console.log(books);
    console.log(authors);
    res.render('authors', {authors});
  })
});


module.exports = router;
