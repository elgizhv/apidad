"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  extend type AdminMutation {
    user: AdminUserMutation
  }

  type AdminUserMutation {
    update(input: AdminUserUpdateInput): Boolean
  }

  input AdminUserUpdateInput {
    name: String
    role: UserRole
  }
`;
