const mongoose = require('mongoose');
const { Schema } = mongoose; // destructured import

const userSchema = new Schema({
    googleID: String,
    name: String
});

mongoose.model('users', userSchema);