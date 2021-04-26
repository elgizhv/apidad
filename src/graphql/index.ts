import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import schemaDirectives from "./directives";

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives,
});

export { schema };
