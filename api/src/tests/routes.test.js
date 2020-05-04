const app = require('../app')
const mongoose = require('mongoose')
const supertest = require('supertest')
const Note = require('../models/Note')
const db = require('../config/db')

// Database setup
beforeAll(async () => {
	await db.init()
})

// Cleaning the database between each test
afterEach(async () => {
	await Note.deleteMany()
})

// Removing the database and closing the connection
afterAll(async () => {
	await Note.collection.drop()
	await mongoose.connection.close()
})

describe('Test /backlog endpoint', () => {
	it('GET request', async () => {
		await supertest(app).get('/backlog')
			.expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		await supertest(app).post('/backlog')
			.send({
				text: 'Upload picture',
				priority: 'medium'
			})
		const note = await Note.findOne({ text: 'Upload picture' })
		expect(note.text).toBe('Upload picture')
		expect(note.priority).toBe('medium')
	})
})

describe('Test /todo endpoint', () => {
    it('GET request', async () => {
        await supertest(app).get('/todo')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		await supertest(app).post('/todo')
			.send({
				text: 'New feature',
				priority: 'low'
			})
		const note = await Note.findOne({ text: 'New feature' })
		expect(note.text).toBe('New feature')
		expect(note.priority).toBe('low')
	})
})

describe('Test /doing endpoint', () => {
    it('GET request', async () => {
        await supertest(app).get('/doing')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		await supertest(app).post('/doing')
			.send({
				text: 'Login system',
				priority: 'high'
			})
		const note = await Note.findOne({ text: 'Login system' })
		expect(note.text).toBe('Login system')
		expect(note.priority).toBe('high')
	})
})

describe('Test /review endpoint', () => {
    it('GET request', async () => {
        await supertest(app).get('/review')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		await supertest(app).post('/review')
			.send({
				text: 'Payment system',
				priority: 'high'
			})
		const note = await Note.findOne({ text: 'Payment system' })
		expect(note.text).toBe('Payment system')
		expect(note.priority).toBe('high')
	})
})

describe('Test /done endpoint', () => {
    it('GET request', async () => {
        await supertest(app).get('/done')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		await supertest(app).post('/done')
			.send({
				text: 'DB connection',
				priority: 'medium'
			})
		const note = await Note.findOne({ text: 'DB connection' })
		expect(note.text).toBe('DB connection')
		expect(note.priority).toBe('medium')
	})
})