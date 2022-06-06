const mongoose = require("mongoose")

const { MONGO_URI } = process.env

exports.connect = () => {
    mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(
        ()=>{
            console.log("DB Connected")
        } // Function Definition
    )
    .catch((err)=>{
        console.log(err)
    })
}



// Inside THEN function defintion => callback function call is executed
