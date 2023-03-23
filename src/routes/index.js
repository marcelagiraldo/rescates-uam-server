const express = require("express");
const routes = express.Router();

const routes_system = (app) =>{
    app.use("/api/v1", routes)
};

module.exports = routes_system;

