const app = require('../server')
const db = require('../config/db')
const supertest = require('supertest')

describe('Check if all methods of /todo endpoint are working properly', () => {
    it('Check if status code of GET request to /todo endpoint is 200', async () => {
        const res = await supertest(app.server).get('/todo')
        expect(res.status).toBe(200 || 304)
    })
})

describe('Check if all methods of /doing endpoint are working properly', () => {
    it('Check if status code of GET request to /doing endpoint is 200', async () => {
        const res = await supertest(app.server).get('/doing')
        expect(res.status).toBe(200 || 304)
    })
})

describe('Check if all methods of /fix endpoint are working properly', () => {
    it('Check if status code of GET request to /fix endpoint is 200', async () => {
        const res = await supertest(app.server).get('/fix')
        expect(res.status).toBe(200 || 304)
    })
})

describe('Check if all methods of /test endpoint are working properly', () => {
    it('Check if status code of GET request to /test endpoint is 200', async () => {
        const res = await supertest(app.server).get('/test')
        expect(res.status).toBe(200 || 304)
    })
})

describe('Check if all methods of /done endpoint are working properly', () => {
    it('Check if status code of GET request to /done endpoint is 200', async () => {
        const res = await supertest(app.server).get('/done')
        expect(res.status).toBe(200 || 304)
    })
})

afterAll( async done => {
    app.server.close()
    db.connection.close()
    done()
})