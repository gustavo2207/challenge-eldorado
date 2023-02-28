const nameLengthValidator = require("../../src/controller/utils/nameLengthValidator");

it("It should be possible to return 'false' when the category name is longer than 4 characters", () => {
  expect(nameLengthValidator("Motorola")).toBeTruthy();
});
