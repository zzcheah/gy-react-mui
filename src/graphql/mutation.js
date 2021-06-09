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

export const APPROVE_WORKER = gql`
  mutation ApproveWorker($input: String!) {
    approveWorker(input: $input) {
      id
    }
  }
`;

export const APPROVE_IMAGE = gql`
  mutation ApproveImage($input: String!) {
    approveImage(input: $input) {
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
      schema64
      description
    }
  }
`;
export const ADD_IMAGE_REQUEST = gql`
  mutation AddImageRequest($input: AddImageRequestInput!) {
    addImageRequest(input: $input) {
      id
      image
      tag
      remark
      schema64
      createdAt
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
