const mongoose = require('mongoose');
const { Schema } = mongoose;
// const RoomSchema = require('./Room');

const houseSchema = new Schema({
    houseName: String,
    owner: String,
    address: {  
        streetName: String,
        city: String,
        state: String,
        zipcode: String
    },
    houseType: String,
    // rooms: [RoomSchema],
    // rooms: { type: Schema.Types.ObjectId, ref: 'Room'},
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    // numberOfRoommates: { type: Schema.Types.ObjectId }
});

module.exports = mongoose.model('house', houseSchema);