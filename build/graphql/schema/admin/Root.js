"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const Category_1 = __importDefault(require("./Category"));
const User_1 = __importDefault(require("./User"));
exports.default = apollo_server_core_1.gql `
  type AdminMutation {
    root: String
  }
  extend type Mutation {
    Admin: AdminMutation
  }

  ${User_1.default}
  ${Category_1.default}
`;
