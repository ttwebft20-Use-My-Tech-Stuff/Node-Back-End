const router = require("express").Router();

const TechItems = require("./tech-items-model.js");

const { validateItemId, validateItem, validateOwnerUsername } = require("./tech-items-middleware.js");

// GET - Get array of all tech items - WORKING!
router.get("/", async (req, res, next) => {
    try {
        const data = await TechItems.find();

        // dev-prod Working!
        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// GET - Get tech item by ID - WORKING!
router.get("/:id", validateItemId, async (req, res, next) => {
    try {
        const data = await TechItems.findBy({ tech_items_id: req.params.id });

        // dev-prod Working!
        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// POST - Add a tech item - WORKING!
router.post("/", validateItem, validateOwnerUsername, async (req, res, next) => {
    try {
        const data = await TechItems.add(req.body);

        // dev-prod Working!
        return res.status(201).json(data);
    } catch(error) {
        next(error);
    }
});

// PUT - Update a tech item by ID
router.put("/:id", validateItemId, validateItem, validateOwnerUsername, async (req, res, next) => {
    try {
        const data = await TechItems.update(req.body, req.params.id);

        // dev Working!
        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// DELETE - Delete a tech item by ID
// eslint-disable-next-line no-unused-vars
router.delete("/:id", validateItemId, async (req, res, next) => {
    const itemId = req.params.id;

    TechItems.remove(itemId);

    // dev Working!
    return res.status(200).json(`The tech item with ID: ${itemId} was removed.`);
});

module.exports = router;