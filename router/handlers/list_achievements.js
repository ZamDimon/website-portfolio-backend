const { convertAchievementsToJSON } = require('../models/achievements')
const { internalError } = require('../models/errors')
const { logger } = require('../../config/appconfig')

/**
 * Function returning an async handler function that implements GET /achievements 
 * endpoint that lists all achievements
 * @param {any} Query object that implements the list method 
 * @returns async handler function that lists all achievements
 */
function listAchievements(achievementsQuerier) {
    return async (_, response) => {
        achievementsQuerier.list().then((rows) => {
            logger.debug(`Successfully found all the achievements`)
            
            response.status(200).json({
                "data": convertAchievementsToJSON(rows)
            })
        }).catch(err => {
            response.status(500).json(internalError())
            logger.error(err)
            return
        })
    }
}

module.exports = listAchievements