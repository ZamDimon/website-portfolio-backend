const { body } = require('express-validator');
const { ACHIEVEMENT_RESOURCE_KEY } = require('../models/achievements')

const validations = [
    body('data').isArray({min: 1}).withMessage('data must be a non-empty array'),
    body('data.*.type').equals(ACHIEVEMENT_RESOURCE_KEY).withMessage('type must be precisely achievements'),
    body('data.*.attributes.name').isString().withMessage('name must be a string'),
    body('data.*.attributes.url').isString().withMessage('url must be in the corresponding format'),
    body('data.*.attributes.year').isInt().withMessage('year must be an integer'),
    body('data.*.attributes.subject').isString().withMessage('subject must be a string'),
    body('data.*.attributes.level').isInt({min: 0}).withMessage('level must be a non-negative integer'),
    body('data.*.attributes.place').isInt({min: 0}).withMessage('place must be a non-negative integer'),
    body('data.*.attributes.result').isString().withMessage('result must be a string'),
]

module.exports = validations