const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    driverName: String,
    source: String,
    destination: String,
    seats: Number,
    date: String
});

module.exports = mongoose.model('Ride', RideSchema);
