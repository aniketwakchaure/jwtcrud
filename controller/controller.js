const User = require("../model/user") // User Schema

const register = async (req,res)=>{
    try {
        let {firstName,lastName, email, password} =  req.body

        // Validation 1: All the fields are required
        if(!(firstName && lastName && email && password)){
            res.status(400).send("All inputs are required")
        }

        // Validation 2: Email exists in the database or not
        const emailExist =  await User.findOne({email})

        if(!emailExist){
            User.create({
                firstName,
                lastName,
                email,
                password
            })
        }

    } catch (error) {
        
    }
}  

module.exports = {register}