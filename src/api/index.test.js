import { instance } from './index'

describe('Mock API', () => {
    it('should return a response with an object of user data', async () => {
        const response = await instance.get('/user/0')
        expect(Object.keys(response.data).length).toBeGreaterThan(0)
    })

    it('should return a 201 status code', async () => {
        const response = await instance.post('/accounts')
        expect(response.status).toBe(201)
    })

    it('should return a 200 status code', async () => {
        const response = await instance.delete('/accounts')
        expect(response.status).toBe(200)
    })

    it('should return a 201 status code', async () => {
        const response = await instance.post('/transactions')
        expect(response.status).toBe(201)
    })
})