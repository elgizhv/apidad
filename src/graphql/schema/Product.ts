import { gql } from "apollo-server-core";

export default gql`
  extend type Query {
    products(filter: ProductFilter, options: QueryOptions): [Product]!
    product(id: ID): Product
  }

  type Product {
    id: ID
    name: String
    category: Category
    sales: Int
    price: Float
    picture: MediaPhoto
    file: String
    description: String
    demoUrl: String
    features: [ProductFeature]
    tags: [String]
  }
  type ProductFeature {
    name: String
    value: String
  }
  input ProductFilter {
    category: String
    name: String
  }
`;
