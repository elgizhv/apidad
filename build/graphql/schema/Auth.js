"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  extend type Mutation {
    auth(authToken: String): AuthPayload
  }

  type AuthPayload {
    token: String!
    user: User
  }
`;
