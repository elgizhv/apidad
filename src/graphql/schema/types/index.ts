import { gql } from "apollo-server-core";
import QueryOptions from "./QueryOptions";
import Translation from "./Translation";
export default gql`
  directive @isAdmin on FIELD_DEFINITION
  directive @auth on FIELD_DEFINITION

  ${QueryOptions}
  ${Translation}
`;
