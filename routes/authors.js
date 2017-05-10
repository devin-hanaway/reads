var express = require('express');
var router = express.Router();
var query = require('../db/query')
const pg = require('../db/knex')

//router mounted at localhost:3000/authors

/* GET users listing. */
router.get('/', function(req, res, next) {

  query.showAuthors(req.body)
  .then(authors=>{
    // console.log(books);
    console.log(authors);
    console.log("poop scoop");
    res.render('authors', {authors});
  })
});

router.get('/:id/:first_name', function(req, res){
  query.singleAuthor(req.params.id)
  .then(author =>{
    res.render('authorSingle',author[0] )
  })
})
router.get('/:id/:first_name/edit', function(req, res){
  query.singleAuthor(req.params.id)
  .then(author =>{
    res.render('authorEdit',author[0] )
  })
})

router.post('/:id/:first_name/update', function(req, res){
  let id = req.params.id
  query.authorUpdate(req.body, req.params.id)
  .then(author =>{
    var name = author.first_name
    res.redirect('/authors' +`/${id}/${name}`)
  })
})

router.get('/:id/:first_name/delete', function(req, res){
  let id = req.params.id
  query.deleteAuthor(id)
  .then(()=> {
    res.redirect('/author')
  })
})

router.get('/addAuthor', function (req, res){
  res.render('addAuthor')
})

router.post('/newAuthor', function (req, res){
  query.newAuthor(req.body)
  .then(()=>{
    res.redirect('/authors')
  })
})



module.exports = router;
