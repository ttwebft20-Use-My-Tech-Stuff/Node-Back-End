
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("users_id");
        table.string("username", 15)
            .notNullable()
            .unique()
            .index();
        table.string("first_name", 30)
            .notNullable();
        table.string("last_name", 40)
            .notNullable();
        table.string("email", 255)
            .notNullable()
            .unique();
        table.string("zipcode", 5)
            .notNullable();
        table.string("password", 255)
            .notNullable();
        table.string("role", 6)
            .notNullable();
        table.timestamp('created_at')
            .defaultTo(knex.fn.now());
        table.timestamp('updated_at')
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
