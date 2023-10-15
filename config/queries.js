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

export const GET_SERVICE = gql`
query GET_SERVICE($id: ID = "") {
  service(id: $id, idType: SLUG) {
    id
    title
    slug
    seo {
      fullHead
    }
    services {
      grid {
        content
        heading
      }
      content {
        information {
          heading
          info
        }
        image {
          mediaItemUrl
        }
        cta {
          label
          value
        }
      }
    }
  }
}
`
