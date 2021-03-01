const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();
const db = require("../../data/db-config.js");


// POST - Register new user
router.post("/register", async (req, res, next) => {
    const credentials = req.body;

    if (isValidRegister(credentials)) {
        const rounds = 10;
        credentials.password = bcryptjs.hashSync(credentials.password, rounds);

        try {
            const { username } = credentials;
            const user = await Users.findBy({ username })

            
        }
    }


});

// POST - Login user


module.exports = router;