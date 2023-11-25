const {userRepository}=require('../repository/index');
const{SALTROUND}=require('../config/config-env')
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');
class userService{


    constructor(){
         this.user=new userRepository();
    }
    async createServiceUser(data){
        try {
            const salt = await bcrypt.genSaltSync(10);
            const hash = await bcrypt.hashSync(data.password, salt);
            const user=await this.user.createUser({
                email:data.email,
                password:hash
            });
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
        }   
    }


    async getServiceUser(data){
        try {
            const user=await this.user.getOneUser(data);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
        }   
    }


    async getServiceUserUpdate(data,id){
        try {
            const user=await this.user.getUserUpdate(data,id);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
        }   
    }


    async getServiceUserdelete(data){
        try {
            const user=await this.user.getUserDelete(data);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
        }   
    }

    async getAllServiceUser(data){
        try {
            const user=await this.user.getAllUser(data);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
        }   
    }  


    //SIGN IN LOGIC
    async userServiceSignIn(data){
              try {
                const user=await this.user.getUserEmail(data);
                
               const check=await bcrypt.compareSync(data.password,user.password);
               if(!check){
                      console.log('email or password is incorrect');
                      throw {error:'email or password is invalid'}          
               }

               const token= this.createToken({email:user.email,id:user.id});
               console.log(token);
               

               const verify=this.verifyToken(token);
               if(verify){
                console.log(verify);
               }
    
    
              } catch (error) {
                  throw {error}
              }         
    }


    async authenticateService(token){
            try {
                const check=this.verifyToken(token);
                const user=await this.user.getUserId(check.id);
                
                if(!(check.email==user.email)){
                       message:'Please enter the correct token';
                       throw error
                }
                return true;
            } catch (error) {
                throw error
            }
    }


                 //  # CRREATE AND VERIFY TOKEN
    createToken(data){
        const user=jwt.sign(data, 'secret', { expiresIn: '1d' }); 
        return user; 
    }

    verifyToken(token){

        const a=jwt.verify(token,'secret');
        return a;
    }


    
}

module.exports=userService