
exports.up = function (knex) {
    return knex.schema.createTable('movies', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('category').nullable();
      table.integer('rating').nullable();
      table.boolean('watched').defaultTo(false);
      table.timestamps(true, true); // created_at, updated_at
    });
};
  
exports.down = function (knex) {
    return knex.schema.dropTable('movies');
};