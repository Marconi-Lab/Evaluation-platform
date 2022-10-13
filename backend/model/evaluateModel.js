const mongoose = require("mongoose");

const schema = mongoose.Schema;
const evaluateSchema = new schema({
    id: {
        type: Number
    },
    team_id: {
        type: Number,
        // foreign key should refer to primary key of user
        _id: {type: mongoose.Schema.Type.ObjectId, ref: 'user'}
    },
    project_id: {
        type: Number,
        required: true,
        // foreign key should refer to primary key of project
        _id: {type: mongoose.Schema.Type.ObjectId, ref: 'Projects'}
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