const request = require("supertest");
const app = require("../index");

let server;

beforeAll(() => {
  server = app.listen(4000); // testing port
});

afterAll((done) => {
  server.close(done); // shuts down the server after the tests
});

describe("GET /api/fact", () => {
  it("should return a dog fact", async () => {
    const res = await request(server).get("/api/fact");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("fact");
  });
});
