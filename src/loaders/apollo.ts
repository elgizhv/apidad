import http from "http";
import { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "../graphql";
import { defaultLanguage } from "../config";

export default function (httpServer: http.Server, app: Express) {
  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({
      user: req.user,
      lang: req.lang || defaultLanguage,
    }),
    introspection: true,
    playground: true,
  });
  server.installSubscriptionHandlers(httpServer);

  server.applyMiddleware({ app });
  return server;
}
