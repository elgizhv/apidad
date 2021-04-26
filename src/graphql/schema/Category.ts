import { gql } from "apollo-server-core";

export default gql`
  extend type Query {
    categories(filter: CategoryFilter, options: QueryOptions): [Category]!
      @isAdmin
    category(id: ID): Category
  }

  type Category {
    id: ID
    name: String
    order: Int
  }

  input CategoryFilter {
    ids: [String]!
    name: String
  }
`;
