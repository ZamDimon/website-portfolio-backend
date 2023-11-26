require('dotenv').config();
const { createLogger, format, transports } = require('winston');

// Setting up a logger
const logger = createLogger({
    level: process.env.LOG_LEVEL,
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
      new transports.Console()
    ],
    format: format.combine(
        format.timestamp(),
        format.prettyPrint(),
        format.colorize({all: true}),
        format.align(),
        format.cli()
    )
});

// config.js
module.exports = {
    app: {
        port: process.env.API_PORT || 2401,
        env: process.env.NODE_ENV || 'development'
    },
    db: {
        connectionUrl: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
    },
    logger: logger
}