import http from "http";

// Loaders
import loadExpress from "./loaders/express";
import loadApollo from "./loaders/apollo";

const app = loadExpress(); // Load Express
const httpServer = http.createServer(app); // create Http Server

const server = loadApollo(httpServer, app); // load Apollo Server

export { app, httpServer, server };
