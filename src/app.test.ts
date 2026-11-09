
import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "./app";

describe("API", () => {

    // Test 1: Home route
    it("GET / returns hello message", async () => {
        const res = await request(app).get("/");

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Hello afwfwa i am waleed");
    });

    // Test 2: Health route
    it("GET /health returns ok", async () => {
        const res = await request(app).get("/health");

        expect(res.status).toBe(200);
        expect(res.body.status).toBe("ok");
    });

    // Test 3: Check response content type
    it("GET / returns JSON response", async () => {
        const res = await request(app).get("/");

        expect(res.headers["content-type"]).toMatch(/application\/json/);
    });

    // Test 4: Check response structure
    it("GET / returns an object with message property", async () => {
        const res = await request(app).get("/");

        expect(res.body).toEqual({
            message: "Hello afwfwa i am waleed"
        });
    });

    // Test 5: Unknown route
    it("GET /unknown returns 404", async () => {
        const res = await request(app).get("/unknown");

        expect(res.status).toBe(404);
    });

    // Test 6: Health response structure
    it("GET /health returns correct response structure", async () => {
        const res = await request(app).get("/health");

        expect(res.body).toEqual({
            status: "ok"
        });
    });

    // Test 7: POST request to home route
    it("POST / should not return 200", async () => {
        const res = await request(app).post("/");

        expect(res.status).not.toBe(200);
    });

});
