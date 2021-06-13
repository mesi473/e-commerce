import {gql} from '@apollo/client';

export const ProductQuery=gql`
    {
        product{
        title
        imageUrl
        description
        amount
        price
        rating
    }
    }
`
export const CatagoryQuery=gql`
    {
        catagory{
        title,
        imageUrl,
        description
    }
    }
`