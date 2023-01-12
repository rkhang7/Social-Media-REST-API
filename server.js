const express = require('express');
const app = express();
require('dotenv').config()
const helmet = require('helmet'); // using for security header
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRoute = require('./Routes/User.route')

const PORT = process.env.PORT || 5000;

app.use(helmet())
app.use(morgan('common'))

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/users', { serverSelectionTimeoutMS: 3000 })
    .then(result => {
        console.log("Database connect success")
    })
    .catch(err => {
        console.log("Database connect fail!", err)
    })

mongoose.connection.on('connected', () => {
    console.log("Mongodb connected to db!")
})

mongoose.connection.on('error', (err) => {
    console.log(err.message);
})



mongoose.connection.on('disconnected', () => {
    console.log('Mongodb connected is disconnected!');
})

process.on("SIGINT", async () => {
    await mongoose.connection.close();
    process.exit(0);
})

app.use('/v1', userRoute)

app.get("/", (req, res, next) => {
    res.send('This is home page 01');
})



app.listen(PORT, () => {
    console.log('Server is running at ${PORT}');
}) 