const request = require("supertest");
const app = require("../../src/app");
const factory = require("../utils/factory");

const truncate = require("../utils/truncate.js");

beforeEach(async () => await truncate());

describe("Create Devices", () => {
  beforeEach(async () => await truncate());
  it("Should be possible to create a device associated with a category", async () => {
    console.clear();
    const category = await factory.create("Category");

    const response = await request(app)
      .post(`/category/${category.name}/device`)
      .send({
        color: "blue",
        part_number: "159487623",
      });

    console.log(
      `Should be possible to create a device associated with a category ${category.name}`
    );

    console.log(`${response.body.error}`);

    expect(response.statusCode).toBe(200);
  });

  it("Should not be possible to create an existing device", async () => {
    const { id, name } = await factory.create("Category");
    const { color, part_number } = await factory.create("Device", {
      id_category: id,
    });

    console.log(color, part_number, id);
    const response = await request(app).post(`/category/${name}/device`).send({
      color: color,
      part_number: part_number,
    });

    expect(response.statusCode).toBe(400);
  });
});

describe("Get Devices", () => {
  beforeEach(async () => await truncate());

  it("Should be possible to see the empty list", async () => {
    const response = await request(app).get("/category/device");
    expect(response.body.length).toBe(0);
  });

  it("Should be possible to see a list of devices", async () => {
    let { id } = await factory.create("Category");
    await factory.create("Device", {
      id_category: id,
    });
    const response = await request(app).get("/category/device");

    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("Delete Devices", () => {
  beforeEach(async () => await truncate());

  it("Should be possible to delete a device", async () => {
    const { id } = await factory.create("Category");
    const { part_number } = await factory.create("Device", {
      id_category: id,
    });

    const response = await request(app).delete(`/device/${part_number}`);

    expect(response.statusCode).toBe(200);
  });

  it("Should not be possible to delete a non-existing device ", async () => {
    const response = await request(app).delete(`/device/123123123`);

    expect(response.statusCode).toBe(400);
  });
});
