const request = require('supertest');
const app = require('./app');

describe('GET /transactiondb', () => {
  it('responds with JSON message', async () => {
    const response = await request(app).get('/transactiondb');
    expect(response.statusCode).toBe(200);
//     expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));
//   });

//   it('responds with correct message', async () => {
//     const response = await request(app).get('/api');
//     expect(response.body.message).toBe('Hello, world!');
  });
});