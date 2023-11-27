const { param } = require('express-validator');

module.exports = param('id').isInt({min: 1}).withMessage('id must be a positive integer')