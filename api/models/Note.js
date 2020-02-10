const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    stage: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = new mongoose.model('Note', NoteSchema)