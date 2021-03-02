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
        const data = await RentableItems.findBy({ rentable_items_id: req.params.id });

        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// POST - Add a rentable item
router.post("/", validateItem, validateOwnerUsername, async (req, res, next) => {
    try {
        const data = await RentableItems.add(req.body);

        return res.status(201).json(data);
    } catch(error) {
        next(error);
    }
});

// PUT - Update a rentable item by ID
router.put("/:id", validateItemId, validateItem, async (req, res, next) => {
    try {
        const data = await RentableItems.update(req.body, req.params.id);

        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});


// DELETE - Delete a rentable item by ID

module.exports = router;