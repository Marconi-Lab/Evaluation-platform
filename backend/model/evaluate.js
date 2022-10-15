const mongoose = require("mongoose");

const schema = mongoose.Schema;
const evaluateSchema = new schema({
    id: {
        type: Number
    },
    team_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'   
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'projects' ,
        required: true
    },
    score: {
        type: Number
    }
}, {timestamps: true})


const evaluateProject = mongoose.model('Evaluation', evaluateSchema)
module.exports = evaluateProject;