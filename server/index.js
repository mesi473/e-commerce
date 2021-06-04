const express=require('express');
const mongoose=require('mongoose');
var { graphqlHTTP } = require('express-graphql');
const cors=require('cors');
const schema=require('./schema')

const app=express();


app.use('/e-shope',graphqlHTTP({
    schema:schema,
    graphiql: true
}))
mongoose.connect("mongodb://localhost:27017/tsega_e_shope",{useNewUrlParser: true,useUnifiedTopology: true})
    .then(res=>{
        console.log("mongodb server is running on 27017")
    })
    .catch(error=>console.log(error))
app.listen(5000,()=>console.log("server is running on port 5000"));