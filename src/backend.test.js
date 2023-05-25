const request = require('supertest');
const { app } = require('./main');

test('Check HTTP status for get all heroes', async () => {
  const response = await request(app).get('/heroes');
  expect(response.status).toBe(200);
});

test('Check that created hero must has personal id', async () => {
  const newUser = {
    nickname: "Superman",
    real_name: "Clark Kent",
    origin_description: "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    superpowers: [
      "solar energy absorption and healing factor",
      "solar flare and heat vision",
      "solar invulnerability",
      "flight"
    ],
    catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg",
      "https://people.com/thmb/oiI9Lq1zfpuGXyc3GCcVeM9UEko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x59:736x61)/henry-cavill-superman-102722-1-1151ea6febc649eebbcdabf9ef7570f1.jpg",
      "https://www.estadao.com.br/resizer/H27Z1M94TLnBdzhYLkePK76LtAU=/1200x1200/filters:format(jpg):quality(80):focal(544x144:554x154)/cloudfront-us-east-1.images.arcpublishing.com/estadao/3L7MOZOSPFKHJIJCLI52X5YNYA.jpg"
    ]
  };
  const response = await request(app).post('/heroes').send(newUser);
  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('id');
});

test('Check if the response is an array', async () => {
  const response = await request(app).get('/heroes');
  expect(Array.isArray(response.body)).toBe(true);
});

test('Check if the response contains heroes', async () => {
  const response = await request(app).get('/heroes');
  expect(response.body.length).toBeGreaterThan(0);
});

test('Check if each hero has the required properties', async () => {
  const response = await request(app).get('/heroes');
  const heroes = response.body;

  heroes.forEach((hero) => {
    expect(hero).toHaveProperty('id');
    expect(hero).toHaveProperty('nickname');
    expect(hero).toHaveProperty('superpowers');
    expect(hero).toHaveProperty('real_name');
    expect(hero).toHaveProperty('origin_description');
    expect(hero).toHaveProperty('catch_phrase');
    expect(hero).toHaveProperty('images');
  });
});

test('Delete a hero by ID', async () => {
  const heroId = 1;

  const response = await request(app).delete(`/heroes/${heroId}`);
  expect(response.status).toBe(204);

  const deletedHeroResponse = await request(app).get(`/heroes/${heroId}`);
  expect(deletedHeroResponse.status).toBe(404);
});

