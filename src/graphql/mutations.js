import { gql } from '@apollo/client';
// @Auth Mutations
export const SIGN_UP = gql`
  mutation SignUp($data: signUpInput!) {
    signUp(data: $data) {
      token
      id
      identifier
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($data: loginInput!) {
    login(data: $data) {
      identifier
      id
      token
    }
  }
`;
export const LOGOUT = gql`
  mutation LogOut {
    logout {
      message
    }
  }
`;
