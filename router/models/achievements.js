// Description: File that contains the functions that convert achievements to JSON:API-compatible format and vice versa

/**
 * Constant that contains the resource key for achievements
 */
const ACHIEVEMENT_RESOURCE_KEY = "achievement";

/**
 * Function that converts an achievement to JSON:API-compatible format
 * @param {any} Achievements: a list of achievements retrieved from the database
 * @returns A list of achievements in JSON:API-compatible format
 */
function convertAchievementToJSON(achievement) {
    const {
        id, name, url,
        year, subject, level,
        place, result
    } = achievement;

    return {
        id: id,
        type: ACHIEVEMENT_RESOURCE_KEY,
        attributes: {
            name: name,
            url: url,
            year: year,
            subject: subject,
            level: level,
            place: place,
            result: result
        }
    };
}

/**
 * Function that converts an achievement to database-compatible format
 * @param {any} Achievement: an achievement retrieved from the request
 * @returns Achievements in database-compatible format
 */
function convertAchievementToData(achievement) {
    // Attributes are already in database-compatible format
    return achievement.attributes;
}

/**
 * Function that converts a list of achievements to JSON:API-compatible format
 * @param {any} Achievements: a list of achievements retrieved from the database
 * @returns A list of achievements in JSON:API-compatible format
 */
function convertAchievementsToJSON(achievements) {
    return achievements.map((achievement) => {
        return convertAchievementToJSON(achievement);
    });
}

/**
 * Function that converts multiple achievements to database-compatible format
 * @param {any} Achievements: a list of achievements retrieved from the request
 * @returns A list of achievements in database-compatible format
 */
function convertAchievementsToData(achievement) {
    // Attributes are already in database-compatible format
    return achievement.map((achievement) => {
        return convertAchievementToData(achievement);
    });
}

module.exports = {
    ACHIEVEMENT_RESOURCE_KEY,
    convertAchievementToJSON,
    convertAchievementsToJSON,
    convertAchievementToData,
    convertAchievementsToData
};