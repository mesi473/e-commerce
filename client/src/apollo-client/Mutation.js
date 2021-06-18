import {gql} from '@apollo/client';

export const addProductProperty=gql`
    mutation maddCustomerBillInfo(
                $firstName:args.firstName,
                $lastName:args.lastName,
                country:args.country,
                street:args.street,
                latitute:args.latitute,
                zoom:args.zoom,
                phoneNumber:args.phoneNumber,
                secrateKey:args.secrateKey,
                cartItem:args.cartItem){
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