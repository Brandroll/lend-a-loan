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

export const advanceServices = gql`
query advanceServices{
  advanceServices {
    nodes {
      title
      slug
    }
  }
}`


export const advanceService = gql`
query advanceService($id: ID = "") {
  advanceService(id: $id, idType: SLUG) {
    slug
    title
    uri
    header {
      heading
      image {
        mediaItemUrl
      }
      video
    }
    seo {
      fullHead
    }
    services {
      content {
        cta {
          value
          label
        }
        image {
          mediaItemUrl
        }
        information {
          heading
          info
        }
      }
      grid {
        heading
        content
      }
    }
    
  }
}`