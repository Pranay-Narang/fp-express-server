const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require("cors")

const CONFIG = require('./config/config')
const routes = require('./routes')

const mongoConnectionURI = CONFIG.DB_PASSWORD && CONFIG.DB_USERNAME ?
    `mongodb://${CONFIG.DB_USERNAME}:${CONFIG.DB_PASSWORD}@${CONFIG.DB_URL}/${CONFIG.DB_NAME}?authSource=admin` :
    `mongodb://${CONFIG.DB_URL}/${CONFIG.DB_NAME}`

// TODO: Add an error handler for connection failure
mongoose.connect(mongoConnectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const app = express()
app.use(express.json())

// Utilize a more restrictive policy if needed
app.use(cors())

if (CONFIG.APP_ENV == 'development') {
    app.use(logger('dev'))
}

app.get('/health', async (req, res) => {
    res.status(200).send({
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    })
})

app.use('/services', routes)

app.listen(CONFIG.port, () => {
    console.log("Server up on " + CONFIG.port)
})
