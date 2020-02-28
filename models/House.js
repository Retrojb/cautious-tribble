const mongoose = require('mongoose');
const { Schema } = mongoose;
const RoomSchema = require('./Room');

const houseSchema = new Schema({
    houseName: String,
    rooms: [RoomSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = houseSchema;