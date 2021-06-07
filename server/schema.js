const  graphql =require( 'graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLList,
} =graphql;
const ProductModel=require('./model/Products')

const ProductType=new GraphQLObjectType({
    name:"Product",
    fields:()=>({
        title:{type:new GraphQLNonNull(GraphQLString)},
        price:{type:new GraphQLNonNull(GraphQLFloat)},
        imageUrl:{type:new GraphQLNonNull(GraphQLString)},
        rating:{type:new GraphQLNonNull(GraphQLFloat)},
        description:{type:new GraphQLNonNull(GraphQLFloat)},
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
        addProduct:{
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

                return  new ProductModel({
                    title:args.title,
                    price:args.price,
                    imageUrl:args.imageUrl,
                    rating:args.rating,
                    description:args.description,
                    amount:args.amount
                }).save().then().catch(error=>console.log(error))
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
module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})