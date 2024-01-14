const {get_user} = require('../service/auth')
async function only_login_user(req, res, next) {
    const userUId = req.cookies.uid
    if ((!userUId)) {
        return res.redirect('/login')
    }
    const user = get_user(userUId)

    if (!user) {
        return res.redirect('/login')
    }
    req.user = user
    next()
}

async function checkAuth(req, res, next) {
    const userUId = req.cookies.uid
    const user = get_user(userUId)
    req.user = user
    next()
}

module.exports = {only_login_user, checkAuth}