const{user}=require('../models/index');

class userRepository{
     
    async createUser(data){
        try {
            const User=await user.create(data);
            return User;
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

    async getUserDelete(id){
        try {
            const User=await user.destroy({
                where:{
                    id:id
                }
            });
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


    //get an  email for signn


    async getUserEmail(data){
        try {
            const User=await user.findOne({
                where:{
                    email:data.email
                }
            })
            return User
        } catch (error) {
            throw {error:'it is error'}
        }
    }

    //GET BY ID

    async getUserId(data){
        try {
            const User=await user.findByPk(data)
            return User;
        } catch (error) {
            throw {error:'it is error'}
        }
    }



    


}
module.exports=userRepository;
