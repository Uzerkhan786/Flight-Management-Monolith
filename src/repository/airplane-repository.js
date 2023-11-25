const CrudRepository=require('./crud-repository');
const {Airplane}=require('../models/index')
class airplaneRepository extends CrudRepository{
     constructor(){
        super(Airplane)
     }
}
module.exports=airplaneRepository