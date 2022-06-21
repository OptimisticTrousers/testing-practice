/* eslint-disable no-undef */
const analyzeArray = require("./analyzeArray");

describe("analyzing array", () => {
  test("even array", () => {
    expect(analyzeArray([3, 4, 1, 2])).toEqual({
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    });
  });
  test("odd array", () => {
    expect(analyzeArray([12, 8, 4])).toEqual({
      average: 8,
      min: 4,
      max: 12,
      length: 3,
    });
  });
  test("non-integer average", () => {
    expect(analyzeArray([3, 4, 4])).toEqual({
      average: 3.66,
      min: 3,
      max: 4,
      length: 3,
    });
  });
  test("object array element", () => {
    expect(analyzeArray([{"name": "bob"}, 4, 4])).toEqual({
      average: 3.66,
      min: 4,
      max: 12,
      length: 3,
    });
  });
  test("string array element", () => {
    expect(analyzeArray(["4", 4, 4])).toEqual({
      average: 4,
      min: 4,
      max: 4,
      length: 3,
    });
  });
});
