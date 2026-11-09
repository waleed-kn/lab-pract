import express from "express";

export const app = express();

app.get("/", (_req, res) => {
    res.json({ message: "Hello, I changed this and broke the test" });
});

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});