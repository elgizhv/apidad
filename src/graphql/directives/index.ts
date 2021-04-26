import AuthDirective from "./auth";
import IsAdminDirective from "./is-admin";

const schemaDirectives = {
  auth: AuthDirective,
  isAdmin: IsAdminDirective,
};

export default schemaDirectives;
