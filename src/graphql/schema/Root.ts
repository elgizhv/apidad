import { gql } from "apollo-server-core";

import types from "./types";

export default gql`
  type Query {
    Root: Boolean
  }
  type Mutation {
    Root: Boolean
  }

  ${types}
`;
