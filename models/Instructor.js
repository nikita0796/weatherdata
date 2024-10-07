const mongoose = require('mongoose');

const Instructorschema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },

    email:{
        type : String,
        required : true,
        unique: true,
    },
    bio:{
        type : String,
    },
    course:{
        type : String,
    },
    rating:{
        type: Number,
        required : true,

    },

});

const Instructor = mongoose.model('Instructor', Instructorschema);
module.exports = Instructor;