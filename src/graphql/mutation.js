import { gql } from "@apollo/client";

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
