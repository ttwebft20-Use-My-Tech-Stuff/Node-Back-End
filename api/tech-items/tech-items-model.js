const db = require("../../data/db-config.js");

module.exports = {
    find,
    findBy,
    add,
    update,
    remove
};

function find() {
    return db("tech_items")
        .orderBy("tech_items_id");
}

function findBy(filter) {
    return db("tech_items")
        .where(filter)
        .first();
}

async function add(body) {
    const [id] = await db("tech_items")
        .insert(body, "tech_items_id");
    return db("tech_items")
        .where("tech_items_id", id)
        .first();
}

async function update(changes, id) {
    await db("tech_items")
        .where("tech_items_id", id)
        .update(changes);
    return db("tech_items", id)
        .where("tech_items_id", id)
        .first();
}

async function remove(id) {
    return db("tech_items")
        .where({ tech_items_id: id })
        .del();
}