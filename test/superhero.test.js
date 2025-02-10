const request = require('supertest');
const app = require('../src/app');

describe('Superhero API', () => {
    it('should return an empty array initially', async () => {
        const res = await request(app).get('/api/superheroes');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('should add a superhero and return it', async () => {
        const hero = { name: 'Batman', superpower: 'Rich', humilityScore: 8 };
        const res = await request(app).post('/api/superheroes').send(hero);
        
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Batman');
    });
});
