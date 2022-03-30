const jwt = require('jsonwebtoken')
const secretKey = "secret"


const tokenGenerator = (user)=>{
    const {id, username} = user;
    const token = jwt.sign({
        id, username
    }, secretKey)
    return token
}

const tokenVerifier = (token)=>{
    const decoded = jwt.verify(token, secretKey)
    return decoded
}


module.exports = {
    tokenGenerator,
    tokenVerifier
}
