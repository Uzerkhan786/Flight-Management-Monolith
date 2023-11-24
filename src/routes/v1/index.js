const {userController}=require('../../controllers/index');

const express=require('express');
const router=express.Router();

router.post('/user',userController.createUserController);
router.patch('/user/:id',userController.getUserUpdateController);
router.delete('/user/:id',userController.getUserDeleteController);
router.get('/user/:id',userController.getUserController);
router.get('/user',userController.getAllUserController);


module.exports=router