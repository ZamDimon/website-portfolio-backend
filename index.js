const cfg = require('./config/appconfig')
const Router = require('./router')
const DatabaseQuerier = require('./db')

// Creating a database client
const database = new DatabaseQuerier(cfg.db.connectionUrl)

// Running the router
router = new Router({
    port: cfg.app.port,
    database: database
})

router.run()
