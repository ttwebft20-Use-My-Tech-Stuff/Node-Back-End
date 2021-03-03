const router = require("express").Router();

const Users = require("./users-model.js");

// GET - Get all users (owners and renters)
router.get("/", async (req, res, next) => {
    try {
        // dev-prod Works!
        const data = await Users.find();
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

// GET - Get user by ID (owners and renters)
router.get("/:users_id", async (req, res, next) => {
    const { users_id } = req.params;

    try {
        const data = await Users.findBy({ users_id });

        if(data) {
            // Works!
        return res.status(200).json(data);
        } else {
            // Works!
        res.status(400).json({
            message: `The user with ID: ${users_id} could not be found`
        });
        }
    } catch(error) {
        next(error);
    }
});

module.exports = router;