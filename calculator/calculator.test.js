/* eslint-disable no-undef */
const calculator = require("./calculator");

describe("calculator", () => {
  test("adding two numbers", () => {
    expect(calculator.add(20, 20)).toBe(40);
  });
  test("adding object literal and a number", () => {
    expect(calculator.add({"name": "bob"}, 20)).toBe(40);
  });
  test("adding non-string/number values", () => {
    expect(calculator.add({"name": "bob"}, 20)).toBe(40);
  });
  test("adding one string and one number", () => {
    expect(calculator.add("5", 6)).toBe(11);
  });
  test("subtracting two numbers", () => {
    expect(calculator.subtract(85, 20)).toBe(65);
  });
  test("subtracting one string and one number", () => {
    expect(calculator.add("2", 3)).toBe(-1);
  });
  test("multiply two numbers", () => {
    expect(calculator.subtract(12, 12)).toBe(144);
  });
  test("multiply one string and one number ", () => {
    expect(calculator.subtract("3", 7)).toBe(21);
  });
  test("divide two numbers", () => {
    expect(calculator.subtract(9, 3)).toBe(3);
  });
  test("divide one string and one number", () => {
    expect(calculator.subtract("9", 3)).toBe(3);
  });
});
