
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("users_id");
        table.string("username", 15)
            .notNullable()
            .unique();
        table.string("first_name", 30)
            .notNullable();
        table.string("last_name", 40)
            .notNullable();
        table.string("email", 128)
            .notNullable()
            .unique();
        table.integer("zipcode", 5)
            .notNullable();
        table.string("password")
            .notNullable();
        table.string("role", 6)
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
