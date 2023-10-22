require('dotenv').config('../.env')
const express = require('express')
const app_middlewware = require('./app-middleware')
const app_router = require('./app_router')
const { not_found_handaler, global_error_handaler } = require('./app_error')
const app = express()

app.use(app_middlewware)
app.use(app_router)
app.use(not_found_handaler)
app.use(global_error_handaler)

module.exports = app