const { capitalizeWords, filterActiveUsers, logAction } = require("../index");

describe("capitalizeWords", () => {
    test("capitalizes each word in a normal sentence", () => {
        expect(capitalizeWords("hello world")).toBe("Hello World");
    });

    test("returns an empty string when input is empty", () => {
        expect(capitalizeWords("")).toBe("");
    });

    test("handles strings with special characters", () => {
        expect(capitalizeWords("hello-world")).toBe("Hello-World");
    });

    test("capitalizes a single word", () => {
        expect(capitalizeWords("hello")).toBe("Hello");
    });
});

describe("filterActiveUsers", () => {
    test("filters active users from a mixed list", () => {
        const users = [
            { name: "Alice", isActive: true },
            { name: "Bob", isActive: false },
            { name: "Carol", isActive: true }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: "Alice", isActive: true },
            { name: "Carol", isActive: true }
        ]);
    });

    test("returns an empty array when all users are inactive", () => {
        const users = [
            { name: "Alice", isActive: false },
            { name: "Bob", isActive: false },
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test("returns an empty array for empty input", () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe("logAction", () => {
    test("generates correct log format", () => {
        const result = logAction("login", "Alice");
        expect(result).toMatch(/^User Alice performed login at .+/);
    });

    test("contains a valid ISO timestamp", () => {
        const result = logAction("logout", "Bob");
        const timestamp = result.split(" at ")[1];

        expect(() => new Date(timestamp).toISOString()).not.toThrow();
    });

    test("handles missing action input", () => {
        const result = logAction(undefined, "Alice");
        expect(result).toMatch(/^User Alice performed undefined at .+/);
    });

    test("handles missing username input", () => {
        const result = logAction("login", undefined);
        expect(result).toMatch(/^User undefined performed login at .+/);
    });

    test("handles empty string inputs", () => {
        const result = logAction("", "");
        expect(result).toMatch(/^User  performed  at .+/);
    });
});
