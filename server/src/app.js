import express  from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("api is running");
});

export default app;