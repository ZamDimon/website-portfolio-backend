/** @module router */
/**
 * Express router providing user related routes
 */

// Creating an express app
const express = require('express')
const app = express()
const { logger } = require('../config/appconfig')

// Loading handlers
const bodyParser = require('body-parser')
const handlers = require('./handlers')
const validators = require('./validators')
const { query } = require('express-validator')

class Router {
    /**
     * Creates a router object to route the API
     * @param {Object} properties 
     */
    constructor(properties) {
        const {port, database} = properties
        this.port = port

        // Defining default middlewares
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use((_, response, next) => {
            // Addinng headers to allow CORS
            response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5503')
            response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
            response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            response.setHeader('Access-Control-Allow-Credentials', true)
                
            next()
        })
        app.get('/', (_, response) => {
            response.send('This is an API for my personal page backend server!')
        })
        app.route('/achievements')
            .get(handlers.achievements.list(database.achievements()))
            .post(...validators.achievements.add, handlers.achievements.add(database.achievements()))
            
        app.route('/achievements/:id')
            .get(validators.achievements.get, handlers.achievements.get(database.achievements()))
            .delete(validators.achievements.delete, handlers.achievements.delete(database.achievements()))
            .patch(validators.achievements.update, handlers.achievements.update(database.achievements()))    
    }
    
    /**
     * Runs the router on the specified port in constructor
     */
    run() {
        app.listen(this.port, () => {
            logger.info(`launched an API router on port ${this.port}`)
        })
    }
}

module.exports = Router