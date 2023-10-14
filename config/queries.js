import { gql } from '@apollo/client';

export const AllServices = gql`
query AllServices {
     services {
       nodes {
         title
         slug
       }
     }
   }
`