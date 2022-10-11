const mongoose = require("mongoose");
const {userConnection} = require("../connection");

const User = () => {
    const schema = mongoose.Schema;
    const userSchema = new schema({
        team_name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        id: {
            type: Number
        },
        role: {
            type: String,
            default: 'researcher',
            enum: ['admin','researcher'],
        }
    }, {timestamps: true})

    return userConnection.model('user', userSchema)
}
module.exports = {User}