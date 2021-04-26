"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
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
