const mongoose = require('mongoose');
const { Schema } = mongoose;
// const RoomSchema = require('./Room');

const houseSchema = new Schema({
    houseName: String,
    owner: String,
    houseType: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    // rooms: [RoomSchema],
    // rooms: { type: Schema.Types.ObjectId, ref: 'Room'},
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    // numberOfRoommates: { type: Schema.Types.ObjectId }
});

module.exports = mongoose.model('house', houseSchema);