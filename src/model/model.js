const mongoose = require('mongoose');

const user_details = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required:true
    },
    
})

const logindb = new mongoose.model('logindb',user_details);
module.exports = logindb;