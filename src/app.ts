import express from "express";

export const app = express();

app.get("/", (_req, res) => {
    res.json({ message: "Hello CI/CD" });
});

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});