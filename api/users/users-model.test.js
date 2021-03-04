const request = require("supertest");
const Users = require("./users-model.js");
const db = require("../../data/db-config.js");

const jennOwner = {
    username: "itsmejen",
    first_name: "Jennifer",
    last_name: "Kramer",
    email: "jen@jen.com",
    zipcode: "12345",
    password: "pass1234",
    role: "owner"
};

const jennRenter = {
    username: "itsmejen2",
    first_name: "Jennifer",
    last_name: "Kramer",
    email: "jen2@jen2.com",
    zipcode: "12345",
    password: "pass1234",
    role: "renter"
};

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async () => {
    await db("user").truncate();
});

afterAll(async () => {
    await db.destroy();
});

describe("Users-model.js testing", () => {
    // Add A New User (Owner and Renter)
    describe("Users.add Function", () => {
        it("Adds user to the db", async () => {
            let response;

            await Users.add(jennOwner);
            response = await db("user");
            expect(response).toHaveLength(1);

            await Users.add(jennRenter);
            response = await db("user");
            expect(response).toHaveLength(2);
        });
    });

    // Find All Users
    describe("Users.find Function", () => {
        beforeEach(async () => {
            await db("user").insert(jennOwner);
            await db("user").insert(jennRenter);
        });

        it("Returns array of users", async () => {
            let response = await Users.find();

            expect(response).toHaveLength(2);
            expect(response).toMatchObject([jennOwner, jennRenter]);
        });
    });

    describe("Users.findBy Function", () => {
        beforeEach(async () => {
            await db("user").insert(jennOwner);
            await db("user").insert(jennRenter);
        });

        it("Returns a single registered user with correct filter", async () => {
            let response;

            // Owner
            response = await Users.findBy({ id: 1 });
            expect(response).toMatchObject({ id: 1, ...jennOwner });
            response = await Users.findBy({ username: "itsmejen" });
            expect(response).toMatchObject({ id: 1, ...jennOwner });

            // Renter
            response = await Users.findBy({ id: 2 });
            expect(response).toMatchObject({ id: 2, ...jennRenter });
            response = await Users.findBy({ username: "itsmejen2" });
            expect(response).toMatchObject({ id: 2, ...jennRenter });
        });
    });
});

