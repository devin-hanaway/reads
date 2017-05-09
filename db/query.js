var pg = require("./knex")

function showBooks(books) {
  return pg('books')
}



module.exports = {
  showBooks
}
