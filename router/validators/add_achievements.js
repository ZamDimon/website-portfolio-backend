const { body } = require('express-validator');

module.exports = body('data').notEmpty()