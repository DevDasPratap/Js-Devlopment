const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app_middlewware = [
    morgan('dev'),
    cors(),
    express.json()
]

module.exports = app_middlewware