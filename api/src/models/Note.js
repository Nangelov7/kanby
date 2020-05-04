const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 80
    },
    stage: {
        type: String,
        required: true,
        trim: true,
		enum: ['backlog', 'todo', 'doing', 'review', 'done']
    },
    priority: {
        type: String,
        required: true,
        trim: true,
        enum: ['low', 'medium', 'high']
    }
})

module.exports = new mongoose.model('Note', NoteSchema)