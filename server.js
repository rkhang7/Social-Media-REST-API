const express = require('express');
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
    res.send('This is home page 01');
})

app.listen(PORT, () => {
    console.log('Server is running at ${PORT}');
}) 