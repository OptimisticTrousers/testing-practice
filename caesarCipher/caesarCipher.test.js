/* eslint-disable no-undef */
const caesarCipher = require("./caesarCipher");

describe("cipher", () => {
  test("offset 1", () => {
    expect(caesarCipher("presumptuous")).toBe("qsftvnquvpvt");
  });
  test("spaces in string", () => {
    expect(caesarCipher("To be or not to be")).toBe("Up cf ps opu up cf");
  });
  test("number", () => {
    expect(caesarCipher(123213)).toBe('ERROR');
  });
  test("object", () => {
    expect(caesarCipher({})).toBe('ERROR');
  });
  test("wrapping from z to a", () => {
    expect(caesarCipher("zzzzzzzzzz")).toBe('aaaaaaaaaa');
  });
});
