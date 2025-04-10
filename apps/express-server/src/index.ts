import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("hello express server")
})

app.listen("3002", () => {
    console.log("running on port 3000")
})