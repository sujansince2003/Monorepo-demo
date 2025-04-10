import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("hello ws server")
})

app.listen("3001", () => {
    console.log("running on port 3001")
})