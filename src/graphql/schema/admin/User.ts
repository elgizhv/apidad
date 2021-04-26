import { gql } from "apollo-server-core";

export default gql`
  extend type AdminMutation {
    user: AdminUserMutation
  }

  type AdminUserMutation {
    update(input: AdminUserUpdateInput): Boolean
  }

  input AdminUserUpdateInput {
    name: String
    role: UserRole
  }
`;
