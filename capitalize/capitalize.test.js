/* eslint-disable no-undef */
const capitalize = require("./capitalize");

describe("capitalize", () => {
  test("works with a non-capitalized string", () => {
    expect(capitalize("enigma")).toBe("Enigma");
  });
  test("works with an already capitalized string", () => {
    expect(capitalize("Enigma")).toBe("Enigma");
  });
  test("fails with a number", () => {
    expect(capitalize(1320)).toBe("ERROR");
  });
  test("fails with an object", () => {
    expect(
      capitalize({
        age: 18,
      })
    ).toBe("ERROR");
  });
});
