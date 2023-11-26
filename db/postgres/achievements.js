const pglib = require('pg')
const Pool = pglib.Pool

const IAchievementsQuerier = require('../achievements.js')

module.exports = class AchievementsQuerier extends IAchievementsQuerier {
    /**
     * Creates a querier object to query the database
     * @param {Pool} Connection string to the database 
     */
    constructor(pool) {
        super();
        this.pool = pool
    }

    /**
     * Executes a query to the database using internal this.pool
     * @param {string} query to be executed 
     * @param {list} params 
     * @returns Result of the query
     */
    query(query, params) {
        return this.pool.query(query, params)
    }

    async list() {
        const result = await this.query('select * from achievements')
        return result.rows
    }

    async get(id) {
        const result = await this.query('select * from achievements where id = $1', [id])
        return result.rows.length == 0 ? null : result.rows[0]
    }
}