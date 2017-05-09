
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) =>{
      table.increments(),
      table.string('title').notNull(),
      table.string('genre').notNull(),
      table.string('description', 2000).notNull(),
      table.string('book_pic').notNull()
    })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books');
};
