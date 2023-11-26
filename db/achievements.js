/**
 * @typedef {Object} Query object interface that manages interactions
 * with the achievements table
 */
module.exports = class IAchievementsQuerier {
    /**
     * Returns a single achievement from the database
     * @param {int} ID of the achievement 
     * @returns {Object?} Achievement entry if one exists
     */
    async get(id) {}
    /**
     * Returns a single achievement from the database
     * @param {int} ID of the achievement 
     * @returns {list} A list of achievements
     */
    async list() {}
    // insert(achievements) {}
    // update(id, achievement) {}
    // delete(id) {}
}