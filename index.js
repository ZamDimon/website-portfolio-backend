// Importing postgres database
const pglib = require('pg')

// Loading .env file
require('dotenv').config()

const client = new pglib.Client({ connectionString: process.env.DATABASE_URL })
 
client.connect((err) => {
   client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
     console.log(err ? err.stack : res.rows[0].message) // Hello World!
     client.end()
   })
})
 