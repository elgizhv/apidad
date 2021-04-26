import { gql } from "apollo-server-express";

import Category from "./Category";
import User from "./User";

export default gql`
  type AdminMutation {
    root: String
  }
  extend type Mutation {
    Admin: AdminMutation @isAdmin
  }

  ${User}
  ${Category}
`;
