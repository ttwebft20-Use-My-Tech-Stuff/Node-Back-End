const db = require("../../data/db-config.js");

module.exports = {
    find,
    findBy,
    add,
    update,
    remove
};

function find() {
    return db("rentable_items")
        .orderBy("rentable_items_id");
}

function findBy(filter) {
    return db("rentable_items")
        .where(filter)
        .first();
}

async function add(body) {
    const [id] = await db("rentable_items")
        .insert(body, "rentable_items_id");
    return db("rentable_items")
        .where("rentable_items_id", id)
        .first();
}

async function update(changes, id) {
    await db("rentable_items")
        .where("rentable_items_id", id)
        .update(changes);
    return db("rentable_items", id)
        .where("rentable_items_id", id)
        .first();
}

async function remove(id) {
    return db("rentable_items")
        .where({ rentable_items_id: id })
        .del();
}