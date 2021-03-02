const router = require("express").Router();

const RentableItems = require("./rentable-items-model.js");

const { validateItemId, validateItem, validateOwnerUsername } = require("./rentablte-items-middleware.js");

// GET - Get array of rentable items
router.get("/", async (req, res, next) => {
    try {
        const data = await RentableItems.find();
        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
});

module.exports = router;