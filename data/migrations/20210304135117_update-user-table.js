
exports.up = function(knex) {
    return knex.schema.createTable("user", table => {
        table.increments("id");
        table.string("username", 256)
            .notNullable()
            .unique()
            .index();
        table.string("first_name", 255)
            .notNullable();
        table.string("last_name", 255)
            .notNullable();
        table.string("email", 320)
            .notNullable()
            .unique();
        table.string("zipcode", 5)
            .notNullable();
        table.string("password", 255)
            .notNullable();
        table.string("role", 6)
            .notNullable();
        table.timestamp("created_at")
            .defaultTo(knex.fn.now());
        table.timestamp("updated_at")
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user");
};
