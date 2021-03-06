const router = require("express").Router();

const TechItems = require("./tech-items-model.js");

const { validateItemId, validateItem, validateOwnerUsername } = require("./tech-items-middleware.js");

// GET - Get array of all tech items
router.get("/", async (req, res, next) => {
    try {
        const data = await TechItems.find();

        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// GET - Get tech item by ID
router.get("/:id", validateItemId, async (req, res, next) => {
    try {
        const data = await TechItems.findBy({ id: req.params.id });

        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// POST - Add a tech item
router.post("/", validateItem, validateOwnerUsername, async (req, res, next) => {
    try {
        const data = await TechItems.add(req.body);

        return res.status(201).json(data);
    } catch(error) {
        next(error);
    }
});

// PUT - Update a tech item by ID
router.put("/:id", validateItemId, validateItem, validateOwnerUsername, async (req, res, next) => {
    try {
        const data = await TechItems.update(req.body, req.params.id);

        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

// DELETE - Delete a tech item by ID
// eslint-disable-next-line no-unused-vars
router.delete("/:id", validateItemId, validateOwnerUsername, async (req, res, next) => {
    TechItems.remove(req.params.id);

    return res.status(200).json(`The tech item with ID: ${req.params.id} was removed.`);
});

module.exports = router;