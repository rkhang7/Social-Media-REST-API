const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const UserSchema = ({
    userName: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        require: true,
    },
});


module.exports = mongoose.model("Users", UserSchema);