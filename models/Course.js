const mongoose = require('mongoose');

const Coursechema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },

    description:{
        type : String,
        required : true,
        unique: true,
    },
    duration:{
        type : String,
    },
    price:{
        type : Number,
    },
    category:{
        type: Number,
        required : true,

    },
    createdby:{
        type: String,
        required : true,

    },
    lessons:{
        type: String,
        required : true,

    },

});

const Course = mongoose.model('Course', Coursechema);
module.exports = Course;