import {gql} from '@apollo/client';

export const addProductProperty=gql`
    mutation addProduct($title:String!,$Image:Upload!,$description:String!,$price:Float!,$rating:Float!,$amount:Float!){
        add_Product(title:$title,Image:$Image,description:$description,price:$price,rating:$rating,amount:$amount){
            title
            Image
            description
            amount
            price
            rating
            
        }
        
    }
`