const { query } = require('express-validator');

module.exports = query('id').isInt({min: 1}).withMessage('id must be a positive integer')