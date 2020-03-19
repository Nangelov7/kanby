const app = require('../server')
const db = require('../config/db')
const supertest = require('supertest')

describe('Test /todo endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app.server).get('/todo')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('Test /doing endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app.server).get('/doing')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('Test /fix endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app.server).get('/fix')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('Test /test endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app.server).get('/test')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('Test /done endpoint', () => {
    it('GET request', async () => {
        const res = await supertest(app.server).get('/done')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

afterAll( async done => {
    app.server.close()
    db.connection.close()
    done()
})