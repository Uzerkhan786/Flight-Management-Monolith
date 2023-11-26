require('dotenv').config();
module.exports={
    
    PORT:process.env.PORT,
    SALTROUND:process.env.SALTROUND,
    EMAIL:process.env.EMAIL,
    EMAIL_PASS:process.env.EMAIL_PASSWORD
}