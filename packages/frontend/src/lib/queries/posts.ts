import { gql } from "@apollo/client";

export const GET_POSTS = gql`
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
