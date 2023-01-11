const express = require('express');
const app = express();
require('dotenv').config()
const helmet = require('helmet'); // using for security header
const morgan = require('morgan');

const userRoute = require('./Routes/User.route')

const PORT = process.env.PORT || 5000;

app.use(helmet())
app.use(morgan('common'))
app.use('/v1', userRoute)

app.get("/", (req, res, next) => {
    res.send('This is home page 01');
})



app.listen(PORT, () => {
    console.log('Server is running at ${PORT}');
}) 