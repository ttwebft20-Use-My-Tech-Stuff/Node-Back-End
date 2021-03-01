require("dotenv").config();

const server = require("./api/server.js");

const PORT = process.env.PORT || "development"

server.listen(PORT, () => {
    console.log(`\n***LISTENING TO PORT: ${PORT}***\n`);
});