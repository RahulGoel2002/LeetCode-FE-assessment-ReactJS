import { formatPhone, removeFormatting, checkAlienInput } from "../Utils";

test("Check A1: Check when no formatting required", () => {
  expect(formatPhone("123")).toBe("123");
  expect(formatPhone("")).toBe("");
});

test("Check A2: Check for length of string(l) ( 3 < l < 7)", () => {
  expect(formatPhone("1234")).toBe("(123) 4");
  expect(formatPhone("123456")).toBe("(123) 456");
});

test("Check A3: Check for (l > 6)", () => {
  expect(formatPhone("1234567")).toBe("(123) 456-7");
  expect(formatPhone("1234567890")).toBe("(123) 456-7890");
});

test("Check B1: Test checkAlienInput function", () => {
  expect(checkAlienInput("q")).toBe(false);
  expect(checkAlienInput("0")).toBe(true);
});

test("Check C1: Checking unformatted input", () => {
  expect(removeFormatting("12")).toBe("12");
  expect(removeFormatting("123")).toBe("123");
});

test("Check C2: Checking formatted input containing only parenthesis", () => {
  expect(removeFormatting("(123) 4")).toBe("1234");
  expect(removeFormatting("(123) 456")).toBe("123456");
});

test("Check C3: Checking complete formatted input", () => {
  expect(removeFormatting("(123) 456-7890")).toBe("1234567890");
});

test("Check C4: Checking for alien inputs", () => {
  expect(removeFormatting("(123) 4p7-890")).toBe("12347890");
});
