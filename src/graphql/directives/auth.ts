import { SchemaDirectiveVisitor } from "@graphql-tools/utils";
import { defaultFieldResolver } from "graphql";

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...args: any[]) {
      // extract user from context
      const { user } = args[2];

      if (!user) {
        throw new Error("unauthorized");
      }

      return resolve.apply(this, args);
    };
  }
}

export default AuthDirective;
