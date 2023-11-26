const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
const {PORT}=require('./config/config-env')
const router=require('./routes/index')
app.use('/api',router);

app.listen(PORT,async()=>{
    
    
    console.log(`Server is running at ${PORT}`);
})

