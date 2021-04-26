import { gql } from "apollo-server-core";

export default gql`
  extend type Query {
    user: User @auth
  }
  extend type Mutation {
    user: UserMutation @auth
  }
  enum UserRole {
    USER
    ADMIN
  }
  type UserMutation {
    update(input: UpdateUserInput): Boolean
  }

  type User {
    firebaseId: String
    name: String
    profilePicture: String
    role: UserRole
  }

  input UpdateUserInput {
    name: String
  }
`;
