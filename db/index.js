const { Pool } = require('pg');
const AchievementQuerier = require('./postgres/achievements.js');

module.exports = class DatabaseQuerier {
    constructor(databaseUrl) {
        const pool = new Pool({ connectionString: databaseUrl })
        this.achievementsQuerier = new AchievementQuerier(pool);
    }

    achievements() {
        return this.achievementsQuerier;
    }
}