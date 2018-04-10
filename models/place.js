var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    placeName: {type: String, required: true},
    telNo: {type: String, required: true},
    status: {type: String, required: true},
    regNo: {type: String},
    accNo: {type: String},
    bank: {type: String},
    branchCode: {type: String},
    accType: {type: String},
    longitude: {type: String},
    latitude: {type: String},
    address: {type: String}

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Place', schema);