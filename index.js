const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("pagina inicial")
})

app.listen(3000, () => {
    console.log("subindo na porta 3000")
})