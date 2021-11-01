const express = require("express")
const app = express()
const axios = require("axios")

let jsonData = null;
app.get("/", async (req, res) => {
    if(!jsonData) {
        const { data } = await axios.get(process.env.KIYOMARU_API_ENDPOINT,{ headers: { Authorization: process.env.KIYOMARU_API_TOKEN } })
        jsonData = data
        res.send(jsonData)
        setTimeout(() => jsonData = null, 15 * 60 * 1000)
        console.log("chache not found data recieved")
        return
    }
    res.send(jsonData)
    console.log("returned chache")
})


const server = app.listen(3000, function () {
    console.log("ok port:" + server.address().port)
});