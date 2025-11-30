import request from "supertest";
import app from "../src/app.js";

describe("Smoke Test - /health", () => {
  it("API should respond with healthy", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
  });
});