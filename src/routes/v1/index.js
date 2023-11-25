const {userController}=require('../../controllers/index');

const express=require('express');
const router=express.Router();

router.post('/user/signup',userController.createUserController);
router.post('/user/sigin',userController.signin);
router.patch('/user/:id',userController.getUserUpdateController);
router.delete('/user/:id',userController.getUserDeleteController);
router.get('/user/:id',userController.getUserController);
router.get('/user',userController.getAllUserController);
router.get('/authenticate',userController.authenticate)


module.exports=router