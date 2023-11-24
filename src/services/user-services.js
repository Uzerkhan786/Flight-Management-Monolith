const {userRepository}=require('../repository/index');
const{SALTROUND}=require('../config/config-env')
const bcrypt=require('bcrypt')
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
}

module.exports=userService