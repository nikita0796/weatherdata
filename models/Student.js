const mongoose = require('mongoose');

const Studentschema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },

    email:{
        type : String,
        required : true,
        unique: true,
    },
    enrolledcourses:{
        type : String,
    },
    assignments:{
        type : String,
    },

});

const Student = mongoose.model('Student', Studentschema);
module.exports = Student;