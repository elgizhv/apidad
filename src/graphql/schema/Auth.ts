import { gql } from "apollo-server-core";

export default gql`
  extend type Mutation {
    auth(authToken: String): AuthPayload
  }

  type AuthPayload {
    token: String!
    user: User
  }
`;
