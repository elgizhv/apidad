"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  type Query {
    Root: Boolean
  }
  type Mutation {
    Root: Boolean
  }

  input Translation {
    lang: String!
    value: String!
  }

  enum OrderType {
    ASC
    DESC
  }
  input FilterOrder {
    field: String!
    type: OrderType
  }

  input QueryOptions {
    order: [FilterOrder]!
    limit: Int
    skip: Int
  }
`;
