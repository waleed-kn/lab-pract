import express from "express";

export const app = express();

app.get("/", (_req, res) => {
    res.json({ message: "Hello from my CI/CD pipeline" });
});

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});