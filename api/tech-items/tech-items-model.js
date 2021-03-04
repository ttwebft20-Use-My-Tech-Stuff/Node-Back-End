const db = require("../../data/db-config.js");

module.exports = {
    find,
    findBy,
    add,
    update,
    remove
};

function find() {
    return db("tech_item")
        .orderBy("id");
}

function findBy(filter) {
    return db("tech_item")
        .where(filter)
        .first();
}

async function add(body) {
    const [id] = await db("tech_item")
        .insert(body, "id");
    return db("tech_item")
        .where("id", id)
        .first();
}

async function update(changes, id) {
    await db("tech_item")
        .where("id", id)
        .update(changes);
    return db("tech_item", id)
        .where("id", id)
        .first();
}

async function remove(id) {
    return db("tech_item")
        .where({ id: id })
        .del();
}