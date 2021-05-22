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

export const GET_DOCKER_IMAGES = gql`
  query DockerImages {
    dockerImages {
      id
      name
      tags {
        tag
        description
      }
      usageCount
      description
    }
  }
`;

export const LIST_WORKERS = gql`
  query ListWorkers {
    workerList {
      id
      name
      maxTasks
      ipAddress
      lastActive
      status
      runningTasks
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    allUsers {
      id
      name
      email
      phone
    }
  }
`;

export const GET_ALL_REQUESTS = gql`
  query GetAllRequests {
    allRequests {
      id
    }
  }
`;
