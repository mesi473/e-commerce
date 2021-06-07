import {gql} from '@apollo/client';

export const addItem=gql`
    mutation add_product($file:Upload!){
        addProduct(file:$file):{
            {id}
        }
    }
`