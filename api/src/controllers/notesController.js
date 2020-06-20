const mongoose = require('mongoose')
const Note = require('../models/Note')
const cache = require('../config/cache')

exports.getNotes = (stage) => {
    return async (req, res) => {
		if(await cache.exists(stage)) {
			let cached_data = await cache.get(stage)
			await res.status(200).json(JSON.parse(cached_data))
		} else {
			Note.find({ stage: stage }).select('-__v -stage')
				.exec()
				.then(async notes => {
					await cache.set(stage, JSON.stringify(notes))
					await res.status(200).json(notes)
				})
				.catch(async err => {
					await res.status(500).json(err)
				})
		}
    }
}

exports.createNote = (stage) => {
    return (req, res) => {
        let text = req.body.text
        let priority = req.body.priority
        const newNote = new Note({
            _id: new mongoose.Types.ObjectId(),
            text: text,
            stage: stage,
            priority: priority
        })
        newNote.save()
            .then(async note => {
				if(await cache.exists(stage)) {
					await cache.del(stage)
				}
                await res.status(200).json(note)
            }).catch(async err => {
                await res.status(500).json(err)
			})
    }
}

exports.updateNote = () => {
    return (req, res) => {
        let id = req.params.id
        let text = req.body.text
        let stage = req.body.stage
        let priority = req.body.priority
        Note.findOneAndUpdate({ _id: id }, { text: text, stage: stage, priority: priority })
            .exec()
            .then(async note => {
				if(await cache.exists(stage)) {
					await cache.del(stage)
				}
                await res.status(200).json(note)
            }).catch(async err => {
                await res.status(500).json(err)
			})
    }
}

exports.deleteNote = () => {
    return (req, res) => {
        let id = req.params.id
        Note.deleteOne({ _id: id })
            .exec()
            .then(note => {
				// delete cache key
                res.status(200).json(note)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}