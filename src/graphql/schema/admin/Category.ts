import { gql } from "apollo-server-core";

export default gql`
  extend type AdminMutation {
    category: AdminCategoryMutation
  }

  type AdminCategoryMutation {
    create(data: AdminCreateCategoryInput): AdminCategory
  }

  type AdminCategory {
    id: ID
    name: FieldTranslation
    order: Int
  }

  input AdminCreateCategoryInput {
    name: InputTranslation
  }
`;
