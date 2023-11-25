const {bookingRepository}=require('../repository/index');
const{flightRepository}=require('../repository/index');
const flight=new flightRepository();

class bookingService {

    constructor(){
        this.booking=new bookingRepository();
        
    }

    async createBookingService(data){
        try {
            const oneFlightData=await flight.getOne(data.flightId);
            const response=oneFlightData.dataValues;
            let cost=response.price;
            const total=cost*data.seat;
            const remainSeat=response.totalseat-data.seat;
            const booking=await this.booking.created({...data,totalcost:total});
            const updateFlight=await flight.update(data.flightId,{
                totalseat:remainSeat
            })
            console.log(remainSeat);
            return booking;
        } catch (error) {
            console.log('something went wrong in the services');
            throw error
        }
       
    }

    async updateBookingService(data,id){

        try {
            const booking=await this.booking.update(data,id);
            return booking;
        } catch (error) {
            console.log('something went wrong in the services');
            throw error
        }
    }


    async getBookingService(id){

        try {
            const booking=await this.booking.getOne(id);
            return booking;
        } catch (error) {
            console.log('something went wrong in the services');
            throw error
        }
    }


    async deleteBookingService(id){

        try {
            const booking=await this.booking.getDelete(id);
            return booking;
        } catch (error) {
            console.log('something went wrong in the services');
            throw error
        }
    }


    async getAllBookingService(){

        try {
            const booking=await this.booking.getAl();
            return booking;
        } catch (error) {
            console.log('something went wrong in the services');
            throw error
        }
    }
}

module.exports=bookingService;