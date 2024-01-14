const shortid = require('shortid')

const URL = require('../models/url')

async function generate_new_short_url(req, res){
    const body = req.body
    if (!body.url) {
        return res.status(400).json({error:'URL is required'})
    }
    const shortID = shortid()
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        totalClicks: []
    })
    // return res.json({id: shortID}) // for json
    return res.render('home', {
        id: shortID
    })
}

async function getAnalytic(req, res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    return res.json({totalClicks:result.totalClicks.length, analytic: result.totalClicks})
}

module.exports = {generate_new_short_url, getAnalytic}