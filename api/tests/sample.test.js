const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

describe('Testing GET request to todo endpoint', () => {
    it('It should get the data of all todo notes'), async () => {
        const response = await request.get('/todo')
        expect(response.status).toEqual(200)
        expect(response.body).toHaveProperty('get')
    }
})