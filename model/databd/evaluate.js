const mongoose = require("mongoose");
const {evaluateConnection} = require("../connection");

const evaluate = () => {
    const schema = mongoose.Schema;
    const evaluateSchema = new schema({
        id: {
            type: Number
        },
        team_id: {
            type: Number
        },
        project_id: {
            type: Int,
            required: true
        },
        user_validation_labels_url: {
            type: String
        },
        score: {
            type: Float
        }
    }, {timestamps: true})

    return evaluateConnection.model('userEvaluate', evaluateSchema)
}

module.exports = {evaluate}