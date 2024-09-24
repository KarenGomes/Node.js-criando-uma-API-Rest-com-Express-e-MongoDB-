import express from "express";

const app = express();

app.get("/", (req, resp) => {
    resp.status(200).send("Curso de Node.js");
})

export default app;