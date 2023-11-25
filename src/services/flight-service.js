const {flightRepository}=require('../repository/index');

class flightService {

    constructor(){
        this.flight=new flightRepository();
    }

    async createFlightService(data){
        try {
            const flight=this.flight.created(data);
             return flight;
        } catch (error) {
            console.log("Something went wrong in the flight Service");
            throw error
        }
    }

    async updateFlightService(data,id){
        try {
            const flight=this.flight.update(data,id);
             return flight;
        } catch (error) {
            console.log("Something went wrong in the flight Service");
            throw error
        }
    }

    async deleteFlightService(id){
        try {
            const flight=this.flight.getDelete(id);
             return flight;
        } catch (error) {
            console.log("Something went wrong in the flight Service");
            throw error
        }
    }


    async getFlightService(id){
        try {
            const flight=this.flight.getOne(id);
             return flight;
        } catch (error) {
            console.log("Something went wrong in the flight Service");
            throw error
        }
    }

    async getAllFlightService(){
        try {
            const flight=this.flight.getAl();
             return flight;
        } catch (error) {
            console.log("Something went wrong in the flight Service");
            throw error
        }
    }
}

module.exports=flightService;