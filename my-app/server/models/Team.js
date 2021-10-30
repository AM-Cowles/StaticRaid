const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true,
        trim: true
    },
    groupType: {
        type: Array,
        required: true,
        trim: true
    }    
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;