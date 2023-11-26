class CrudRepository{
    constructor(model){
        this.model=model;
    }
  async created(data){
       
      const createcrud=await this.model.create(data);
      return createcrud;
  }

  async updated(id,data){
       
    const createcrud=await this.model.update(data,{
        where:{
            id:id
        }
    });
    return createcrud;
}
  async getOne(id){
      const getone=await this.model.findByPk(id)
      return getone;
  }

  async getDelete(modelId){
      const deleteone=await this.model.destroy({
          where:{
              id:modelId
          }
      })
      return deleteone;
  }
  async getAl(){
      const airport=await this.model.findAll();
      return airport;
  }
}
module.exports=CrudRepository;