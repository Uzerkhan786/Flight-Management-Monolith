class CrudRepository{
    constructor(model){
        this.model=model;
    }
  async created(data){
       
      const createcrud=await this.model.create(data);
      return createcrud;
  }
  async getOne(id){
      const getone=await this.modal.findByPk(id)
      return getone;
  }

  async getDelete(modelId){
      const deleteone=await this.modal.destroy({
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