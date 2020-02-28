const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new Schema({
    roomName: String,
    _house: { type: Schema.Types.ObjectId, ref: 'House' }
});

module.exports = roomSchema;