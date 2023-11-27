const { param, body } = require('express-validator');
const { ACHIEVEMENT_RESOURCE_KEY } = require('../models/achievements')

const validations = [
    param('id').isInt({min: 1}).withMessage('id must be a positive integer'),
    body('data').notEmpty().withMessage('data must be a non-empty object'),
    body('data.type').equals(ACHIEVEMENT_RESOURCE_KEY).withMessage('type must be precisely achievements'),
    body('data.attributes.name').isString().withMessage('name must be a string'),
    body('data.attributes.url').isString().withMessage('url must be in the corresponding format'),
    body('data.attributes.year').isInt().withMessage('year must be an integer'),
    body('data.attributes.subject').isString().withMessage('subject must be a string'),
    body('data.attributes.level').isInt({min: 0}).withMessage('level must be a non-negative integer'),
    body('data.attributes.place').isInt({min: 0}).withMessage('place must be a non-negative integer'),
    body('data.attributes.result').isString().withMessage('result must be a string'),
]

module.exports = validations