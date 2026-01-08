const { capitalizeWords, filterActiveUsers, logAction } = require('../index.js');

describe('capitalizeWords', () => {
    test('capitalizes all words correctly', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
        expect(capitalizeWords('javaScript lab')).toBe('JavaScript Lab');
        expect(capitalizeWords('')).toBe('');
    });

    test('handles non-string input gracefully', () => {
        expect(capitalizeWords(null)).toBe('');
        expect(capitalizeWords(undefined)).toBe('');
        expect(capitalizeWords(123)).toBe('');
    });
});

describe('filterActiveUsers', () => {
    test('filters only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([{ name: 'Alice', isActive: true }]);
    });

    test('returns empty array when all users are inactive', () => {
        const users = [
            { name: 'Charlie', isActive: false },
            { name: 'Dave', isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('handles empty array input', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });

    test('handles non-array input gracefully', () => {
        expect(filterActiveUsers(null)).toEqual([]);
        expect(filterActiveUsers(undefined)).toEqual([]);
    });
});

describe('logAction', () => {
    test('returns string containing action, username, and timestamp', () => {
        const result = logAction('login', 'Alice');
        expect(result).toMatch(/^User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
    });

    test('works with different actions and usernames', () => {
        const result = logAction('logout', 'Bob');
        expect(result).toMatch(/^User Bob performed logout at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
    });
});
