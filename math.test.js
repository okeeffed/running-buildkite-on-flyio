const math = require("./math");

describe("math", () => {
  describe("addition", () => {
    it("should add the two parameters", () => {
      expect(math.add(1, 2)).toBe(3);
    });
  });

  describe("subtraction", () => {
    it("should subtract the second param from the first", () => {
      expect(math.subtract(3, 2)).toBe(1);
    });
  });
});
