const db = require("../../data/db-config.js");

module.exports = {
    find,
    add,
    findBy
};

function find() {
    return db("users")
    .orderBy("id");
};

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return db("users")
        .where({ id })
        .first();
};

function findBy(filter) {
    return db("users")
    .where(filter)
    .first();
};