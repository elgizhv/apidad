"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("../graphql");
const config_1 = require("../config");
function default_1(httpServer, app) {
    const server = new apollo_server_express_1.ApolloServer({
        schema: graphql_1.schema,
        context: ({ req }) => ({
            user: req.user,
            lang: req.lang || config_1.defaultLanguage,
        }),
        introspection: true,
        playground: true,
    });
    server.installSubscriptionHandlers(httpServer);
    server.applyMiddleware({ app });
    return server;
}
exports.default = default_1;
