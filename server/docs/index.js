const basicInfo = require('./basicInfo');
const bookings = require('./bookings');
const users = require('./users');

module.exports = {
    ...basicInfo,
    paths:{
        ...bookings,
        ...users
    }
};