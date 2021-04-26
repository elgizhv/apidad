import { gql } from "apollo-server-core";

export default gql`
  extend type Query {
    user(id: ID): User
  }
  extend type Mutation {
    user: UserMutation
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
