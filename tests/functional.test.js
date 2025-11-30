import request from "supertest";
import app from "../src/app.js";

describe("Functional Test - /calculate", () => {
  it("returns calorie and body-fat results", async () => {
    const res = await request(app)
      .post("/calculate")
      .send({
        age: 24,
        gender: "male",
        height: 175,
        weight: 70,
        activity: "medium"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.calories).toBeDefined();
    expect(res.body.bodyFat).toBeDefined();
  });
});