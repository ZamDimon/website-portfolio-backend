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
    
    /**
     * Deletes an achievement from the database
     * @param {int} id of the achievement to be deleted
     */
    delete(id) {}

    /**
     * Inserts a list of achievements to the database
     * @param {list} List of achievements to be inserted
     * @returns {list} A list of inserted IDs
     */
    async insert(...achievements) {}

    // update(id, achievement) {}
}