const request = require("supertest");
const { app } = require("../server.js"); // adjust path if needed

describe("API Tests: Aadhaar & PAN Verification", () => {
  // -------- GET / --------
  it("GET / should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Server is running!");
  });

  // -------- Aadhaar Tests --------
  it("POST /api/v1/verify-aadhaar with invalid body should return 400", async () => {
    const res = await request(app)
      .post("/api/v1/verify-aadhaar")
      .send({ aadhaarNo: "123" }); // missing fullName
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("POST /api/v1/verify-aadhaar with valid body but non-existent Aadhaar should return 400", async () => {
    const res = await request(app)
      .post("/api/v1/verify-aadhaar")
      .send({ aadhaarNo: "999999999999", fullName: "Test User" });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error || res.body.errors).toBeDefined();
  });

  // -------- PAN Tests --------
  it("POST /api/v1/verify-pan with missing fields should return 400", async () => {
    const res = await request(app).post("/api/v1/verify-pan").send({
      id: "1",
      panNo: "ABCDE1234F",
    }); // missing holderName and dob
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("POST /api/v1/verify-pan with invalid details should return 400", async () => {
    const res = await request(app).post("/api/v1/verify-pan").send({
      id: 1,
      panNo: "ABCDE1234F",
      holderName: "Wrong Name",
      dob: "2000-01-01",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  // Optional: if you have test data in DB, you can write a successful test
  // it("POST /api/v1/verify-aadhaar with valid data should return 200", async () => {
  //   const res = await request(app)
  //     .post("/api/v1/verify-aadhaar")
  //     .send({ aadhaarNo: "123456789012", fullName: "Test User" });
  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.success).toBe(true);
  // });
});
