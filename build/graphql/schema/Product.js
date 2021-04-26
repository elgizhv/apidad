"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  extend type Query {
    products(filter: ProductFilter, options: QueryOptions): [Product]!
    product(id: ID): Product
  }

  type Product {
    name: String
    category: Category
    sales: Int
    picture: String
    file: String
    description: String
    demoUrl: String
  }
  input ProductFilter {
    category: String
    name: String
  }
`;
