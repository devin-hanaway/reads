var pg = require("./knex")

function showBooks(books, bookAuthors) {
  return pg('books')
  .join('book_author', 'books.id', 'book_author.book_id')
  .join('author', 'author.id', 'book_author.author_id')
  .select('title','genre','description','book_pic','first_name', 'last_name', 'book_id', 'author_id')
}

function bookAuthors(data){
  return pg('book_author')

}
function authors(authors){
  return pg('author')
}


function showAuthors(authors){
  return pg('author')
  .join('book_author', 'author.id', 'book_author.author_id')
  .join('books', 'books.id', 'book_author.book_id')
  .select('auth_pic','title','first_name', 'last_name', 'book_id','bio', 'author_id')
}

function singleAuthor(id){
  return pg('author').where('author_id', id)
  .join('book_author', 'author.id', 'book_author.author_id')
  .join('books', 'books.id', 'book_author.book_id')
  .select('auth_pic','title','first_name', 'last_name', 'book_id','bio', 'author_id')
}

function singleBook(id){
  return pg('books').where('book_id', id)
  .join('book_author', 'books.id', 'book_author.book_id')
  .join('author', 'author.id', 'book_author.author_id')
  .select('title','genre','description','book_pic','first_name', 'last_name', 'book_id', 'author_id')
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

function books(books){
  return pg('books')
}

function addJoin(lastObject, authorId){
  console.log(authorId.author);
  console.log("poopy pants kjdfnejknf");
  return pg('book_author').insert({
    'book_id': lastObject.id,
    'author_id': authorId.author
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
  newAuthor,
  authors,
  books,
  addJoin
}
