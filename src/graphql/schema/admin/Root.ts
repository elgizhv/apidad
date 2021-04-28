import { gql } from "apollo-server-express";

import User from "./User";
import Category from "./Category";
import Product from "./Product";

export default gql`
  type AdminMutation {
    root: String
  }
  extend type Mutation {
    Admin: AdminMutation @isAdmin
  }

  ${User}
  ${Category}
  ${Product}
`;
