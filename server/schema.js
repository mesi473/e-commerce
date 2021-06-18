const  graphql =require( 'graphql');
const CatagoryModel=require('./model/Catagory');
const CustomerBillInfoModel=require('./model/CustomerBill');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLInputObjectType
} =graphql;
const ProductModel=require('./model/Products');





const ProductType=new GraphQLObjectType({
    name:"Product",
    fields:()=>({
        _id:{type:new GraphQLNonNull(GraphQLID)},
        title:{type:new GraphQLNonNull(GraphQLString)},
        selling_price:{type:new GraphQLNonNull(GraphQLFloat)},
        bought_price:{type:new GraphQLNonNull(GraphQLFloat)},
        imageUrl:{type:new GraphQLNonNull(GraphQLString)},
        rating:{type:new GraphQLNonNull(GraphQLFloat)},
        description:{type:new GraphQLNonNull(GraphQLString)},
        amount:{type:new GraphQLNonNull(GraphQLFloat)}
    })
});
const SoldItemType=new GraphQLObjectType({
    name:"SoldItem",
    fields:()=>({
        _id:{type:new GraphQLNonNull(GraphQLID)},
        qty:{type:new GraphQLNonNull(GraphQLString)},
    })
});
const SoldType=new GraphQLInputObjectType({
    name:"Sold",
    fields:()=>({
        _id:{type:new GraphQLNonNull(GraphQLID)},
        qty:{type:new GraphQLNonNull(GraphQLString)},
    })
})
const CustomerType=new GraphQLObjectType({
    name:"Customer",
    fields:()=>({
        _id:{type:new GraphQLNonNull(GraphQLID)},
        firstName:{type:new GraphQLNonNull(GraphQLString)},
        lastName:{type:new GraphQLNonNull(GraphQLString)},
        country:{type:new GraphQLNonNull(GraphQLString)},
        street:{type:new GraphQLNonNull(GraphQLString)},
        latitute:{type:new GraphQLNonNull(GraphQLString)},
        longitute:{type:new GraphQLNonNull(GraphQLString)},
        zoom:{type:new GraphQLNonNull(GraphQLString)},
        phoneNumber:{type:new GraphQLNonNull(GraphQLString)},
        secrateKey:{type:new GraphQLNonNull(GraphQLString)},
        cartItem:{type:new  GraphQLList(SoldItemType)},
        date:{type:new GraphQLNonNull(GraphQLString)},
    })
});


const CatagoryType=new GraphQLObjectType({
    name:"Catagory",
    fields:()=>({
        _id:{type:new GraphQLNonNull(GraphQLID)},
        title:{type:new GraphQLNonNull(GraphQLString)},
        imageUrl:{type:new GraphQLNonNull(GraphQLString)},
        description:{type:new GraphQLNonNull(GraphQLString)},
    })
})

const RootQuery=new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        product:{
            type:new GraphQLList(ProductType),
            resolve(parent,args){
                return ProductModel.find({});
            }
        },
        catagory:{
            type:new GraphQLList(CatagoryType),
            resolve(parent,args){
                return CatagoryModel.find({})
            }
        },
        customer_bill_info:{
            type:new GraphQLList(CustomerType),
            resolve(parent,args){
                return CustomerBillInfoModel.find({});
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
        add_customer_bill_info:{
            type:CustomerType,
            args:{
                firstName:{type:new GraphQLNonNull(GraphQLString)},
                lastName:{type:new GraphQLNonNull(GraphQLString)},
                country:{type:new GraphQLNonNull(GraphQLString)},
                street:{type:new GraphQLNonNull(GraphQLString)},
                latitute:{type:new GraphQLNonNull(GraphQLString)},
                longitute:{type:new GraphQLNonNull(GraphQLString)},
                zoom:{type:new GraphQLNonNull(GraphQLString)},
                phoneNumber:{type:new GraphQLNonNull(GraphQLString)},
                secrateKey:{type:new GraphQLNonNull(GraphQLString)},
                cartItem:{type:new GraphQLList(SoldType)},
            },
            resolve(parent,args){
               new CustomerBillInfoModel({
                firstName:args.firstName,
                lastName:args.lastName,
                country:args.country,
                street:args.street,
                latitute:args.latitute,
                zoom:args.zoom,
                phoneNumber:args.phoneNumber,
                secrateKey:args.secrateKey,
                cartItem:args.cartItem
               })
                
            }
        }
    }
})


module.exports =schema=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation,
})