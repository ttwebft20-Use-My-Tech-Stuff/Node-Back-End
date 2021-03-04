const request = require("supertest");
const Users = require("./users-model.js");
const db = require("../../data/db-config.js");

const jennOwner = {
    username: "itsmejen",
    first_name: "Jennifer",
    last_name: "Kramer",
    email: "jen@jen.com",
    zipcode: 12345,
    password: "pass1234",
    role: "owner"
};

const jennRenter = {
    username: "itsmejen2",
    first_name: "Jennifer",
    last_name: "Kramer",
    email: "jen2@jen2.com",
    zipcode: 12345,
    password: "pass1234",
    role: "renter"
};

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async () => {
    await db.raw('TRUNCATE user, tech_item RESTART IDENTITY CASCADE');
});

afterAll(async () => {
    await db.destroy();
});
