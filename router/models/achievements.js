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
        type: "achievement",
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
 * Function that converts a list of achievements to JSON:API-compatible format
 * @param {any} Achievements: a list of achievements retrieved from the database
 * @returns A list of achievements in JSON:API-compatible format
 */
function convertAchievementsToJSON(achievements) {
    return achievements.map((achievement) => {
        return convertAchievementToJSON(achievement);
    });
}

module.exports = {
    convertAchievementToJSON,
    convertAchievementsToJSON
};