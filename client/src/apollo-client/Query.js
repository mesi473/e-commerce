import {gql} from '@apollo/client';

export const ProductQuery=gql`
    {
        product{
            _id
            title
            imageUrl
            description
            amount
            selling_price
    		bought_price
            rating
        }
    }
`
export const CatagoryQuery=gql`
    {
        catagory{
            _id
            title,
            imageUrl,
            description
        }
    }
`