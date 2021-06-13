const mongoose=require('mongoose');

const Catagory =mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
})
module.exports=CatagoryModel=mongoose.model('Catagory',Catagory);