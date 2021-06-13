const mongoose=require('mongoose');

const Product =mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    bought_price:{
        type:Number,
        require:true
    },
    selling_price:{
        type:Number,
        require:true
    },
    imageUrl:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    catagory:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    }
})
module.exports=ProductModel=mongoose.model('product',Product);