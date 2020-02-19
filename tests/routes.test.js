const test = require('ava');
const request = require('supertest');
const app = require('../app');

test.serial('GET /', async(t) => {
	const res = await request(app).get('/');

	t.is(res.status, 200);
	t.pass();
});

test.serial('POST /info', async(t) => {
	const res = await request(app).post('/info').send({ confirmation: true });

	t.is(res.status, 200);
	t.deepEqual({data: {name: 'John Doe'}}, res.body);
	t.pass();
});

test.serial('POST /info fail', async(t) => {
	const res = await request(app).post('/info');

	t.is(res.status, 400);
	t.pass();
});

test.serial('POST /info fail with different object', async(t) => {
	const res = await request(app).post('/info').send({ confirmation: true });

	t.is(res.status, 200);
	t.notDeepEqual({ confirmation: true })
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
	t.pass();
});