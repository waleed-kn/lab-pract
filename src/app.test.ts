import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "./app";

describe("API", () => {
    it("GET / returns hello message", async () => {
        const res = await request(app).get("/");
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Hello afwfwa i am waleed");

    });

    it("GET /health returns ok", async () => {
        const res = await request(app).get("/health");
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("ok");
    });
});