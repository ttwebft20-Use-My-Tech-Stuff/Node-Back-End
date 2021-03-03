
exports.up = function(knex) {
    return knex.schema.createTable("tech_items", table => {
        table.increments("tech_items_id");
        table.string("item_name", 128)
            .notNullable();
        table.string("category")
            .notNullable();
        table.string("description", 500)
            .notNullable();
        table.boolean("rented");
        table.integer("price")
            .notNullable();
        table.string("owner_username")
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tech_items");
};
