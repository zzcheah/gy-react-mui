import { gql } from "@apollo/client";

export const MY_REQUESTS = gql`
  query {
    myRequests {
      id
      status
      createdAt
      title
      image
      user {
        email
      }
    }
  }
`;

export const REQUEST_COUNTS = gql`
  query {
    countRequests
  }
`;
