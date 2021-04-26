"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  extend type Query {
    categories(filter: CategoryFilter, options: QueryOptions): [Category]!
    category(id: ID): Category
  }

  type Category {
    name: String
    order: Int
  }

  input CategoryFilter {
    ids: [String]!
    name: String
  }
`;
