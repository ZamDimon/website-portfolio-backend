const { validationResult } = require('express-validator');

const { convertAchievementToData } = require('../models/achievements')
const { internalError, notFoundError, badRequestError } = require('../models/errors')
const { logger } = require('../../config/appconfig')

function updateAchievement(achievementsQuerier) {
    return async (request, response) => {
        logger.debug(`Updating an achievement`)
        const validate = validationResult(request)
        if (!validate.isEmpty()) {
            response.status(400).json(badRequestError(validate.array()))
            logger.warn('Bad request when getting an achievement')
            return
        }

        const id = parseInt(request.params.id)

        // Checking if the achievement exists
        const found = await achievementsQuerier.get(id).then((achievement) => { return achievement != null })
        if (!found) {
            response.status(404).json(notFoundError())
            logger.warn(`Achievement with id ${id} was not found and thus cannot be deleted`)
            return
        }

        // Converting achievements to the database-compatible format
        const dataAchievement = convertAchievementToData(request.body.data)

        // Updating the achievement
        achievementsQuerier.update(id, dataAchievement).then(() => {
            response.status(204).send()
            logger.warn(`Achievement with id ${id} was successfully updated`)
            return
        }).catch(err => {
            response.status(500).json(internalError())
            logger.error(err)
            return
        })
    }
}

module.exports = updateAchievement