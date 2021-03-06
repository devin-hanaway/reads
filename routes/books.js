var express = require('express');
var router = express.Router();
var query = require('../db/query')
const pg = require('../db/knex')

//router mounted at localhost:3000/books

/* GET users listing. */
  router.get('/', function(req, res, next) {
    query.bookAuthors()
    .then((bookAuthors) => {
      // console.log(bookAuthors);
    query.showBooks(req.body, bookAuthors)
    .then(books=>{
      // console.log(books);
      console.log("poop");
      console.log(books);
      res.render('books', {books});
    })
  })
});

router.get('/:id/:title', function(req, res){
  query.singleBook(req.params.id)
  .then(book =>{
    console.log(book[0]);
    console.log("poop");
    res.render('bookSingle',book[0] )
  })
})

router.get('/:id/:title/edit', function(req, res){
  query.singleBook(req.params.id)
  .then(book =>{
    console.log(book[0]);
    console.log("poop");
    res.render('bookEdit', book[0])
  })
})

router.post('/:id/:title/update', function(req, res){
  let id = req.params.id
  query.bookUpdate(req.body, req.params.id)
  .then(book =>{
    var title = book.title
    res.redirect('/books' +`/${id}/${title}`)
  })
})

router.get('/:id/:title/delete', function(req, res){
  let id = req.params.id
  query.deleteBook(id)
  .then(()=> {
    res.redirect('/books')
  })
})

router.get('/addBook', function (req, res){
  query.authors()
  .then(authors=>{
    console.log(authors);
    res.render('addBook', {authors})
  })
})

router.post('/newBook', function (req, res){
  var authorId = req.body
  console.log(authorId);
  console.log("learn some fucking code dude");
  query.newBook(req.body)
  .then(()=>{
    query.books()
    .then(books=>{
      // console.log(books);
      // console.log("kjdwbfkjwebf kqs;bejkwbcvjkeb");
      var lastObject = books.pop()
      // console.log(lastObject)
      query.addJoin(lastObject, authorId)
      .then(()=>{

        res.redirect('/books')
      })
    })
  })
})

module.exports = router;
