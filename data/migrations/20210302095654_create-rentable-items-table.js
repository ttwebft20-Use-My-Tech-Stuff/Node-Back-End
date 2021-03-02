
exports.up = function(knex) {
    return knex.schema.createTable("rentable-items", table => {
        table.increments();
        table.string("item_name", 128)
            .notNullable();
        table.string("category")
            .notNullable();
        table.string("description", 500)
            .notNullable();
        table.boolean("rentable")
            .notNullable();
        table.integer("price")
            .notNullable();
        table.string("owner_username")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("rentable-items");
};
