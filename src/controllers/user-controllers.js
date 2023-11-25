const {userService}=require('../services/index');
const user=new userService();

     const  createUserController=async(req,res)=>
     {
        try {
            const User=await user.createServiceUser(req.body);

            res.status(200).json({
                response:User,
                message:'Successfully created the user',
                success:true
            })
        } catch (error) {

            res.status(401).json({
                response:{},
                message:'Unable to create  a user',
                success:false
            })
        }
     }




     const getUserController=async(req,res)=>{
         try {
            const User=await user.getServiceUser(req.params.id);

            res.status(200).json({
                response:User,
                message:`Successfully get  the${User.email}  user`,
                success:true
            })
        } catch (error) {
            
            res.status(401).json({
                response:{},
                message:'Unable to get the user',
                success:false
            })
        }
     }



     const getUserDeleteController=async(req,res)=>{
        try {
           const User=await user.getServiceUserdelete(req.params.id);

           res.status(200).json({
               response:User,
               message:`Successfully   deleted the   user`, 
               success:true
           })
       } catch (error) {
           
           res.status(401).json({
               response:{},
               message:'Unable to delete the user',
               success:false
           })
       }
    }



     const getUserUpdateController=async(req,res)=>{
        try {
           const User=await user.getServiceUserUpdate(req.body,req.params.id);

           res.status(200).json({
               response:User,
               message:`Successfully Update  the ${User.email}  user`,
               success:true
           })
       } catch (error) {
           
           res.status(401).json({
               response:{},
               message:'Unable to update the user',
               success:false
           })
       }
    }



    const  getAllUserController=async(req,res)=>{
        try {
           const User=await user.getAllServiceUser();

           res.status(200).json({
               response:User,
               message:`Successfully get all the   user`,
               success:true
           })
       } catch (error) {
           
           res.status(401).json({
               response:{},
               message:'Unable to get  all the user',
               success:false
           })
       }
    }



    //sigin controller



   const signin=async (req,res)=>{
    try {
        const User=await user.userServiceSignIn(req.body);

        res.status(200).json({
            response:User,
            message:`Successfully signed in the   user`,
            success:true
        })
    } catch (error) {
        
        res.status(401).json({
            response:{},
            message:'Unable to get the user',
            success:false
        })
    }
   }

   //GET HEADERS

   const authenticate=async(req,res)=>{
            try {
                const headers=req.headers['x-access-token'];
                const User=await user.authenticateService(headers);

               return  res.status(200).json({
                    response:'Correct User',
                    message:`Successfully authenticated the  user`,
                    success:true
                })
            } catch (error) {       
                res.status(401).json({
                    response:{},
                    message:'Unable to authenticate the user',
                    success:false
                })
            }
   }
module.exports={
    createUserController,
    getAllUserController,
    getUserDeleteController,
    getUserUpdateController,
    getUserController,
    signin,
    authenticate
}