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
`;

export const AdvanceService = gql`
  query AdvanceService {
    menuItems(where: { location: SOLUTIONS }) {
      nodes {
        label
        uri
      }
    }
  }
`;

export const Footer1 = gql`
  query Footer1 {
    menuItems(where: { location: FOOTER1 }) {
      nodes {
        label
        uri
      }
    }
  }
`;

export const Footer2 = gql`
  query Footer2 {
    menuItems(where: { location: FOOTER2 }) {
      nodes {
        label
        uri
      }
    }
  }
`;

export const GET_SERVICE = gql`
  query GET_SERVICE($id: ID = "") {
    service(id: $id, idType: SLUG) {
      id
      title
      slug
      seo {
        fullHead
      }
      header {
        heading
        image {
          mediaItemUrl
        }
        video
      }
      services {
        topSection {
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
        bottomSection {
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
    }
  }
`;

export const advanceServices = gql`
  query advanceServices {
    advanceServices {
      nodes {
        title
        slug
      }
    }
  }
`;

export const CalcMenu = gql`
  query CalcMenu {
    menuItems(where: { location: CALC }) {
      nodes {
        label
        uri
      }
    }
  }
`;

export const advanceService = gql`
  query advanceService($id: ID = "") {
    advanceService(id: $id, idType: SLUG) {
      slug
      title
      uri
      content
      header {
        heading
        image {
          mediaItemUrl
        }
        video
      }
      seo {
        fullHead
        canonical
        title
        metaDesc
        opengraphTitle
        opengraphUrl
        opengraphSiteName
        opengraphType
        opengraphDescription
      }
      services {
        topSection {
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
      bottomSection {
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
      advanceServices {
        relatedPages {
          loanTitle
          loanType
        }
      }
    }
  }
`;

