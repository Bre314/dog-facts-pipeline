const request = require("supertest");
const app = require("../index");
let server;
beforeAll((done) => {
  server = app.listen(4000, () => {
    console.log("Test server started on port 4000");
    done();
  });
});
afterAll((done) => {
  server.close(() => {
    console.log("Test server closed");
    done();
  });
});
describe("GET /api/fact", () => {
  it("should return a dog fact", async () => {
    const res = await request(server).get("/api/fact");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("fact");
  });
});
