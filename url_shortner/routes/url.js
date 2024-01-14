const express = require('express')

const {generate_new_short_url, getAnalytic} = require('../controllers/url')

const router = express.Router()

router.post('/', generate_new_short_url)
router.get('/analytic/:shortId', getAnalytic) //localhost:3001/url/analytic/UrbFMvPvs

module.exports = router