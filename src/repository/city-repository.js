const CrudRepository=require('./crud-repository');
const {City}=require('../models/index')
class cityRepository extends CrudRepository{
    constructor(){
      super(City)
    }
}

module.exports=cityRepository