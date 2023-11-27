const { convertAchievementsToData, ACHIEVEMENT_RESOURCE_KEY } = require('../models/achievements')
const { convertIDsToKeys } = require('../models/id')
const { internalError, badRequestError } = require('../models/errors')
const { logger } = require('../../config/appconfig')

function getAchievement(achievementsQuerier) {
    return async (request, response) => {
        // Retrieving achievements from request body and 
        // converting them to the database-compatible format
        const achievements = convertAchievementsToData(request.body.data)
        achievementsQuerier.insert(...achievements).then((ids) => {
            response.status(200).json(convertIDsToKeys(ids, ACHIEVEMENT_RESOURCE_KEY))
        }).catch(err => {
            response.status(500).json(internalError())
            logger.error(err)
            return
        })
    }
}

module.exports = getAchievement