const express = require("express")
const { register } = require("../controller/controller")

const router = express()

//Register
router.post("/register", register)

//Login
router.post("/login")


module.exports = {router}