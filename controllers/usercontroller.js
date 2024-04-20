//bring in prisma and cookie
const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");




//user signup
const signUp = async(req, res, next) =>{
    try {
      const {name, email, password} = req.body 
      //check
      if (!name || !email || !password){
        throw new Error("Input field cannot be empty")
      }
      //creating a user
      //prisma.modelname that was defined inside prisma folder index.js
      const user = await prisma.user.create({
        data:{
            name,
            email,
            password,
        }
      })

      //send user a token
      cookieToken(user, res)
    } catch (error) {
        
    }
}






module.exports = signUp