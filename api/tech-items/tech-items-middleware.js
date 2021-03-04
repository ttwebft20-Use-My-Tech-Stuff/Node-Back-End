const techItems = require("./tech-items-model.js");
const Users = require("../users/users-model.js");

module.exports = {
    validateItemId,
    validateItem,
    validateOwnerUsername
};

async function validateItemId(req, res, next) {
    const { id } = req.params;

    try {
        const validateIdMatch = await techItems.findBy({ id: id });

        if (validateIdMatch) {
            next();
        } else {
            // dev-prod Working!
            res.status(400).json({
                message: `The tech item with ID: ${id} could not be found.`
            });
        }
    } catch(error) {
        next(error);
    }
}

function validateItem(req, res, next) {
    const { item_name, category, description, price, owner_username } = req.body;

    if (item_name && category && description
        && price && owner_username) {
        next();
    } else {
        // dev-prod Working!
        res.status(400).json({
            message: "Missing: item_name, category, description, price, and owner_username."
        });
    }
}

async function validateOwnerUsername(req, res, next) {
    const { owner_username } = req.body;

    try {
        const owner = await Users.findBy({ username: owner_username });
        if(owner) {
            if (owner.role === "owner") {
                next();
            } else {
                // dev-prod Working!
                res.status(400).json("This user is not registered as an owner and cannot add a tech item. Please use an account registered as an owner.");
            }
        } else {
            res.status(400).json({
                // dev-prod Working!
                message: `Owner with username ${owner_username} could not be found.`
            });
        }
    } catch(error) {
        next(error);
    }
}