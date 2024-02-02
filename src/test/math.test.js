const { sum } = require("./math");

test("두 인수가 덧셈이 되어야 한다.", () => {
  expect(sum(1, 2)).toBe(3);
});

// eslint-disable-next-line jest/no-identical-title
test("두 인수가 덧셈이 되어야 한다.", () => {
  expect(sum(2, 2)).toBe(3); // 에러
});
