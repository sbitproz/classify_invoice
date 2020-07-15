import { testSelector } from "./testHelper";
describe("testHelper", () => {
  it("should add data-testid to the selector detail", () => {
    const newid = "newid";
    expect(testSelector(newid)).toBe(`[data-testid="${newid}"]`);
  });
});
