var pg = require("./knex")

function showBooks(books, bookAuthors) {
  console.log(bookAuthors);
  console.log("poop scoop");
  return pg('books')
  // .fullOuterJoin('books')
}

function bookAuthors(data){
  return pg('book_author')
  
}

function showAuthors(authors){
  return pg('author')
}

function singleAuthor(id){
  return pg('author').where('id', id)
}

function singleBook(id){
  return pg('books').where('id', id)
}

function authorUpdate(body, id){
  return pg('author').where('id', id).update({
    'first_name': body.first_name,
    'last_name': body.last_name,
    'bio': body.bio
  })
}

function bookUpdate(body, id){
  return pg('books').where('id', id).update({
    'title': body.title,
    'genre': body.genre,
    'description': body.description
    // 'author': body.author,
  })
}

function deleteBook(id){
  return pg('books').where('id', id).del()
}

function deleteAuthor(id){
  return pg('author').where('id', id).del()
}

function newBook(body){
  return pg('books').insert({
    'book_pic': body.book_pic,
    'title': body.title,
    'genre': body.genre,
    'description': body.description
    // 'author': body.author,
  })
}

function newAuthor(body){
  return pg('author').insert({
    'auth_pic': body.auth_pic,
    'first_name': body.first_name,
    'last_name': body.last_name,
    'bio': body.bio
  })
}


module.exports = {
  showBooks,
  showAuthors,
  bookAuthors,
  singleAuthor,
  singleBook,
  authorUpdate,
  bookUpdate,
  deleteBook,
  deleteAuthor,
  newBook,
  newAuthor
}
