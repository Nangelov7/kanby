const router = require('express').Router()
const notesController = require('../controllers/notesController')
const stage = 'doing'

router.get(`/${stage}`, notesController.getNotes(stage))

router.post(`/${stage}`, notesController.createNote(stage))

router.put(`/${stage}/:id`, notesController.updateNote())

router.delete(`/${stage}/:id`, notesController.deleteNote())

module.exports = router