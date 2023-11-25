const CrudRepository=require('./crud-repository');
const {Airport}=require('../models/index');

class airportRepository extends CrudRepository{

    constructor(){
        super(Airport)
    }
}

module.exports=airportRepository;