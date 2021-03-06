const request = require("supertest");
const db = require("../data/db-config.js");
const server = require("./server.js");

let jennOwner = {
    username: "itsmejen",
    first_name: "Jennifer",
    last_name: "Kramer",
    email: "jen@jen.com",
    zipcode: "12345",
    password: "pass1234",
    role: "owner"
};

let jennRenter = {
    username: "itsmejen2",
    first_name: "Jennifer",
    last_name: "Kramer",
    email: "jen2@jen2.com",
    zipcode: "12345",
    password: "pass1234",
    role: "renter"
};

let token;

const item1 = {
    item_name: "Canon Camera",
    category: "camera",
    description: "It's just a camera.",
    price: 40,
    owner_username: "itsmejen"
};

const item2 = {
    item_name: "Fog Machine",
    category: "party-equipment",
    description: "It's just a fog machine.",
    price: 22,
    owner_username: "itsmejen"
};

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async () => {
    await db("user").truncate();
    await db("tech_item").truncate();
});

afterAll(async () => {
    await db.destroy();
});

describe("Server Testing", () => {
    it("Is the testing environment", () => {
        expect(process.env.NODE_ENV).toBe("testing");
    });

    it("Responds with 200 status and api: Up and running!", async () => {
        const response = await request(server).get("/");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ api: "Up and running!" });
    });

    describe("Auth Router testing", () => {
        
        // Add A New User
        describe("[POST] /api/auth/register", () => {
            it("Returns a new user", async () => {
                let response;

                // Owner
                response = await request(server)
                    .post("/api/auth/register").send(jennOwner);
                expect(response.body)
                    .toMatchObject({ id: 1, role: jennOwner.role });
                expect(jennOwner.role).toEqual("owner");

                // Renter
                response = await request(server)
                    .post("/api/auth/register").send(jennRenter);
                expect(response.body)
                    .toMatchObject({ id: 2, role: jennRenter.role });
                expect(jennRenter.role).toEqual("renter");
            });
        });

        // Registered User Able To Login
        describe("[POST] /api/auth/login", () => {
            beforeEach(async () => {
                await request(server)
                    .post("/api/auth/register").send(jennOwner);
                await request(server)
                    .post("/api/auth/register").send(jennRenter);
            });

            it("Returns with token and user data as an owner", async () => {
                let response;

                response = await request(server)
                    .post("/api/auth/login").send({
                        username: jennOwner.username,
                        password: jennOwner.password
                    });
                token = response.body.token;

                expect(response.body).toMatchObject({ token });
                expect(response.body.user).toMatchObject({
                    username: jennOwner.username
                });
                expect(response.body.user.role).toEqual("owner");
            });

            it("Returns with token and user data as an renter", async () => {
                let response;

                response = await request(server)
                    .post("/api/auth/login").send({
                        username: jennRenter.username,
                        password: jennRenter.password
                    });
                token = response.body.token;

                expect(response.body).toMatchObject({ token });
                expect(response.body.user).toMatchObject({
                    username: jennRenter.username
                });
                expect(response.body.user.role).toEqual("renter");
            });
        });

        describe("Authorization", () => {
            beforeEach(async () => {
                await request(server)
                    .post("/api/auth/register").send(jennOwner);
                await request(server)
                    .post("/api/auth/register").send(jennRenter);
            });

            // Testing Users-router.js
            describe("Users router", () => {
                // GET All Users
                describe("[GET] /api/users", () => {
                    it("Returns a list of registered users", async () => {
                        const response = await request(server)
                            .get("/api/users").set("Authorization", token);

                        expect(response.body).toHaveLength(2);
                    });
                });

                // Get User By ID
                describe("[GET] /api/users/:id", () => {
                    it("Returns a single user by correct ID", async () => {
                        let response;

                        response = await request(server)
                            .get("/api/users/1").set("Authorization", token);
                        expect(response.body).toMatchObject({
                            username: jennOwner.username
                        });
                    });
                });
            });

            // Testing Tech-items-router.js
            describe("Tech-items router", () => {

                // Add New Tech Item
                describe("[POST] /api/tech_items", () => {
                    it("Adds a new tech item to the db", async () => {
                        let response;

                        response = await request(server)
                            .post("/api/tech_items")
                            .set("Authorization", token)
                            .send(item1);
                        expect(response.body).toMatchObject(item1);

                        response = await request(server)
                            .post("/api/tech_items")
                            .set("Authorization", token)
                            .send(item2);
                        expect(response.body).toMatchObject(item2);
                    });
                });

                describe("Auth tech items", () => {
                    beforeEach(async () => {
                        await request(server)
                            .post("/api/tech_items")
                            .set("Authorization", token)
                            .send(item1);
                        await request(server)
                            .post("/api/tech_items")
                            .set("Authorization", token)
                            .send(item2);
                    });

                    // Get Tech Item By ID
                    describe("[GET] /api/tech_items/:id", () => {
                        it("Returns a single tech item by correct ID", async () => {
                            let response;

                            response = await request(server)
                                .get("/api/tech_items/1")
                                .set("Authorization", token);
                            expect(response.body).toMatchObject(item1);

                            response = await request(server)
                                .get("/api/tech_items/2")
                                .set("Authorization", token);
                            expect(response.body).toMatchObject(item2);
                        });
                    });

                    // Update Tech Item By ID
                    describe("[PUT] /api/tech_items/:id", () => {
                        it("Updates tech item by correct ID", async () => {
                            let response;

                            response = await request(server)
                                .put("/api/tech_items/1")
                                .set("Authorization", token)
                                .send({...item1, item_name: "Kodak Camera"});
                            expect(response.body).toMatchObject({ item_name: "Kodak Camera" });
                        });
                    });

                    // Delete A Tech Item By ID
                    describe("[DELETE] /api/tech_items/:id", () => {
                        it("Responds with removal message", async () => {
                            let response = await request(server)
                                .delete("/api/tech_items/1")
                                .set("Authorization", token);
                            expect(response.body).toBe("The tech item with ID: 1 was removed.");
                        });
                    });
                });
            });
        });
    });
});