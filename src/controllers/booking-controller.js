const{bookingService}=require('../services/index');
const Booking=new bookingService();

const createBookingController=async(req,res)=>{
    try {
        const booking=await Booking.createBookingService(req.body);
        res.status(200).json({
            message:'Successfully done the booking',
            response:booking,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot create the booking controller',
            response:{},
            error:error,
            success:false,

        })
    }
}


const updateBookingController=async(req,res)=>{
    try {
        const booking=await Booking.updateBookingService(req.body,req.params.id);
        res.status(200).json({
            message:'Successfully updated the booking of user',
            response:booking,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot update the booking of user',
            response:{},
            error:error,
            success:false,

        })
    }
}



const getOneBookingController=async(req,res)=>{
    try {
        const booking=await Booking.getBookingService(req.params.id);
        res.status(200).json({
            message:'Successfully get  the booking',
            response:booking,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot get  the booking  of user',
            response:{},
            error:error,
            success:false,

        })
    }
}



const deleteBookingController=async(req,res)=>{
    try {
        const booking=await Booking.deleteBookingService(req.params.id);
        res.status(200).json({
            message:'Successfully deleted the booking',
            response:booking,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot delete  the booking ',
            response:{},
            error:error,
            success:false,

        })
    }
}


const getAllBookingController=async(req,res)=>{
    try {
        const booking=await Booking.getAllBookingService();
        res.status(200).json({
            message:'Successfully get all  the booking',
            response:booking,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot get all  the booking',
            response:{},
            error:error,
            success:false,

        })
    }
}

module.exports={
    createBookingController,
    updateBookingController,
    getOneBookingController,
    getAllBookingController,
    deleteBookingController
}