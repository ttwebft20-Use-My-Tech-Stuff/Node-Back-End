require("dotenv").config();
const jwt = require("jsonwebtoken");
// eslint-disable-next-line no-undef
const jwtSecret = process.env.JWT_SECRET || "notallowed";

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            res.status(400).json({ 
            message: "Invalid token.", 
            error: err.message
            });
        } else {
            req.decodedJwt = decoded;
            next();
        }
        });
    } else {
        res.status(400).json("Token required.");
    }
};