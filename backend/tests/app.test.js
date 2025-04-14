const request = require("supertest");
const express = require("express");
const { getRandomFact } = require("../facts");

const app = express();
app.get("/api/fact", (req, res) => {
  res.json({ fact: getRandomFact() });
});

describe("GET /api/fact", () => {
  it("should return a dog fact", async () => {
    const response = await request(app).get("/api/fact");
    expect(response.status).toBe(200);
    expect(response.body.fact).toBeDefined();
    expect(typeof response.body.fact).toBe("string");
  });
});
