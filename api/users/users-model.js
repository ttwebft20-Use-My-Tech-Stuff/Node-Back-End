const db = require("../../data/db-config.js");

module.exports = {
    find,
    findBy,
    add
};

function find() {
    return db("users")
    .orderBy("users_id");
}

function findBy(filter) {
    return db("users")
    .where(filter)
    .first();
}

async function add(user) {
    const [users_id] = await db("users").insert(user, "users_id");
    return db("users")
        .where({ users_id })
        .first();
}