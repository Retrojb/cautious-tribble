const mongoose = require('mongoose');
const { Schema } = mongoose; // destructured import

const userSchema = new Schema({
    googleID: String,
    name: String,
    credits: { 
        type: Number,
        default: 0
    }
});

mongoose.model('users', userSchema);