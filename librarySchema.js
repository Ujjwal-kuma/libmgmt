let mongoose = require('mongoose');
let dbConnect = require('./dbConnect');
dbConnect();

const library = new mongoose.Schema({
    imglink: {
        type: String
    },
    facultyIncharge: {
        type: String
    },
    technicalIncharge: {
        type: String
    },
    labName: {
        type: String
    },
    disc: {
        type: String
       
    }
});

module.exports = library;