const User = require("../models/User");
const error = require("../utils/error");

const find_users = ()=>{
    return User.find()
}

const find_user_by_property = (key, value) => {
    if (key === '_id') {
        return User.findById(value)
    }
    return User.findOne({ [key]: value })
}

// as a new user
// const create_new_user = ({ name, email, password }) => { //destructure
//     const user = new User({ name, email, password })
//     return user.save()
// }

// as a admin or user
const create_new_user = ({ name, email, password, role, accountStatus }) => { //destructure
    const user = new User({ name, email, password, role:role ? role : ['STUDENT'], accountStatus:accountStatus?accountStatus:'PENDING' })
    return user.save()
}

const update_user_by_id = async(id, data)=>{
    const user = await find_user_by_property('email', data.email)
    if (user) {
        throw error('Email already in use', 400)
    }
    return User.findByIdAndUpdate(id, {...data}, {new:true})
}

module.exports = {
    find_user_by_property,
    create_new_user,
    find_users,
    update_user_by_id
}