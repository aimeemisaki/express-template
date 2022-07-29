// MAKE SURE YOU HAVE RUN npm i express mongoose dotenv
// Basic config

const express = require('express')
const app = express()
require('dotenv').config()
app.set('port', process.env.PORT || 8000)
// if you are using another api, cors enables all origins
// make sure to npm i cors
// const cors = require('cors')

// Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cors())

// Routes
/// Redirect
app.get('/', (req, res) => {
    res.redirect('/api/items')
})

/// Controllers

const itemsController = require('./controllers/itemsController')

app.use('/api/items', itemsController)

// in case you have a user
/// const usersController = require('./controllers/usersController')
/// app.use('/api/users', usersController)

// Error handle 
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

// Start server
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
