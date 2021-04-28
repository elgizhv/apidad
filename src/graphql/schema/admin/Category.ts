import { gql } from "apollo-server-core";

export default gql`
  extend type AdminMutation {
    category: AdminCategoryMutation
  }

  type AdminCategoryMutation {
    create(data: AdminCreateCategoryInput): AdminCategory
    update(id: ID, data: AdminCreateCategoryInput): AdminCategory
    delete(id: ID, recursive: Boolean): Boolean
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
