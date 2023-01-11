const express = require('express');
const route = express.Router();

// get a list off all user
route.get('/users', (req, res, next) => {
    res.json({
        status: "success",
        elements: [{}],
    })
})

// delete a user
route.delete('/users/:id', (req, res, next) => {
    res.json({
        status: "success",
        elements: [{}],
    })
})

module.exports = route;