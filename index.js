require("dotenv").config();

const server = require("./api/server.js");

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || "development";

server.listen(PORT, () => {
    console.log(`\n***LISTENING TO PORT: ${PORT}***\n`);
});