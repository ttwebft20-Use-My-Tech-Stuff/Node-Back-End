
exports.up = function(knex) {
    return knex.schema.createTable("users_tech_items", table => {
        table.increments("users_tech_items_id");
        table.integer("users_id")
            .notNullable()
            .unsigned()
            .references("users_id")
            .inTable("users")
            .onDelete("CASCADE");
        table.integer("tech_items_id")
            .notNullable()
            .unsigned()
            .references("tech_items_id")
            .inTable("tech_items")
            .onDelete("CASCADE");
        table.timestamp('created_at')
            .defaultTo(knex.fn.now());
        table.timestamp('updated_at')
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users_tech_items");
};
