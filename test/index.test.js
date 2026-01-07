
const {
  capitalizeWords,
  filterActiveUsers,
  logAction,
} = require("../index");

describe("capitalizeWords", () => {
  test("capitalizes each word in a string", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("handles extra spaces", () => {
    expect(capitalizeWords("  hello   world ")).toBe("Hello World");
  });

  test("returns empty string for non-string input", () => {
    expect(capitalizeWords(null)).toBe("");
    expect(capitalizeWords(123)).toBe("");
  });

  test("returns empty string for empty input", () => {
    expect(capitalizeWords("")).toBe("");
  });
});

describe("filterActiveUsers", () => {
  test("filters only active users", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
    ];

    expect(filterActiveUsers(users)).toEqual([
      { name: "Alice", isActive: true },
    ]);
  });

  test("returns empty array if no active users", () => {
    const users = [{ name: "Bob", isActive: false }];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  test("returns empty array for invalid input", () => {
    expect(filterActiveUsers(null)).toEqual([]);
  });
});

describe("logAction", () => {
  test("logs a valid action with username", () => {
    const result = logAction("login", "Alice");
    expect(result).toContain("User Alice performed login");
  });

  test("returns error message for missing action", () => {
    expect(logAction("", "Alice")).toBe("Invalid action or username");
  });

  test("returns error message for missing username", () => {
    expect(logAction("login", "")).toBe("Invalid action or username");
  });

  test("returns error message for missing inputs", () => {
    expect(logAction()).toBe("Invalid action or username");
  });
});
