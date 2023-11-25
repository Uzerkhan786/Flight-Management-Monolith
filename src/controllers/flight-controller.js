const{flightService}=require('../services/index');
const flight=new flightService();

const createFlightController=async(req,res)=>{
    try {
        const  Flight=await flight.createFlightService(req.body);
        res.status(200).json({
            message:'Successfully created the flight',
            response:Flight,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot create the flight',
            response:{},
            error:error,
            success:false,

        })
    }
}


const updateFlightController=async(req,res)=>{
    try {
        const  Flight=await flight.updateFlightService(req.body,req.params.id);
        res.status(200).json({
            message:'Successfully updated  the flight',
            response:Flight,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot update the flight ',
            response:{},
            error:error,
            success:false,

        })
    }
}



const getOneFlightController=async(req,res)=>{
    try {
        const  Flight=await flight.getFlightService(req.params.id);
        res.status(200).json({
            message:'Successfully get  the particular  flight',
            response:Flight,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot get the particular flight',
            response:{},
            error:error,
            success:false,

        })
    }
}



const deleteFlightController=async(req,res)=>{
    try {
        const  Flight=await flight.deleteFlightService(req.params.id);
        res.status(200).json({
            message:'Successfully deleted the flight',
            response:Flight,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot deletd the flight',
            response:{},
            error:error,
            success:false,

        })
    }
}


const getAllFlightController=async(req,res)=>{
    try {
        const  Flight=await flight.getAllFlightService();
        res.status(200).json({
            message:'Successfully fetched all the flights',
            response:Flight,
            error:{},
            success:false,

        })
    } catch (error) {
        res.status(401).json({
            message:'Cannot get all the  flights',
            response:{},
            error:error,
            success:false,

        })
    }
}

module.exports={
    createFlightController,
    getOneFlightController,
    updateFlightController,
    deleteFlightController,
    getAllFlightController
}