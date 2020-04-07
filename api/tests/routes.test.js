const app = require('../app')
const mongoose = require('mongoose')
const supertest = require('supertest')
const Note = require('../models/Note')

// Database setup
beforeAll(async () => {
	const DB_HOST = 'db'
	const DB_PORT = 27017
	const DB_TEST_DATABASE = 'kanby_test'

	await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_TEST_DATABASE}`, {
		useNewUrlParser: true, useUnifiedTopology: true,
		useFindAndModify: false, useCreateIndex: true
	})
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

describe('Test /todo endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app).get('/todo')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		const res = await supertest(app).post('/todo')
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
        const res = await supertest(app).get('/doing')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		const res = await supertest(app).post('/doing')
			.send({
				text: 'Login system',
				priority: 'high'
			})
		const note = await Note.findOne({ text: 'Login system' })
		expect(note.text).toBe('Login system')
		expect(note.priority).toBe('high')
	})
})

describe('Test /fix endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app).get('/fix')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		const res = await supertest(app).post('/fix')
			.send({
				text: 'Upload picture',
				priority: 'medium'
			})
		const note = await Note.findOne({ text: 'Upload picture' })
		expect(note.text).toBe('Upload picture')
		expect(note.priority).toBe('medium')
	})
})

describe('Test /test endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app).get('/test')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		const res = await supertest(app).post('/test')
			.send({
				text: 'Test endpoints',
				priority: 'high'
			})
		const note = await Note.findOne({ text: 'Test endpoints' })
		expect(note.text).toBe('Test endpoints')
		expect(note.priority).toBe('high')
	})
})

describe('Test /done endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app).get('/done')
            .expect('Content-Type', /json/)
			.expect(200)
	})

	it('POST request', async () => {
		const res = await supertest(app).post('/done')
			.send({
				text: 'DB connection',
				priority: 'medium'
			})
		const note = await Note.findOne({ text: 'DB connection' })
		expect(note.text).toBe('DB connection')
		expect(note.priority).toBe('medium')
	})
})