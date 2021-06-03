import { gql } from "@apollo/client";

export const MY_REQUESTS = gql`
  query {
    myRequests {
      id
      name
      status
      createdAt
      title
      image
      encodedParam
      inputFiles
      outputFiles
      assignedTo
      remark
    }
  }
`;

export const REQUEST_COUNTS = gql`
  query {
    countRequests
  }
`;

export const WORKER_APPLICATIONS = gql`
  query WorkerApplications {
    workerApplications {
      id
      name
      maxTasks
      ipAddress
      email
      createdAt
    }
  }
`;

export const IMAGE_REQUESTS = gql`
  query ImageRequests {
    imageRequests {
      id
      image
      tag
      remark
      createdAt
    }
  }
`;

export const NOTIFICATION_LIST = gql`
  query NotificationList {
    notificationList {
      id
      isRead
      user
      content
      severity
      createdAt
      link
    }
  }
`;

export const GET_DOCKER_IMAGES = gql`
  query DockerImages {
    dockerImages {
      id
      name
      tags {
        id
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
      status
      role
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
