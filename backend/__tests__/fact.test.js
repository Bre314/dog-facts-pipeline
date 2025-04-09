const request = require("supertest");
const app = require("../index");

let server;

beforeAll(() => {
  server = app.listen(4000); // Use a test port
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

describe("GET /api/fact", () => {
  it("should return a dog fact", async () => {
    const res = await request(server).get("/api/fact");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("fact");
  });
});
