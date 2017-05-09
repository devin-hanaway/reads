exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', (table) =>{
      table.increments(),
      table.string('first_name').notNull(),
      table.string('last_name').notNull(),
      table.string('bio', 2000).notNull(),
      table.string('auth_pic').notNull()
    })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author');
};
