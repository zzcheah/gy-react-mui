import { gql } from "@apollo/client";

export const MY_REQUESTS = gql`
  query {
    myRequests {
      id
      status
      createdAt
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
