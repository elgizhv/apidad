import { SchemaDirectiveVisitor } from "@graphql-tools/utils";
import { defaultFieldResolver } from "graphql";
import { UserRole } from "../../database/model/User";

class IsAdminDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...args: any[]) {
      // extract user from context
      const { user } = args[2];

      if (user?.role != UserRole.ADMIN) {
        throw new Error("permission_deined");
      }

      return resolve.apply(this, args);
    };
  }
}

export default IsAdminDirective;
