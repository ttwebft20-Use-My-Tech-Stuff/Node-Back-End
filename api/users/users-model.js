const db = require("../../data/db-config.js");

module.exports = {
    find,
    findBy,
    add
};

function find() {
    return db("users")
    .orderBy("id");
}

function findBy(filter) {
    return db("users")
    .where(filter)
    .first();
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return db("users")
        .where({ id })
        .first();
}