const CrudRepository=require('./crud-repository');
const {Booking}=require('../models/index')
class bookingRepository extends CrudRepository{
    constructor(){
        super(Booking)
    }
}
module.exports=bookingRepository