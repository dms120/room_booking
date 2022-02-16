const Booking = require('../models/booking');

const validateRoomAvailability = async (companyID, room, hour, res) => {
    const count = await Booking.countDocuments({companyID: companyID, room: room, hour: hour},
        function (err) {
            if (err) {
                res.statusCode = 500
                res.send(err);
            }
        }).clone();

    if (count > 0) {
        res.statusCode = 500;
        res.send({
            name: "SimilarBookingExists",
            message: "This room is already booked on this hour. Please choose other hour or room",
        });
        return false;
    }
    return true;

}

const appointmentController = {
    all(req, res) {
        // Returns all bookings
        Booking.find({}).exec((err, bookings) => res.json(bookings));
    },
    async create(req, res) {
        const requestBody = req.body;
        const newBooking = new Booking({
            userID: requestBody.userID,
            companyID: requestBody.companyID,
            room: requestBody.room,
            hour: requestBody.hour
        });

        if (!await validateRoomAvailability(requestBody.companyID, requestBody.room, requestBody.hour, res)) {
            return;
        }

        newBooking.save((err, saved) => {
            if (err) {
                res.statusCode = 500
                res.send(err)
            } else {
                res.send({success: true, saved})
            }
        });
    },
    async update(req, res) {
        const {id: _id} = req.params
        const requestBody = req.body;

        if (!await validateRoomAvailability(requestBody.companyID, requestBody.room, requestBody.hour, res)) {
            return;
        }

        let updatedBooking = new Booking({
            _id,
            userID: requestBody.userID,
            companyID: requestBody.companyID,
            room: requestBody.room,
            hour: requestBody.hour
        });

        Booking.findByIdAndUpdate(
            _id,
            updatedBooking,
            {new: true},
            (err, saved) => {
                if (err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    res.send({success: true, saved})
                }
            }
        )
    },
    delete(req, res) {
        const {id: _id} = req.params
        Booking.deleteOne({_id: _id}, (err) => {
            if (err) {
                res.statusCode = 500
                res.send(err)
            } else {
                res.send({success: true})
            }
        });
    }
};

module.exports = appointmentController;