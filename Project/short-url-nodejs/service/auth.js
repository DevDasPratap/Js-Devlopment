// Statefull - store session on this variable
// const sessionIdToUserMap = new Map();
// function setUser(id, user) {
//   sessionIdToUserMap.set(id, user);
// }

// function getUser(id) {
//   return sessionIdToUserMap.get(id);
// }

// or

// Stateless - every request client sent token in payload
const jwt = require('jsonwebtoken')
const secret = 'url91'
function setUser(user) {
  const payload = {
    _id: user._id,
    email: user.email
  }
  return jwt.sign(payload, secret)
}

function getUser(token) {
  if (!token) {
    return null;
  }
  
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
}




module.exports = {
  setUser,
  getUser,
};
