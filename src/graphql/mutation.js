import { gql } from "@apollo/client";

export const CREATE_REQUEST = gql`
  mutation CreateRequest($input: CreateRequestInput!) {
    createRequest(input: $input) {
      id
      createdAt
      title
      name
    }
  }
`;

export const REGISTER_WORKER = gql`
  mutation RegisterWorker($input: RegisterWorkerInput!) {
    registerWorker(input: $input) {
      id
    }
  }
`;

export const ADD_NEW_IMAGE = gql`
  mutation AddNewImage($input: AddNewImageInput!) {
    addNewImage(input: $input) {
      id
      image
      tag
      description
    }
  }
`;

export const SET_READ_NOTIFICATION = gql`
  mutation SetReadNotification($input: String!) {
    setReadNotification(input: $input) {
      id
      isRead
    }
  }
`;
