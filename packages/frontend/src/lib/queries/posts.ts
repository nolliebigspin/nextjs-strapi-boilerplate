import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query GetPosts {
    posts {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;
