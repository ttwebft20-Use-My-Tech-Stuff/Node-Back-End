const router = require("express").Router();

const RentableItems = require("./rentable-items-model.js");

const { validateItemId, validateItem, validateOwnerUsername } = require("./rentable-items-middleware.js");

// GET - Get array of all rentable items
router.get("/", async (req, res, next) => {
    try {
        const data = await RentableItems.find();
        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// GET - Get rentable item by ID
router.get("/:id", validateItemId, async (req, res, next) => {
    try {
        const data = await RentableItems.findBy({ rentable_item_id: req.params.id });

        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// POST - Add a rentable item

// PUT - Update a rentable item by ID

// DELETE - Delete a rentable item by ID

module.exports = router;