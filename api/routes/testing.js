const router = require('express').Router()
const mongoose = require('mongoose')

const Note = require('../models/Note')
let stage = 'test'

router.get('/', (req, res) => {
    Note.find({ stage: stage }).select('-__v -stage')
    .exec()
    .then(notes => {
        res.status(200).json(notes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    let text = req.body.text
    const Test = new Note({
        _id: new mongoose.Types.ObjectId(),
        text: text,
        stage: stage
    })
    Test.save()
    .then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let text = req.body.text
    let stage = req.body.stage
    Note.findOneAndUpdate({ _id: id }, { text: text, stage: stage })
    .exec()
    .then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Note.deleteOne({ _id: id })
    .exec()
    .then(note => {
        res.status(200).json(note)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router