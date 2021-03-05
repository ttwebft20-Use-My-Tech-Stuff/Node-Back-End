const TechItems = require("./tech-items-model.js");
const db = require("../../data/db-config.js");

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
    await db("tech_item").truncate();
});

afterAll(async () => {
    await db.destroy();
});

describe("Tech-items-model.js testing", () => {
    // Add A New Tech Item
    describe("TechItems.add Function", () => {
        it("Adds tech item to the db", async () => {
            let response;

            await TechItems.add(item1);
            response = await db("tech_item");
            expect(response).toHaveLength(1);
            
            await TechItems.add(item2);
            response = await db("tech_item");
            expect(response).toHaveLength(2);
        });
        it("Returns to added class", async () => {
            const response = await TechItems.add(item1);
            expect(response).toMatchObject(item1);
        });
    });

    // Find All Tech Items
    describe("TechItems.find Function", () => {
        beforeEach(async () => {
            await db("tech_item").insert(item1);
            await db("tech_item").insert(item2);
        });

        it("Returns array of tech items", async () => {
            const response = await TechItems.find();

            expect(response).toHaveLength(2);
            expect(response).toMatchObject([item1, item2]);
        });
    });
    
    // Find Tech Item By ID
    describe("TechItems.findBy Function", () => {
        beforeEach(async () => {
            await db("tech_item").insert(item1);
            await db("tech_item").insert(item2);
        });

        it("Returns a single registered tech item with correct filter", async () => {
            let response;

            // Item One
            response = await TechItems.findBy({ id: 1 });
            expect(response).toMatchObject({ id: 1, ...item1 });
            response = await TechItems.findBy({ item_name: "Canon Camera"});
            expect(response).toMatchObject({ id: 1, ...item1 });

            // Item Two
            response = await TechItems.findBy({ id: 2 });
            expect(response).toMatchObject({ id: 2, ...item2 });
            response = await TechItems.findBy({ item_name: "Fog Machine" });
            expect(response).toMatchObject({ id: 2, ...item2 });
        });
    });

    // Update Tech Item By ID
    describe("TechItems.update Function", () => {
        beforeEach(async () => {
            await db("tech_item").insert(item1);
            await db("tech_item").insert(item2);
        });

        it("Updates single tech item", async () => {
            const id = 1;
            await TechItems.update({ ...item1, item_name: "Kodak Camera" }, id);
            const response = await db("tech_item").where("id", id).first();
            expect(response.item_name).toBe("Kodak Camera");
        });

        it("Resolves to updated tech items", async () => {
            const id = 1;
            await TechItems.update({ ...item1, item_name: "Kodak Camera" }, id);
            const response = await db("tech_item").where("id", id).first();
            expect(response).toMatchObject({ ...item1, item_name: "Kodak Camera"});
        });
    });

    // Remove Tech Item By ID
    describe("TechItems.remove Function", () => {
        beforeEach(async () => {
            await db("tech_item").insert(item1);
            await db("tech_item").insert(item2);
        });

        it("Removes tech item", async () => {
            const id = 1;
            await TechItems.remove(id);
            const response = await db("tech_item");
            expect(response).toHaveLength(1);
        });
    });
});