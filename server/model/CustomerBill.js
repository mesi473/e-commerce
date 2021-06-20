

const mongoose=require('mongoose');

const CustomerBillInfo =mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    region:{
        type:String,
        require:true
    },
    street:{
        type:String,
        require:true
    },
    latitute:{
        type:String,
        require:true
    },
    longitute:{
        type:String,
        require:true
    },
    zoom:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true
    },
    secrateKey:{
        type:String,
        require:true
    },
    cartItem:{
        type:Array,
        require:true
    },
    date:{
        type:String,
        default:Date.now()
    },
})
module.exports=CustomerBillInfoModel=mongoose.model('Customer_bill_info',CustomerBillInfo);