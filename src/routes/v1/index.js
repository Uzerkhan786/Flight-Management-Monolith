const {userController,bookingController,flightController}=require('../../controllers/index');
const{check}=require('../../middlewares/auth-middle')
const express=require('express');
const router=express.Router();
//AUTHENTICATION ROUTES
router.post('/user/signup',userController.createUserController);
router.post('/user/signin',userController.signin);
router.patch('/user/:id',userController.getUserUpdateController);
router.delete('/user/:id',userController.getUserDeleteController);
router.get('/user/:id',userController.getUserController);
router.get('/user',userController.getAllUserController);
router.get('/authenticate',userController.authenticate)


//FLIGHTS ROUTES
router.post('/flight',flightController.createFlightController);
router.patch('/flight/:id',flightController.updateFlightController);
router.delete('/flight/:id',flightController.deleteFlightController);
router.get('/flight/:id',flightController.getOneFlightController);
router.get('/flight',flightController.getAllFlightController);


//BOOKING ROUTES
router.post('/booking',check,bookingController.createBookingController);
router.patch('/booking/:id',bookingController.updateBookingController);
router.delete('/booking/:id',bookingController.deleteBookingController);
router.get('/booking/:id',bookingController.getOneBookingController);
router.get('/booking',bookingController.getAllBookingController);





module.exports=router