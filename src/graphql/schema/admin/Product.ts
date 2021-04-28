import { gql } from "apollo-server-core";

export default gql`
  extend type AdminMutation {
    product: AdminProductMutation
  }

  type AdminProductMutation {
    create(data: AdminProductCreateInput): AdminProduct
    update(id: ID, data: AdminProductUpdateInput): AdminProduct
    delete(id: ID): Boolean
  }

  type AdminProduct {
    id: ID
    name: FieldTranslation
    category: ID
    sales: Int
    price: Float
    picture: MediaPhoto
    file: String
    description: FieldTranslation
    demoUrl: String
    features: [ProductFeature]
    tags: [String]
  }
  input ProductFeatureInput {
    name: String
    value: String
  }
  input AdminProductCreateInput {
    name: InputTranslation!
    category: ID!
    sales: Int
    price: Float!
    picture: ID!
    file: String
    description: InputTranslation
    demoUrl: String
    features: [ProductFeatureInput]
    tags: [String]
  }
  input AdminProductUpdateInput {
    name: InputTranslation
    category: ID
    sales: Int
    price: Float
    picture: ID
    file: String
    description: InputTranslation
    demoUrl: String
    features: [ProductFeatureInput]
    tags: [String]
  }
`;
