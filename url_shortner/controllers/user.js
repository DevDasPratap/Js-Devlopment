const { v4: uuidv4 } = require("uuid");
const { set_user } = require("../service/auth");
const User = require("../models/user");

async function user_signup(req, res) {
  const { name, email, password } = req.body;
  const result = await User.create({
    name,
    email,
    password,
  });

  // return res.json({result: result})
  return res.render("home");
}
async function user_login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user) {
    return res.render("login", {
      error: "Invalid user or password",
    });
  }
  // create session
  const sessionId = uuidv4();
  set_user(sessionId, user);
  // create and set cookie
  res.cookie("uid", sessionId, { httpOnly: true, secure: true });

  return res.redirect("/");
}

module.exports = {
  user_signup,
  user_login,
};
