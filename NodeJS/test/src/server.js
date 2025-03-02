const express = require("express");
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "John Doe" }];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = app;
