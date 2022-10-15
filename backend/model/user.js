const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    teamName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    id: {
        type: Number
    },
    role:{
        type:String,
        default:'researcher',
        enum: ['admin','researcher']
    },
    accessToken: {
        type: String
    }
});

const User = mongoose.model('user',userSchema) 
module.exports = User;