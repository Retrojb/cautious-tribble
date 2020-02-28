const mongoose = require('mongoose');
const { Schema } = mongoose;
const AddressSchema = require('./Address');
// const RoomSchema = require('./Room');

const houseSchema = new Schema({
    houseName: String,
    address: [AddressSchema],
    owner: String,
    houseType: String,
    rooms: [RoomSchema],
    // rooms: { type: Schema.Types.ObjectId, ref: 'Room'},
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    // numberOfRoommates: { type: Schema.Types.ObjectId }
});

mongoose.model('house', houseSchema);