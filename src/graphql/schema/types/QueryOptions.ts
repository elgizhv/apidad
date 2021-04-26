import { gql } from "apollo-server-core";

export default gql`
  enum OrderType {
    ASC
    DESC
  }
  input FilterOrder {
    field: String!
    type: OrderType
  }

  input QueryOptions {
    order: [FilterOrder]!
    limit: Int
    skip: Int
  }
`;
