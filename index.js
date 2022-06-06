const app = require("./app")
const express = require("express")
const { router } = require("./router/routes")

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
})

app.use(express.json)

app.use("/user",router)