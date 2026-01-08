// Capitalizes the first letter of each word in a string
function capitalizeWords(input) {
    if (typeof input !== 'string') return '';
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Filters an array of user objects, returning only active users
function filterActiveUsers(users) {
    if (!Array.isArray(users)) return [];
    return users.filter(user => user.isActive);
}

// Logs an action performed by a user with a timestamp
function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

// Export functions for Jest and autograder
module.exports = {
    capitalizeWords,
    filterActiveUsers,
    logAction,
};
