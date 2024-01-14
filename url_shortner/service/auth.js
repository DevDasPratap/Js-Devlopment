const user_sessionId = new Map()

function set_user(id, user) {
    user_sessionId.set(id, user)
}
function get_user(id) {
    return user_sessionId.get(id)
}

module.exports = {
    set_user,
    get_user
}