const express = require("express")
const { router } = require("./router/routes")

require("dotenv").config()
require("./config/database").connect()

const app = express()

app.use(express.json)
app.use("/user",router)

module.exports = app


