
exports.up = function(knex) {
    return knex.schema.createTable("rentable_items", table => {
        table.increments("rentable_items_id");
        table.string("item_name", 128)
            .notNullable();
        table.string("category")
            .notNullable();
        table.string("description", 500)
            .notNullable();
        table.boolean("rented")
            .notNullable();
        table.integer("price")
            .notNullable();
        table.string("owner_username")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("rentable_items");
};
