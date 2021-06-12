const  graphql =require( 'graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { GraphQLUpload } = require('graphql-upload');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLList,
    GraphQLBoolean,
    buildSchema
} =graphql;
const ProductModel=require('./model/Products')




// const schema = makeExecutableSchema({
//     typeDefs: /*  */ `
//         scalar Upload
//     `,
//     resolvers: {
//         Upload: GraphQLUpload,
//     },
// });

const ProductType=new GraphQLObjectType({
    name:"Product",
    fields:()=>({
        title:{type:new GraphQLNonNull(GraphQLString)},
        price:{type:new GraphQLNonNull(GraphQLFloat)},
        // Image:{type:new GraphQLNonNull(GraphQLUpload)},
        rating:{type:new GraphQLNonNull(GraphQLFloat)},
        description:{type:new GraphQLNonNull(GraphQLString)},
        amount:{type:new GraphQLNonNull(GraphQLFloat)}
    })
});

const RootQuery=new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        product:{
            type:new GraphQLList(ProductType),
            resolve(parent,args){
                return ProductModel.find({})
            }
        }
    }
});

const Mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
        add_Product:{
            type:ProductType,
            args:{
                title:{type:new GraphQLNonNull(GraphQLString)},
                price:{type:new GraphQLNonNull(GraphQLFloat)},
                // Image:{type:new GraphQLNonNull(GraphQLUpload)},
                rating:{type:new GraphQLNonNull(GraphQLFloat)},
                description:{type:new GraphQLNonNull(GraphQLString)},
                amount:{type:new GraphQLNonNull(GraphQLFloat)}
            },
            resolve(parent,args){
                console.log(args)
                // return  new ProductModel({
                //     title:args.title,
                //     price:args.price,
                //     imageUrl:args.imageUrl,
                //     rating:args.rating,
                //     description:args.description,
                //     amount:args.amount
                // }).save().then().catch(error=>console.log(error))
            }
        },
        deleteProduct:{
            type:ProductType,
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent,args){
                return ProductModel.deleteOne({_id:args.id});
            }
        },
        editProduct:{
            type:ProductType,
            args:{
                title:{type:new GraphQLNonNull(GraphQLString)},
                price:{type:new GraphQLNonNull(GraphQLFloat)},
                imageUrl:{type:new GraphQLNonNull(GraphQLString)},
                rating:{type:new GraphQLNonNull(GraphQLFloat)},
                description:{type:new GraphQLNonNull(GraphQLFloat)},
                amount:{type:new GraphQLNonNull(GraphQLFloat)}
            },
            resolve(parent,args){
                return ProductModel.update({_id:args.id},{
                    title:args.title,
                    price:args.price,
                    imageUrl:args.imageUrl,
                    rating:args.rating,
                    description:args.description,
                    amount:args.amount
                })
                
            }
        },
    }
})


module.exports =schema=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation,
})