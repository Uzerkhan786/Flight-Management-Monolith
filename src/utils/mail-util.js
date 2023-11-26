const{transport}=require('../config/mail-config');
const UserMail=async(mailTo,subejctTo,textTo)=>{

     try {
        const user=transport.sendMail({
          
            to:mailTo,
            subject:subejctTo,
            text:textTo
            
        })
        return user;
    } catch (error) {
    throw error
   }
    
}

module.exports={UserMail}
