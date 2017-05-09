var pg = require("./knex")

function showBooks(books) {
  return pg('books')
}
function showAuthors(authors){
  return pg('author')
}



module.exports = {
  showBooks,
  showAuthors
}
