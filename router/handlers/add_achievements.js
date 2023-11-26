const { convertAchievementToJSON } = require('../models/achievements')
const { internalError, notFoundError } = require('../models/errors')
const { logger } = require('../../config/appconfig')

function getAchievement(achievementsQuerier) {
    return async (request, response) => {
        const id = parseInt(request.params.id)

        achievementsQuerier.get(id).then((achievement) => {
            if (achievement == null) {
                response.status(404).json(notFoundError())
                logger.warn(`Achievement with id ${id} not found`)
                return
            }
            
            logger.debug(`Achievement with id ${id} was successfully found`)
            response.status(200).json(convertAchievementToJSON(achievement))
        }).catch(err => {
            response.status(500).json(internalError())
            logger.error(err)
            return
        })
    }
}

module.exports = getAchievement