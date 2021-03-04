const db = require("../../data/db-config.js");

module.exports = {
    find,
    findBy,
    add
};

function find() {
    return db("user")
    .orderBy("id");
}

function findBy(filter) {
    return db("user")
    .where(filter)
    .first();
}

async function add(user) {
    const [id] = await db("user")
        .insert(user, "id");
    return db("user")
        .where("id", id)
        .first();
}