const { faker } = require("@faker-js/faker");
const { factory } = require("factory-girl");
const { Category, Device } = require("../../src/models");

factory.define("Category", Category, {
  name: faker.name.firstName(),
});

factory.define("Device", Device, {
  color: faker.color.human(),
  part_number: faker.random.numeric(5),
  id_category: 1,
});

module.exports = factory;
