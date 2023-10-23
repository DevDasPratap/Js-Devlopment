require('dotenv').config('../.env')
const express = require('express')
const app_middlewware = require('./app-middleware')
const app_router = require('./app_router')
const { not_found_handaler, global_error_handaler } = require('./app_error')
const lottery = require('../db/lotery')
lottery.create('user 1', 10)
lottery.create('user 2', 10)
lottery.create('user 3', 10)
lottery.create('user 4', 10, 5)
lottery.bulkCreate('test', 2)

const tickets = lottery.find()
console.log('Ticket: ',tickets)
const winners = lottery.draw(2)
console.log(`Winners: ${winners}`)

const app = express()

app.use(app_middlewware)
app.use(app_router)
app.use(not_found_handaler)
app.use(global_error_handaler)

module.exports = app