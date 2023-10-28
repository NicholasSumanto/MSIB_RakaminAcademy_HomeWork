const request = require('supertest');
const app = require('../index');

describe('Todo API', () => {
  it('should get all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
  });

  it('should get a specific todo by id', async () => {
    const res = await request(app).get('/todos/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
  });

  it('should create a new todo', async () => {
    const res = await request(app).post('/todos').send({ title: 'New Todo' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toBeDefined();
  });

  it('should delete a todo', async () => {
    const res = await request(app).delete('/todos/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
  });
});
