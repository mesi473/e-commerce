import {gql} from '@apollo/client';

export const addItem=gql`
    mutation add_product($title:String!,$Image:Upload!,$description:String!,$price:String!,$rating:Number!,$amount:Number!){
        add_product(name:$name,genre:$genre,authorId:$authorId){
            
        }
    }
`