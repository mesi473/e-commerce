const express=require('express');
const mongoose=require('mongoose');
var { graphqlHTTP } = require('express-graphql');
const cors=require('cors');
const schema=require('./schema');
const { graphqlUploadExpress } = require('graphql-upload');

const app=express();

app.use(cors());
app.use(express.json())
app.use(graphqlUploadExpress({ maxFileSize: 10000, maxFiles: 10 }));
app.use('/e-shope',
graphqlHTTP({
    schema:schema,
    graphiql: true,
    uploads: false
}))
mongoose.connect("mongodb://localhost:27017/tsega_e_shope",{useNewUrlParser: true,useUnifiedTopology: true})
    .then(res=>{
        console.log("mongodb server is running on 27017")
    })
    .catch(error=>console.log(error))
app.listen(5000,()=>console.log("server is running on port 5000"));