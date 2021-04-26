import { gql } from "apollo-server-core";

export default gql`
  extend type AdminMutation {
    category: AdminCategoryMutation @isAdmin
  }

  type AdminCategoryMutation {
    create(data: AdminCreateCategoryInput): AdminCategory @isAdmin
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
