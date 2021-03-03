const router = require("express").Router();
const bcryptjs = require("bcryptjs");

const { isValidRegister, isValidLogin, makeToken } = require("./auth-middleware.js");

const Users = require("../users/users-model.js");


// POST - Register new user - WORKS!
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
                    //dev-prod Working!
                    const data = await Users.add(credentials);
                    return res.status(201).json(data);
                } catch(error) {
                    next(error);
                }
            } else {
                // dev-prod Working!
                res.status(400).json("Username already taken.");
            }
        } catch(error) {
            next(error);
        }
    } else {
        // dev-prod Working!
        res.status(400).json("Username, first_name, last_name, email, zipcode, password, and role are required.");
    }
});

// POST - Login user
router.post("/login", async (req, res, next) => {
    const credentials = req.body;

    if (isValidLogin(credentials)) {
        try {
            const { username, password } = credentials;
            const user = await Users.findBy({ username });

            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = makeToken(user);

                // dev working!
                return res.status(201).json({
                    message: `Welcome, ${username}`,
                    token,
                    user
                });
            } else {
                res.status(400).json("Invalid username or password.");
            }
        } catch(error) {
            next(error);
        }
    } else {
        res.status(400).json("Username and password required.");
    }
});


module.exports = router;