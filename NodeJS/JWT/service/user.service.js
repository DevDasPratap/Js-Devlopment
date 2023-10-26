const User = require("../models/User");

const find_user_by_property = (key, value) => {
    if (key === '_id') {
        return User.findById(value)
    }
    return User.findOne({ [key]: value })
}

const create_new_user = ({ name, email, password }) => { //destructure
    const user = new User({ name, email, password })
    return user.save()
}

module.exports = {
    find_user_by_property,
    create_new_user
}