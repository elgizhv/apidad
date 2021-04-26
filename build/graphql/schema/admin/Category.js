"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  extend type AdminMutation {
    category: AdminCategoryMutation
  }

  type AdminCategoryMutation {
    create(data: AdminCreateCategoryInput): Category
  }

  input AdminCreateCategoryInput {
    name: [Translation!]!
  }
`;
