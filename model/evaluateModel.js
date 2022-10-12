const mongoose = require("mongoose");

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


const evaluateProject = mongoose.model('Evaluation', evaluateSchema)
module.exports = evaluateProject;