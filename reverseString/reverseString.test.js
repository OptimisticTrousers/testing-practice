const reverseString = require('./reverseString')

/* eslint-disable no-undef */
describe("reverseString", () => {
    test('a regular string', () => {
        expect(reverseString('chicken')).toBe('nekcihc')
    });
    test('testing a palindrome', () => {
        expect(reverseString('racecar')).toBe('racecar')
    });
    test('number', () => {
        expect(reverseString(1231)).toBe('ERROR')
    });
    test('object', () => {
        expect(reverseString({
            "food": "bacon"
        })).toBe('ERROR')
    });
})