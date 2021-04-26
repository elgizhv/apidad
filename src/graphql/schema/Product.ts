import { gql } from "apollo-server-core";

export default gql`
  extend type Query {
    products(filter: ProductFilter, options: QueryOptions): [Product]!
    product(id: ID): Product
  }

  type Product {
    name: String
    category: Category
    sales: Int
    picture: String
    file: String
    description: String
    demoUrl: String
  }
  input ProductFilter {
    category: String
    name: String
  }
`;
