const express = require("express")
const routes = require("./routes")

const app = express()
routes(app)


app.listen(3000, () => {
    console.log("subindo na porta 3000")
})

module.exports = app