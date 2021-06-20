import {gql} from '@apollo/client';

export const CustomerBillInfo=gql`
    mutation CustomerBillInfo(
                $firstName:String!,
                $lastName:String!,
                $country:String!,
                $region: String!
                $street:String!,
                $latitute:String!,
                $longitute:String!
                $zoom:String!,
                $phoneNumber:String!,
                $secrateKey:String!,
                $cartItem:Array!){
        add_customer_bill_info(
            firstName:$firstName,
            lastName:$lastName,
            country:$country,
            region:$region,
            street:$street,
            latitute:$latitute,
            longitute:$longitute,
            zoom:$zoom,
            phoneNumber:$phoneNumber,
            secrateKey:$secrateKey,
            cartItem:$cartItem
        ){
            success
            error
        }
        
    }
`