const jwt = require("jsonwebtoken");


const getJwtToken = (userId) =>{
    return jwt.sign({userId: userId}, process.env.JWT_SECRET, {expiresIn: "5hrs"})
}



module.exports = getJwtToken