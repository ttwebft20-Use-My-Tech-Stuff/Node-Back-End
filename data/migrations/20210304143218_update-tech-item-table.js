
exports.up = function(knex) {
    return knex.schema.createTable("tech_item", table => {
        table.increments("id");
        table.binary("img_url", 2000);
        table.string("item_name", 50)
            .notNullable();
        table.string("category")
            .notNullable();
        table.text("description")
            .notNullable();
        table.boolean("rented");
        table.integer("price")
            .notNullable();
        table.string("owner_username")
            .notNullable();
        table.timestamp('created_at')
            .defaultTo(knex.fn.now());
        table.timestamp('updated_at')
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tech_item");
};
