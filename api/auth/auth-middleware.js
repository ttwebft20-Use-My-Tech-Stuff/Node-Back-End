const jwt = require("jsonwebtoken");
// eslint-disable-next-line no-undef
const jwtSecret = process.env.JWT_SECRET;

require("dotenv").config();

module.exports = {
    isValidRegister,
    isValidLogin,
    makeToken
};

function isValidRegister(user) {
    return Boolean(
        user.username
        && user.first_name
        && user.last_name
        && user.email
        && user.password
        && user.role
    );
}

function isValidLogin(user) {
    return Boolean(
        user.username
        && user.password
    );
}

function makeToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username,
        role: user.role
    };
    const options = {
        expiresIn: "900s"
    };
    return jwt.sign(payload, jwtSecret, options);
}