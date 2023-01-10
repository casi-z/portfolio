const express = require('express')
const bodyParser = require('body-parser')
// const cors = require('cors')
const mysql = require("mysql2")

const mainRoutes = require('./routes/main')
const orderRoutes = require('./routes/order')


const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, access-control-allow-origin')
    next()
})

app.use(express.static('public'))
app.set('view engine')

projects = {}
projectsLength = NaN
con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portfolio',
})
con.query(
	'SELECT * FROM projects',
    function(error, result){
        if(error) throw error
        projects = result
        global.projectsLength = global.projects.length
    }
)

// Global variables
doVKBotEnabled = true
code = undefined

app.use('/api', mainRoutes)
app.use('/api/order', orderRoutes)


module.exports = app