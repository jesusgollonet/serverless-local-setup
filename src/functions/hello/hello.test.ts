import hello from "./hello";

describe("hello module", () => {
  test("should return a string", () => {
    expect(typeof hello("world")).toBe("string");
  });
  test("should return a string with the name", () => {
    expect(hello("world")).toBe("Hello world");
  });
});
