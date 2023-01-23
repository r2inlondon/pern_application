const request = require("supertest");
const app = require("../app");

describe("Get API route", () => {
  test("Get all candidates", async () => {
    let results = await request(app).get("/candidates");
    expect(results.body.length).toBeGreaterThanOrEqual(1);
  });
});

describe("POST and Delete new candidate", () => {
  let newUserId = "100";

  test("new candidate", async () => {
    const results = await request(app).post("/candidates/new").send({
      firstName: "Cucho",
      lastName: "Rojas",
      gender: "Male",
      email: "cuchito@gmail.com",
      question1: "Metal",
      question2: "Dog person",
      question3: "No",
    });
    // newUserId = String(results._body);

    expect(results.statusCode).toBe(200);
  });

  test("Delete new Candidate", async () => {
    const results = await request(app).delete(`/candidates/${newUserId}`);
    expect(results.statusCode).toBe(200);
  });
});
