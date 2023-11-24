const{user}=require('../models/index');

class userRepository{

    async createUser(data){
        try {
            const User=await user.create(data);
            return User
        } catch (error) {
            throw{error:'something went wrong'}
        }
        
    }
    
    async getOneUser(data){
        try {
            const User=await user.findByPk(data);
            return User;
        } catch (error) {
            throw{error:'something went wrong'}
        }
        
    }

    async getUserDelete(data){
        try {
            const User=await user.destroy(data);
            return User;
        } catch (error) {
            throw{error:'something went wrong'}
        }
        
    }


    async getUserUpdate(data,id){
        try {
            const User=await user.update(data,{
                where:{
                    id:id
                }
            })
            return User;
        } catch (error) {
            throw{error:'something went wrong'}
        }
        
    }


    async getAllUser(){
        try {
            const User=await user.findAll();
            return User;
        } catch (error) {
            throw{error:'something went wrong'}
        }
        
    }


}
module.exports=userRepository;
