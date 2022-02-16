const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    model = mongoose.model.bind(mongoose),
    ObjectId = mongoose.Schema.Types.ObjectId;
const bookingSchema = new Schema({
    id: ObjectId,
    userID: ObjectId,
    companyID: Number,
    room: Number,
    hour: Number,
    created_at: Date
});
module.exports = model('Booking', bookingSchema)