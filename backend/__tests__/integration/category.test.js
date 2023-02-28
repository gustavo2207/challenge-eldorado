const { faker } = require("@faker-js/faker");
const request = require("supertest");
const app = require("../../src/app");
const factory = require("../utils/factory");

const truncate = require("../utils/truncate.js");

beforeEach(async () => await truncate());

describe("Create Category", () => {
  beforeEach(async () => await truncate());

  it("Should be possible to create a category", async () => {
    const response = await request(app).post("/category").send({
      name: faker.name.firstName(),
    });
    console.log(response.body.error);
    expect(response.statusCode).toBe(200);
  });
  it("Should not be possible to create an existing category", async () => {
    const { name } = await factory.create("Category");

    const response = await request(app).post("/category").send({
      name: name,
    });
    expect(response.statusCode).toBe(400);
  });
  it("Should not be possible to create a category with a name shorter than 8 characters", async () => {
    const response = await request(app).post("/category").send({
      name: "a",
    });

    expect(response.statusCode).toBe(400);
  });
  it("Should not be possible to create a category with numbers", async () => {
    const response = await request(app).post("/category").send({
      name: "123123123123",
    });
    expect(response.statusCode).toBe(400);
  });
});

describe("Get Categories", () => {
  beforeEach(async () => await truncate());
  it("Should be possible to see the empty list", async () => {
    const response = await request(app).get("/category");
    expect(response.body.length).toBe(0);
  });
  it("Should be possible to see a list of categories", async () => {
    for (let i = 0; i <= 9; i++) {
      await factory.create("Category");
    }
    const response = await request(app).get("/category");

    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("Delete Categories", () => {
  beforeEach(async () => await truncate());

  it("Should be possible to delete a category", async () => {
    const category = await factory.create("Category");

    const response = await request(app).delete(`/category/${category.name}`);

    expect(response.statusCode).toBe(200);
  });

  it("It should not be possible to delete a non-existing category", async () => {
    const category = await factory.create("Category");

    const response = await request(app).delete(
      `/category/${category.name}wrong`
    );

    expect(response.statusCode).toBe(400);
  });
});
