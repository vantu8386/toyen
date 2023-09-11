const express = require("express");
const routes = express.Router();
const db = require("../utils/database");

routes.get("/", (req, res) => {
    res.json("index");
});

module.exports = routes