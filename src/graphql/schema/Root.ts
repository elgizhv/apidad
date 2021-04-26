import { gql } from "apollo-server-core";

import types from "./types";

export default gql`
  type Query {
    Root: Boolean @auth
  }
  type Mutation {
    Root: Boolean @isAdmin
  }

  ${types}
`;
