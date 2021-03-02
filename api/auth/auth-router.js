const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();
const db = require("../../data/db-config.js");

const { isValidRegister } = require("./auth-middleware.js");

const Users = require("../users/users-model.js");


// POST - Register new user
router.post("/register", async (req, res, next) => {
    const credentials = req.body;

    if (isValidRegister(credentials)) {
        const rounds = 8;
        credentials.password = bcryptjs.hashSync(credentials.password, rounds);

        try {
            const { username } = credentials;
            const user = await Users.findBy({ username });

            if(!user) {
                try {
                    const data = await Users.add(credentials);
                    return res.status(200).json(data);
                } catch(error) {
                    next(error);
                }
            } else {
                res.status(400).json("Username already taken.");
            }
        } catch(error) {
            next(error);
        }
    } else {
        res.status(400).json("Username, first_name, last_name, email, password, and role are required.");
    }
});

// POST - Login user
router.post("/login", async (req, res, next) => {

});


module.exports = router;