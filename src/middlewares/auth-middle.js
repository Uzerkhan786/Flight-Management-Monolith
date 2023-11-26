
const {userService}=require('../services/index')
const user=new userService()
const check=async(req,res,next)=>{

    try {
        const u=await user.authenticateService(req.headers['x-access-token']);
        if(!u){
            throw error
        }
        next();
    } catch (error) {
        throw error
    }
}

module.exports={check}