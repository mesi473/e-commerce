const express=require('express');
const mongoose=require('mongoose');
var { graphqlHTTP } = require('express-graphql');
const cors=require('cors');
const schema=require('./schema');
const { graphqlUploadExpress } = require('graphql-upload');
const multer=require('multer');
const app=express();
const ProductModel =require('./model/Products');
const CatagoryModel=require('./model/Catagory');

app.use(cors());
app.use(express.json())
// app.use(graphqlUploadExpress({ maxFileSize: 10000, maxFiles: 10 }));
app.use('/e-shope',
graphqlHTTP({
    schema:schema,
    graphiql: true,
    uploads: false
}));


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    },
})
const upload=multer({storage:storage,limits:{fieldSize:24*1024*1024*1024}});


mongoose.connect("mongodb://localhost:27017/tsega_e_shope",{useNewUrlParser: true,useUnifiedTopology: true})
    .then(res=>{
        console.log("mongodb server is running on 27017")
    })
    .catch(error=>console.log(error))

app.use(express.static("uploads"));
app.post('/additem',upload.single("image"),async (req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const rating=req.body.rating;
    const amount=req.body.amount;
    const selling_price =req.body.selling_price;
    const bought_price =req.body.bought_price;
    const catagory=req.body.catagory;
    let image='';
    const error=[];
    if(req.file==null){
        error.push("image must be provided");
    }
    else{
        image=req.file.originalname;
    }
    if(!title || !description || !rating || !amount || 
        !selling_price || !bought_price || !image || !catagory){
        error.push("all fields are require");
    }
    else{
        await new ProductModel({
            imageUrl:image,title,description,rating,amount,bought_price,selling_price,catagory
        }).save().then(res1=>{
            ProductModel.find({}).then(response=>{
                res.json({error:[],items:response,status:true});
            })
        }).catch(error=>console.log(error));
    }
    if(error.length>0){
        res.json({error:error,items:[],status:false})
    }
})
app.post('/addcatagory',upload.single("image"),async (req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    let image='';
    const error=[];
    if(req.file==null){
        error.push("image must be provided");
    }
    else{
        image=req.file.originalname;
    }
    if(!title || !description || !image){
        error.push("all fields are require");
    }
    else{
        await new CatagoryModel({
            imageUrl:image,title,description
        }).save().then(res1=>{
            CatagoryModel.find({}).then(response=>{
                res.json({error:[],items:response,status:true});
            })
        }).catch(error=>console.log(error));
    }
    if(error.length>0){
        res.json({error:error,items:[],status:false})
    }
})
app.listen(5000,()=>console.log("server is running on port 5000"));