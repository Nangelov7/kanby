const app = require('../app')
const supertest = require('supertest')

it('Should get back all todo notes', async () => {
    const res = await supertest(app).get('/todo')
    expect(res.status).toBe(200 || 201)
    expect(res.body).toHaveProperty('get')
})